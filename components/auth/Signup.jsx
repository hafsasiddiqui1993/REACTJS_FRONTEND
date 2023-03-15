import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const [member, setmember] = useState({
    m_fullname: "",
    m_add: "",
    m_ph: "",
    m_email: "",
    m_pass: "",
  });

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { name, add, ph, email, pass } = errors;

    const newErrors = {};
    if (!name || name === "") newErrors.name = "Enter your Name!";

    if (!add || add === "") newErrors.add = "Enter your Address!";

    if (!ph || ph === "" || ph.length === 11)
      newErrors.ph =
        "Enter your Phone, Phone Number Should be valid, 11 digits";

    if (
      !email ||
      email === "" ||
      email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    )
      newErrors.email = "Enter your valid Email";
    if (!pass || pass === "" || pass.match(/^[a-zA-Z]{8,22}$/))
      newErrors.pass = "Only Letters and length must best Max 8 Chracters";

    return newErrors;
  };

  const HandleInputChange = async (e) => {
    console.log(e.target.value);

    let value = e.target.value;

    setmember({ ...member, [e.target.name]: value });
  };

  const MemberData = async (e) => {
    e.preventDefault();

    const { m_fullname, m_add, m_ph, m_email, m_pass } = member;

    try {
      const res = await fetch("https://light-helmet.cyclic.app/api/member/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          m_fullname,
          m_add,
          m_ph,
          m_email,
          m_pass,
        }),
      });

      const data = await res.json();
      console.log(data);

      // debugger
      if (data.errors) {
        //We got errors!
        const serverErors = findFormErrors(data.errors);
        data.errors.map((error) => alert(error.msg));
        setErrors(newErrors);
      } else {
        alert("user registered");
      }
    } catch (e) {
      // console.log(e);
    }
  };

  return (
    <>
    <Helmet>
  <title>Exercise Tracker</title>
  <meta name="description" content='Bootstrap React JS, Signup'>
  </meta>
</Helmet>
      <Form className="actvty-frmsignup" onChange={(e) => HandleInputChange(e)}>
        <Form.Group className="lblactvty">
          <Form.Label>Enter Full Name</Form.Label>
          <Form.Control
            className="lblsignup"
            required
            id="m_fullname"
            name="m_fullname"
            type="text"
            placeholder="Enter Full Name"
            onChange={(e) => setField("name", e.target.value)}
            isInvalid={!!errors.name}
          />

          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="lblactvty">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control
            className="lblsignup"
            required
            id="m_add"
            name="m_add"
            type="text"
            placeholder="Enter Address"
            onChange={(e) => setField("add", e.target.value)}
            isInvalid={!!errors.add}
          />

          <Form.Control.Feedback type="invalid">
            {errors.add}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="lblactvty">
          <Form.Label>Enter Phone</Form.Label>
          <Form.Control
            className="lblsignup"
            required
            id="m_ph"
            name="m_ph"
            type="text"
            placeholder="Enter Phone"
            onChange={(e) => setField("ph", e.target.value)}
            isInvalid={!!errors.ph}
          />

          <Form.Control.Feedback type="invalid">
            {errors.ph}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="lblactvty">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            className="lblsignup"
            required
            id="m_email"
            name="m_email"
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
          />

          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="lblactvty">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            className="lblsignup"
            id="m_pass"
            name="m_pass"
            type="password"
            required
            placeholder="Enter Password"
            onChange={(e) => setField("pass", e.target.value)}
            isInvalid={!!errors.pass}
          />
          <Form.Control.Feedback type="invalid">
            {errors.pass}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          className="actvty-btn"
          onClick={MemberData}
          value="Signup"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Signup;
