import DoctorsTable  from "./DoctorsTable";
import { useState } from "react";
import "./App.css";

function App() {


  const [userName, setUserName] = useState();
  //Provide the background image details..
  const myStyle = {
    backgroundImage: 'url(wal9.png)',
    
    backgroundSize: 'cover',
    height: '100%'
  }
  return (
    <div style={myStyle}>
<DoctorsTable/>
    </ div>
  );
}
export default App;
