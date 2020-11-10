const { response } = require("express");

var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  let news = fetch(newsURL).then(response => response.json())
  let weather = fetch(weatherURL).then(response => response.json())
  
  return Promise.all([news, weather]).then((data) =>{ //response[news, weather]
    return {news: data[0].data, weather : data[1]};
  })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}