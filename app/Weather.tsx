"use client";
// import fetchJsonp from "fetch-jsonp";
import { useState } from "react";
export default function Weather() {
  const [weather, setWeather] = useState();
  // const today = new Date();
  const url = "https://www.cts.com.tw/api/weather_list.json";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      setWeather(response);
    });
  return <div className="flex justify-center">{weather}</div>;
}
