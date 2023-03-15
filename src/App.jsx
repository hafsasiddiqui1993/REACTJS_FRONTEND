import "../styles/global.css";
import "../styles/TopCard.css";
import "../styles/Cards.css";
import "../styles/Dashboard.css";
import "../styles/Nav.css";
import "../styles/OffCanvas.css";
import "../styles/Sign.css";
import "../styles/Signup.css";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../pages/index";
import MemberSignin from "../components/auth/MemberSignin";
import Signup from "../components/auth/Signup";
import ActivityForm from "../pages/routes/member/ActivityForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../pages/notFound";
import Dashboard from '../pages/routes/member/index'
import ActivityFormRead from '../pages/routes/member/ActivityFormRead';
import ActivityFormUpdate from '../pages/routes/member/ActivityFormUpdate';
import UpdateModal from "../components/layouts/UpdateModal";
import ActivityFormDelete from '../pages/routes/member/ActivityFormDelete';
import EditMemberModal from "../components/layouts/EditMemberModal";
import Navigation from "../components/Navigation";
function App() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    var Token = localStorage.getItem("Token");
    if (Token == null) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  });
  return (
    <BrowserRouter>
    <Navigation login={login}/>
      {
      login == true ? (
        <Routes>
         <Route path="/" element={<HomePage />} />
          <Route path="/ActivityForm" element={<ActivityForm />}></Route>
          <Route
            path="/ActivityFormRead"
            element={<ActivityFormRead />}
          ></Route>
             <Route
            path="/UpdateModal/:id"
            element={<UpdateModal />}
          ></Route>
          
          
          <Route
            path="/EditMemberModal/:id" 
            element={<EditMemberModal />}
          ></Route>
          
          <Route
            path="/ActivityFormUpdate"
            element={<ActivityFormUpdate />}
          ></Route>
          <Route
            path="/ActivityFormDelete"
            element={<ActivityFormDelete />}
          ></Route> 
          <Route path="/index" element={<Dashboard />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MemberSignin" element={<MemberSignin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
