import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';

function UseList() {
    const [users, setusers] = useState([]);
    useEffect(()=>{
      try {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>(setusers(res.data)));
      } catch (error) {
        console.log(error);
      }
      
    },[]);
    console.log(users)
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",margin:"80px 180px"}}>
{users?users.map((el)=><div>


    <Card style={{ width: '19rem',maxHeight:"605px",minHeight:"605px",marginBottom:"50px" ,backgroundColor:"black"}} className='card'>
      <Card.Body>
        <Card.Title style={{color:"rgb(196, 21, 123)",fontSize:"12px"}}>{el.id}</Card.Title>
        <Card.Text  style={{color:"rgb(196, 21, 123)",fontSize:"20px",textAlign:"center",fontFamily:"fantasy"}}>{el.name} </Card.Text>
        <Card.Text  style={{color:"white",fontFamily:"serif"}}>{el.username}</Card.Text>
        <Card.Text  style={{color:"blue",textDecoration:"underline",fontSize:"15px",fontFamily:"serif"}}>{el.email}</Card.Text>
        <Card.Text  style={{color:"white",fontFamily:"serif"}}>{el.address.street}</Card.Text>
        <Card.Text style={{color:"white",fontFamily:"serif"}}>{el.address.suite}</Card.Text>
        <Card.Text  style={{color:"white",fontFamily:"serif"}}>{el.address.city}</Card.Text>
        <Card.Text  style={{color:"white",fontFamily:"serif"}}>{el.address.zipcode}</Card.Text>
        <Card.Text  style={{color:"white",fontFamily:"serif"}}>{el.address.geo.lat}</Card.Text>
        <Card.Text style={{color:"white",fontFamily:"serif"}}>{el.address.geo.lng}</Card.Text>
        <Card.Text style={{color:"white",fontFamily:"serif"}}>{el.phone}</Card.Text>
        <Card.Text style={{color:"white",fontFamily:"serif"}}>{el.website}</Card.Text>
        <Card.Text style={{color:"white",fontFamily:"serif"}}>{el.company.name}</Card.Text>
        <Card.Text style={{color:"white",fontFamily:"serif"}}>{el.company.catchPhrase}</Card.Text>
        <Card.Text style={{color:"white",fontFamily:"serif"}}>{el.company.bs}</Card.Text>
      </Card.Body>
    </Card>



    {/* <h1>{el.name}</h1> */}
</div>):<img src="https://media.tenor.com/guhB4PpjrmUAAAAM/loading-loading-gif.gif"/>}
    </div>
  )
}

export default UseList