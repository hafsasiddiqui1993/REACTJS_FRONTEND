import React from "react";
import { Link } from "react-router-dom";
const Navigation = ({ login }) => {
  return (
    <div className="navdiv">
     
      <>


      <Link className="homenavhome" to="/">
        Home
      </Link>
        {login ? (
          <>
            <div className="dvnv2">
              <Link className="homenav" to="/ActivityFormRead">
                ActivityFormRead
              </Link>
              <Link className="homenav" to="/ActivityFormDelete">
                ActivityFormDelete
              </Link>
              <Link className="homenav" to="/ActivityFormUpdate">
                ActivityFormUpdate
              </Link>

              <Link className="homenav" to="/ActivityForm">
                ActivityForm
              </Link>
              <Link className="homenav" to="/index">
                Dashboard
              </Link>
              <Link
                className="homenav"
                onClick={() => {
                  window.localStorage.clear("Token");
                  window.location.replace("/");
                }}
              >
                Logout
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="dvnv3">
              <Link className="homenav" to="/Signup">
                SingUp
              </Link>
              <Link className="homenav1" to="/MemberSignin">
                MemberSignin
              </Link>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Navigation;
