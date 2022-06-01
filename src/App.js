import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>User Data from JSON-Placeholder</h2>
      <h4>using useState and useEffect</h4>
      <DataComponent></DataComponent>
    </div>
  );
}

function DataComponent(){
  const [user,setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=>setUser(data));
  },[])
  const userStyle = {
    backgroundColor:'black',color:'white',padding:'30px',margin:'10px',display:'inline-block',boxSizing:'border-box',width: '300px'
  }
  return(
    <div>
      {
        user.map((userdata)=>{
          const {name,email,address,phone} = userdata
          return(
            <div style={userStyle}>
             <h2>{name}</h2>
            <h4>{email}</h4>
            <h4>{address.city}</h4>
            <h4>{phone}</h4>
            </div>
          )
        })
      }
    </div>
  )
}


export default App;
