import React from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export default function Weather(props) {
  let apiKey = "5c08670149a0b1a4dc7a372a3d5e5333";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  function responseHandler(response) {
    alert(
      `the weather in ${response.weather.data.name} is ${response.data.main.temp}`
    );
  }

  axios.get(apiUrl).then(responseHandler);
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
}
