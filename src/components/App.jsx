import React from "react";
import Login from "./Login";

var isLoggedIn = false;
const currentTime = new Date(2019, 11, 1, 90).getHours();

function App() {
  return (
    <div className="container">
      {/* {(isLoggedIn) ? <h1>Hello</h1> : <Login />} */}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
