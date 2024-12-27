"use client";
import fetchJsonp from "fetch-jsonp";
import { useState } from "react";
export default function Weather() {
  const [weather, setWeather] = useState();
  const today = new Date();
  const url = `https://www.cts.com.tw/api/weather_list.json?t=${
    today.getMonth() + 1
  }${today.getDate()}`;
  fetchJsonp(url, { jsonpCallbackFunction: "callback_weather" })
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (json) {
      setWeather(json[18].state);
      console.log("parsed json", json);
    })
    .catch(function (ex) {
      console.log("parsing failed", ex);
    });
  return <div className="flex justify-center">{weather}</div>;
}
