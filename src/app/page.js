"use client"

import { useEffect, useState } from "react"

const HomePage = () => {

  const [data, setData] = useState();

  useEffect(async()=>{
    const res = await fetch('/api/about')
    setData(res);
    console.log(res);
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

      </div>
    </div>
  )
}

export default HomePage