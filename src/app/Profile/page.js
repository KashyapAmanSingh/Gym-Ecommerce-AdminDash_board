 

"use client";

import React, { useEffect, useState } from "react";
import { FcAddressBook, FcBusinessman } from "react-icons/fc";

export default function Profile() {
  const [user, setUser] = useState({});
  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    const getKindeSession = async () => {
      const res = await fetch("/api/kindeSession");
      const data = await res.json();

      setUser(data.user);
      setAuthStatus(data.authenticated);
    };

    getKindeSession();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-info fw-bold fs-1 my-5">Admin Profile</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fs-3 text-center"><FcBusinessman/> Admin Name : {user.given_name}  {user.family_name}
</h5>
        
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title fs-3 text-center"><FcAddressBook/>Admin Email : {user.email}</h5>
         </div>
      </div>
    </div>
  );
}
