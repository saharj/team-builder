import React, { useState } from "react";
import Form from "./Form.js";
import "./App.css";

function App() {
  const [memberList, setMemberList] = useState([]);

  const addMember = (n, e, r) => {
    const newMember = { name: n, email: e, roll: r };
    setMemberList([...memberList, newMember]);
  };
  return (
    <div className="App">
      <Form addMember={addMember} />
      <div>
        {memberList.map((member, i) => (
          <div key={i}>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Roll: {member.roll}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
