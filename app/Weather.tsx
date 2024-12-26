"use client";
import fetchJsonp from "fetch-jsonp";
import { useState } from "react";
export default function Weather() {
  const [weather, setWeather] = useState();
  const today = new Date();
  const url = `https://cts.com.tw/api/weather_list.json?t=${
    today.getMonth() + 1
  }${today.getDate()}`;
  fetchJsonp(url, { jsonpCallbackFunction: "callback_weather" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      setWeather(response);
    });
  return <div className="flex justify-center">{weather}</div>;
}
