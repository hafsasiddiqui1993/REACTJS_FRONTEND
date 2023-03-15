import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { MdModeEditOutline } from "react-icons/md";
import UpdateModal from "../../../components/layouts/UpdateModal"

import { useState } from "react";

const ActivityFormUpdate = () => {
    const [activity, setactivity] = useState([]);


    React.useEffect(() => {
      async function getData() {
        const res = await fetch(
          "https://light-helmet.cyclic.app/api/activity/member/exercise_activity",
          {
            method: "GET",
  
            headers: {
              "Content-Type": "application/json",
              Tokenization: localStorage.getItem("Token"),
            },
          }
        );
  
        const data = await res.json();
        console.log(data)
        setactivity(data);
      }
  
      getData();
    }, []);
    
    async function updateItem(id) {
      console.log(id);
      const updateItems = await fetch(
        "https://light-helmet.cyclic.app/api/activity/member/edit_exercise_activity/" +
          id,
        {
          method: "PUT",
          headers: {
            Tokenization: localStorage.getItem("Token"),
          },
        }
      );
      const res = await fetch(
        "https://light-helmet.cyclic.app/api/activity/member/exercise_activity",
        {
          method: "GET",
  
          headers: {
            "Content-Type": "application/json",
            Tokenization: localStorage.getItem("Token"),
          },
        }
      );
      // const data = await updateItems.json();

      const data = await res.json();
      console.log(res)
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
          {activity.length > 0 && activity.map((item) => (
            <tr key={item._id}>
              <td>{item.exe_ac_name}</td>
              <td>{item.exe_ac_desc}</td>
              <td>{item.exe_ac_type}</td>
              <td>{item.exe_ac_dur}</td>
              <td>{item.exe_ac_date}</td>
              <td> <img src={"https://light-helmet.cyclic.app/"+item.exe_ac_img} width={80}/></td>

              <td>
                
              <Link to={`/UpdateModal/${item._id}`}>
                <div variant="primary">
                <MdModeEditOutline
                  
                  onClick={() => {
                    
                    
                      updateItem(item._id);
                      <UpdateModal />
                    }}
                  />
                  
                </div>
                </Link>
              </td>
              
            </tr>
          ))}
        </tbody>
        
      </Table>
    );
  }

  
export default ActivityFormUpdate;



