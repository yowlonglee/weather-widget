import fetchJsonp from "fetch-jsonp";

export default function Weather() {
  const today = new Date();
  const url = `https://cts.com.tw/api/weather_list.json?t=${
    today.getMonth() + 1
  }${today.getDate()}`;
  fetchJsonp(url, { jsonpCallback: "callback_weather" }).then((res) => {
    console.log(res.json());
    return res.json();
  });
  return <div className="flex justify-center">Weather</div>;
}
