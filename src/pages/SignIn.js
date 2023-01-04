import React  ,{useState }from 'react'
import axios from 'axios';
import requests from '../requests';
// import {Link} from 'react-router-dom';
export const SignIn = () => {
    const [data, setData] = useState({
    username:"",
    email:"",
    password:""
})
const [message, setMessage] = useState("");

    function handle(e){
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
        setData(newdata)
        console.log(newdata)
    }

    function submit(e){
        e.preventDefault();
        var json = JSON.stringify({
            "username":   `${data.username}`,
            "email": `${data.email}`,
            "password": `${data.password}`
          });
        async function fetchdata(){
           const data= await axios.post(requests.sign_in,json, {
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
          }
            }).then(res=>{return res}).catch(err=>{console.log(err);return err});
            console.log(data.data)
            setMessage(data.data)
        }
        fetchdata();
    }

  return (
    <div>
        <form onSubmit={(e)=>submit(e)} >
    <input
      type="text"
      value={data.username}
      placeholder="UserName"
      id="username"
      onChange={(e)=>handle(e)}
    />
    <input
      type="email"
      value={data.email}
      placeholder="Email"
      id="email"
      onChange={(e)=>handle(e)}
    />
    <input
      type="password"
      value={data.password}
      placeholder="Password"
      id="password"
      onChange={(e)=>handle(e)}
    />
    <button type="submit">Send</button>
  </form>
  <div className="message">
     {message ? <div><h3>return data :</h3><p>{message}</p></div> : null}
      </div>
    </div>
  )
}
