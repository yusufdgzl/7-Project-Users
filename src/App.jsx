
import Card from "./Card"
import "./style.css"
import { useEffect, useState } from "react"


function App() {

  const [user,setUser] = useState([])


  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then((prev)=>prev.json())
    .then((prev)=>setUser(prev.results))
  
  },[])


  return (
    <>
      <div className="navbar">
        <h1>LIVAD</h1>
      </div>
      <div className="container">
        <div className="cardSite">
          {
            user.map((item,index)=> <Card key={index} item={item}/>)
          }
        </div>
      </div>

    </>
  )
}

export default App
