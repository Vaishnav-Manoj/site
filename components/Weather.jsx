export const Weather = () => {
  const weather = 0
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=doha&units=metric&appid=fe6e83ad9fdf7a3e1ecf5c22e6cc3076`).then(i => { 
        weather = { temp: `${Math.round(i.data.main.temp)}°C`, icon: `https://openweathermap.org/img/w/${i.data.weather?.at(0).icon}.png` }
      })
  return weather
}