import React from "react";

import Table from "react-bootstrap/Table";


import { useState } from "react";

function ActivityFormRead() {
  const [activity, setactivity] = useState([]);
  const [img, setImg] = useState();
const imageUrl = 'http://localhost:8000/api/activity/member/exercise_activity"'
  // console.log(activity)
  React.useEffect(() => {
    async function getData() {
      const res = await fetch(
        "http://localhost:8000/api/activity/member/exercise_activity",
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",

            Tokenization: localStorage.getItem("Token"),
          },
        }
      );

      const data = await res.json();
      // console.log(res)
      setactivity(data);
    }

    getData();
  }, []);
  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  React.useEffect(() => {
    fetchImage();
  }, []);
  async function deleteItem(id) {
    console.log(id);
    const deleteItems = await fetch(
      "http://localhost:8000/api/activity/member/exercise_activity/delete/" +
        id,
      {
        method: "DELETE",
        headers: {
          Tokenization: localStorage.getItem("Token"),
        },
      }
    );
    const res = await fetch(
      "http://localhost:8000/api/activity/member/exercise_activity",
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          // exe_ac_img: fileInput.current.files[0].name,
          Tokenization: localStorage.getItem("Token"),
        },
      }
    );

    const data = await res.json();
    // console.log(res)
    setactivity(data);
  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Exercise Activity Name</th>
          <th>Exercise Activity Description</th>
          <th>Exercise Activity Type</th>
          <th>Exercise Activity Duration</th>
          <th>Exercise Activity Date</th>
          <th>Exercise Activity Image</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {activity.map((item) => (
          <tr>
            <td>{item.exe_ac_name}</td>
            <td>{item.exe_ac_desc}</td>
            <td>{item.exe_ac_type}</td>
            <td>{item.exe_ac_dur}</td>
            <td>{item.exe_ac_date}</td>
            <td> <img src={"http://localhost:8000/"+item.exe_ac_img} width={80}/></td>
              <td>
            
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ActivityFormRead;
