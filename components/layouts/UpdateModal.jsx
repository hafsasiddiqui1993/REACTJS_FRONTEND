import React, { useState } from "react";

import { Form, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateModal = () => {
  const [updateData, setupdateData] = useState({
    exe_ac_name: "",
    exe_ac_desc: "",
    exe_ac_type: "",
    exe_ac_dur: "",
    exe_ac_date: "",
    exe_ac_img: "",
  });

  const { id } = useParams();
  const HandleInputChange = async (e) => {
    console.log(e.target.name);

    let value = e.target.value;

    setupdateData({ ...updateData, [e.target.name]: value });
  };

  React.useEffect(() => {
    async function getData() {
      const res = await fetch(
        `http://localhost:8000/api/activity/member/exercise_activity/${id}`,
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
            Tokenization: localStorage.getItem("Token"),
          },
        }
      );
      // console.log("Get response",res)
      const data = await res.json();
      console.log("Data", data);

      setupdateData((prev) => {
        return {
          ...prev,
          exe_ac_name: data.exe_ac_name,
          exe_ac_desc: data.exe_ac_desc,
          exe_ac_type: data.exe_ac_type,
          exe_ac_dur: data.exe_ac_dur,
          exe_ac_date: data.exe_ac_date,

        };
      });
    }

    getData();
  }, []);

  const updateItem = async (e) => {
    e.preventDefault();
    const {
      exe_ac_name,
      exe_ac_desc,
      exe_ac_type,
      exe_ac_dur,
      exe_ac_date,
      exe_ac_img,
    } = updateData;
    console.log(
      "Update Data",
      exe_ac_name,
      exe_ac_desc,
      exe_ac_type,
      exe_ac_dur,
      exe_ac_date,
      exe_ac_img
    );

    try {
      let data1 = new FormData();
    data1.append('exe_ac_name',exe_ac_name);
    data1.append('exe_ac_desc',exe_ac_desc);
    data1.append('exe_ac_type',exe_ac_type);
    data1.append('exe_ac_dur',exe_ac_dur);
    data1.append('exe_ac_date',exe_ac_date);
    data1.append('exe_ac_img', document.getElementById("exe_ac_img").files[0]);
      const updateItems = await fetch(
        `http://localhost:8000/api/activity/member/edit_exercise_activity/` +
          id,
        {
          method: "PUT",
          headers: {
            Tokenization: localStorage.getItem("Token"),
            
          },
          body: data1,
        }
      );

      const data01 = await updateItems.json();
      console.log(data01);
      if (updateItems.status === 404 || !updateItems) {
        window.alert("invalid");
      } else {
        window.alert("Successfully updated selected activity");
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <Form className="actvty-frm" onChange={(e) => HandleInputChange(e)}>
        <Form.Group className="lblactvty" as={Col}>
          <Form.Label> Exercise Activity Name</Form.Label>
          <Form.Control
            id="exe_ac_name"
            name="exe_ac_name"
            value={updateData.exe_ac_name}
            type="text"
            placeholder="Exercise Activity Name"
          />
        </Form.Group>

        <Form.Group className="lblactvty" as={Col}>
          <Form.Label>Exercise Activity Description</Form.Label>
          <Form.Control
            id="exe_ac_desc"
            name="exe_ac_desc"
            value={updateData.exe_ac_desc}
            type="text"
            placeholder="Exercise Activity Description"
          />
        </Form.Group>

        <Form.Group className="lblactvty" as={Col}>
          <Form.Label>Exercise Activity Types</Form.Label>
          <Form.Control
            id="exe_ac_type"
            name="exe_ac_type"
            value={updateData.exe_ac_type}
            type="hidden"
            placeholder="Exercise Activity Type"
          />
          <Form.Select defaultValue="Choose..." name="exe_ac_type" onChange={HandleInputChange} value={updateData.exe_ac_type}>
            <option>Choose Activity Type</option>
            <option>Run</option>
            <option>Bicycle Ride</option>
            <option>Swim</option>
            <option>Walk</option>
            <option>Hike</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="lblactvty" as={Col}>
          <Form.Label>Exercise Activity Duration</Form.Label>
          <Form.Control
            id="exe_ac_dur"
            name="exe_ac_dur"
            value={updateData.exe_ac_dur}
            type="hidden"
            placeholder="Exercise Activity Type"
          />
          <Form.Select defaultValue="Choose..." name="exe_ac_dur"  onChange={HandleInputChange} value={updateData.exe_ac_dur}>
            <option>Choose Exercise Activity Duration</option>
            <option>4 Weeks</option>
            <option>8 Weeks</option>
            <option>3 Months</option>
            <option>6 Months</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="lblactvty" as={Col}>
          <Form.Label>Exercise Activity Date</Form.Label>

          <Form.Control
            className="lblactvty"
            id="exe_ac_date"
            name="exe_ac_date"
            value={updateData.exe_ac_date}
            type="date"
            placeholder="Exercise Activity Date"
          />
        </Form.Group>

        <Form.Group className="lblactvtyimg">
          <Form.Control 
            className="lblactvtyimg"
            id="exe_ac_img"
            name="exe_ac_img"
            value={updateData.exe_ac_img}
            type="file" 
            size="lg"
            placeholder="Upload Exercise Activity Image" 
            onChange={HandleInputChange}
          />
        </Form.Group>
        <Button
          className="actvty-btn"
          onClick={updateItem}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UpdateModal;
