import React from "react";

export default function Card({ name, types, img, id }) {
    return (
        <div>
            <div><h3>{name}</h3></div>
            <div><img  src={img} alt='img not found' width='250px' height='250px'/></div>

            {types?.map((e,i)=>{
            return <h4 key={i}>{e}</h4>
            })} 
        </div>
    )
}
