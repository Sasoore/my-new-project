function show(event) {
  event.preventDefault()

  let c = document.querySelector('#search-input')
  let city = c.value
  let h = document.querySelector('#city')
  h.innerHTML = city

  function showTemp(response) {
    let temp = Math.round(response.data.main.temp)
    let tt = document.querySelector('#temp')
    tt.innerHTML = `${temp}°C`
  }

  let apikey = 'c5eae455c0d84c0de87118e8f84251f7'
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
  axios.get(apiLink).then(showTemp)
}

function currentWeather(event) {
  event.preventDefault()

  function showCurrenTemp(position) {
    function showTemp2(response) {
      let temp = Math.round(response.data.main.temp)
      let tt = document.querySelector('#temp')
    }

    let apikey = 'c5eae455c0d84c0de87118e8f84251f7'
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    let apilink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}`
    axios.get(apilink).then(showTemp2)
  }

  navigator.geolocation.getCurrentPosition(showCurrenTemp)
}

let searchBtn = document.querySelector('#search')
searchBtn.addEventListener('click', show)

let currentBtn = document.querySelector('#current')
currentBtn.addEventListener('click', currentWeather)
