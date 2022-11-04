import React from "react";
import style from './Card.module.css'

export default function Card({ name, types, img, id }) {

    return (
        <div className={style.container} >
            <div className={style.pokemon}>
            <div className={style.name}><h3>{name}</h3></div>
            <div className={style.image}><img  src={img} alt='img not found' width='250px' height='250px' className={style.img}/></div>
            <div className={style.types}>
            {types?.map((e,i)=>{
                return <h4 key={i}>{e}</h4>
            })} 
            </div>
            </div>
        </div>
    )
}
