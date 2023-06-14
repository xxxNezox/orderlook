import React, { useState } from "react";
import style from '../CSS/Settings.module.css'

function Settings(props) {
  const [headline, setHeadline] = useState("");
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "headline") {
      setHeadline(value);
    } else if (name === "url") {
      setUrl(value);
    } else if (name === "text") {
      setText(value);
    }
  };

  const handleSubmit = () => {
    const restaurantName = props.name;
    console.log(props)
    console.log(restaurantName)
    fetch("/api/updateAbout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        restaurantName: restaurantName,
        headline,
        url,
        text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error updating data:", error);
      });
  };

  return (
    <div className={style.block}>
      <h1>Change "about"</h1>
      <label htmlFor="headline">Headline:</label>
      <input
        type="text"
        id="headline"
        name="headline"
        value={headline}
        onChange={handleInputChange}
      />

      <label htmlFor="url">URL:</label>
      <input
        type="text"
        id="url"
        name="url"
        value={url}
        onChange={handleInputChange}
      />

      <label htmlFor="text">Text:</label>
      <textarea
        id="text"
        name="text"
        value={text}
        onChange={handleInputChange}
      ></textarea>

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default Settings;
