var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  let news = await fetch(newsURL).then(response => response.json())
  let weather = await fetch(weatherURL).then(response => response.json())
  return {news: news.data, weather : weather};
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync

  }
}