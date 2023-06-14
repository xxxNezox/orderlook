import React from "react";
import style from '../CSS/About.module.css'

function About(props) {
    console.log(props)
  const { headline, url, text } = props.data;

  return (
    <div className={style.block}>
      <h1>{headline}</h1>
      <img src={url} alt="Restaurant" />
      <p>{text}</p>
    </div>
  );
}

export default About;