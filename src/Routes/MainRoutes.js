import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "../Pages/UserList";
import Customer from "../Pages/Customer";
import CreateUser from "../Pages/CreateUser";
import Announcement from "../Pages/Announcement";
import Status from "../Pages/Status";
import MyProfile from "../Pages/MyProfile";
function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/users/listuser" element={<UserList />} />
        <Route path="/users/createuser" element={<CreateUser />} />
        <Route path="/users/customer" element={<Customer />} />
        <Route path="/users/announcements" element={<Announcement />} />
        <Route path="/users/status" element={<Status />} />
        <Route path="/users/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
