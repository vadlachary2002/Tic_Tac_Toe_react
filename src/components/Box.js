import React from "react"
import "./Box.css"
export const Box =  ({value}) => {
  const boxStyle= value==="x"?"box x":"box o";
  return(
    <button className="box">{value}</button>

  )

}
