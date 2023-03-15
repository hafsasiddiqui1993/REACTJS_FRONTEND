import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="offcnvs"
        variant="primary"
        onClick={handleShow}
      ></Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome to Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="activities">
            <ul className="act1">
              <div className="acti1">
                <Link className="linkdash1" to="/ActivityForm">
                  Add Activity
                </Link>
              </div>
              <div className="acti2">
                <Link className="linkdash2" to="/ActivityFormUpdate">
                  Update Activity{" "}
                </Link>
              </div>
              <div className="acti3">
                <Link className="linkdash3" to="/ActivityFormDelete">
                  Delete Activity
                </Link>
              </div>

              <div className="acti4">
                <Link className="linkdash4" to="/ActivityFormRead">
                  List Activities
                </Link>
              </div>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
