// import React, { Component, useEffect } from 'react'

// export default class userDetails extends Component{

//     constructor(props){

//         super(props);
//         this.state={
//             userData:"",
//         }

//     }
//     componentDidMount(){
//     fetch("http://localhost:5000/userData",{
//       method:"POST",
//       crossDomain:true,
//       headers:{
//         "Content-Type":"application/json",
//         Accept:"application/json",
//         "Access-Control-Allow-Origin":"*",
//       },
//       body:JSON.stringify({
//         token:window.localStorage.getItem("token"),
//       }),
//     })
//     .then((res)=>res.json())
//     .then((data)=>{
//       console.log(data,"userData");
//       this.setState({userData: data.data});
//       // auth.login("data")

//     });

//   }
//   logOut=()=>{
//     window.localStorage.clear();
//     alert("Logged Out Successfully!");
//     window.location.href="./sign-in";
//   }
//   render() {
//     return (
//       <div>

//         <h1>Welcome {this.state.userData.fname} to Home Page!</h1><br></br>
//         <button className='btn btn-primary' onClick={this.logOut}>Log Out</button>
//       </div>
//     )
//   }
// }

// export default function Authfun() {
//   const auth=useAuth()
//     useEffect(()=>{
//         alert("[page")
//         fetch("http://localhost:5000/userData",{
//       method:"POST",
//       crossDomain:true,
//       headers:{
//         "Content-Type":"application/json",
//         Accept:"application/json",
//         "Access-Control-Allow-Origin":"*",
//       },
//       body:JSON.stringify({
//         token:window.localStorage.getItem("token"),
//       }),
//     })
//     .then((res)=>res.json())
//     .then((data)=>{
//       auth.login("data")
//     });
//     },[])
//   return (
//     <div></div>
//   )
// }

import React, { useEffect, useState } from "react";
import { useAuth } from "./Auth";
function UserDetails() {
  const [userData, setuserData] = useState([]);
  const auth = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setuserData(data.data);
        auth.login(data.data.fname);
      });
  });
  function logOut() {
    window.localStorage.clear();
    alert("Logged Out Successfully!");
    window.location.href = "./sign-in";
  }
  return (
    <div>
      <h1>Welcome {userData.fname}!</h1>
      <br></br>
      <button className="btn btn-primary" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
}

export default UserDetails;
