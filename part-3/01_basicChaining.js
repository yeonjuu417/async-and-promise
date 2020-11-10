var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  let obj = {};
  return fetch(newsURL)
    .then((response) => response.json())
    .then(data => {
      obj['news'] = data.data;
      return fetch(weatherURL);
    })
    .then((response)=> response.json())
    .then(data => {
      obj['weather'] = data;
      return obj;
    })
    
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}