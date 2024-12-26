import fetchJsonp from "fetch-jsonp";
import { useState } from "react";
export default function Weather() {
  const [weather, setWeather] = useState();
  const today = new Date();
  const url = `https://cts.com.tw/api/weather_list.json?t=${
    today.getMonth() + 1
  }${today.getDate()}`;
  fetchJsonp(url, { jsonpCallback: "callback_weather" })
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      setWeather(response);
    });
  return <div className="flex justify-center">{weather}</div>;
}
