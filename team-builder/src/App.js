import React, { useState } from "react";
import "./App.css";

function App() {
  const [memberList, setMemberList] = useState([{ name: "Sahar", unit: 2 }]);
  return (
    <div className="App">
      {memberList.map((member) => (
        <div>
          <p>Name: {member.name}</p>
          <p>Unit: {member.unit}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
