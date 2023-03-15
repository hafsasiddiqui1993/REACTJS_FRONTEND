import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import { useState } from "react";

function MemberSignin() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const [member, setmember] = useState({
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



  const validated = () => {
    const { email, pass } = form;
    const vl = {};

    if (email) vl.email = "Email matched";
    if (pass) vl.pass = "Password matched";
    return vl;
  };
  const HandleInputChange = async (e) => {
    console.log(e.target.name);

    let value = e.target.value;

    setmember({ ...member, [e.target.name]: value });
  };

  const MemberData = async (e) => {
    e.preventDefault();

    const vl = validated();

    const { m_email, m_pass } = member;
    console.log(member);
    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          m_email,
          m_pass,
        }),
      });

      const result = await res.json();
      window.localStorage.setItem("Token", result.Token);

      window.location.replace("http://localhost:5173/");
      console.log(result.Token);
    } catch (e) {
      alert("Email Or Password Wrong!");
    }
  };

  return (
    <>
<Helmet>
  <title>Exercise Tracker</title>
  <meta name="description" content='Bootstrap React JS, Signin'>
  </meta>
</Helmet>




      <Form className="actvty-frmsign" onChange={(e) => HandleInputChange(e)}>
        <div className="divsign">   
        <Form.Group>
          <Form.Label >Enter Email</Form.Label>
          <Form.Control className="lblactvtys"
            required
            id="m_email"
            name="m_email"
            type="email"
            placeholder="Enter Email"
            value={member.m_email}
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
          />

          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label >Enter Password</Form.Label>
          <Form.Control className="lblactvtys"
            id="m_pass"
            name="m_pass"
            type="password"
            required
            placeholder="Enter Password"
            value={member.m_pass}
            onChange={(e) => setField("pass", e.target.value)}
            isInvalid={!!errors.pass}
          />
          <Form.Control.Feedback type="invalid">
            {errors.pass}
          </Form.Control.Feedback>
        </Form.Group>
        </div>
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

export default MemberSignin;
