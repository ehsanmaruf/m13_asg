"use client"

import { useEffect, useState } from "react"

async function getData() {
  const res = await fetch('api/about');
  return res.json()
}

const HomePage = () => {
  const [info, setInfo] = useState();
  useEffect(async()=>{
    const data = await getData();
    setInfo(data);
  },[])
  
  const handleClick = async () =>{
    await fetch('/api',{
      method: "POST",
    })
  }

  return (
    <div>
      <h1>Clicking this button sets a cookie!</h1>
      <button onClick={handleClick}>Set Cookie</button>

      <div>
          <p>{info?.message}</p>
          <p>{info?.version}</p>
      </div>
    </div>
  )
}

export default HomePage