import React from "react";

function About(props) {
    console.log(props)
  const { headline, url, text } = props.data;

  return (
    <div>
      <h1>{headline}</h1>
      <img src={url} alt="Restaurant" />
      <p>{text}</p>
    </div>
  );
}

export default About;