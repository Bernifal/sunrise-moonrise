fetch("https://api.ipgeolocation.io/astronomy?apiKey=114a9550036f4075bc17eacf96ec468f")
    .then(response => response.json())
    .then(data => {
        // console.log(data.sunrise),
        document.getElementById("sunrise").textContent = data.sunrise,
        document.getElementById("sunset").textContent = data.sunset,
        document.getElementById("moonrise").textContent = data.moonrise,
        document.getElementById("moonset").textContent = data.moonset,
        document.getElementById("sun-distance").textContent = data.sun_distance,
        document.getElementById("moon-distance").textContent = data.moon_distance},
    )
      
// document.getElementsByClassName("sun").addEventListener("mouseover", function() {
//     fetch("https://api.ipgeolocation.io/astronomy?apiKey=114a9550036f4075bc17eacf96ec468f")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data.sunrise)
//         document.getElementById("sunrise").textContent = data.sunrise
//       })
//   })