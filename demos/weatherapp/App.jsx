import { useState, useEffect } from 'react'



function App() {
  const [city, setCity] = useState(null)
  const [input, setInput] = useState("")
  const [error, setError] = useState(null)


  useEffect(() => {
    showCity("Munich")
  }, [])


  return (
    <>
      <h1>Wetter App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => showCity(input)}>Stadt anzeigen</button>

      {city && (
        <>
          <h1>{city.name}</h1>
        <h2>{city.main.temp}</h2>
          <p>{city.weather[0].description}</p>
        </>
      )}


      {error && (
        <h2>Stadt nicht gefunden</h2>
      )}

    </>
  )

  async function showCity(cityName) {
    const answer = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6e85bd7199e63510e1ade17d1569ee05&units=metric`)
    const data = await answer.json()

    if (data.cod === "404") {
      setError("Stadt nicht gefunden")
      setCity(null)
    } else {
      setCity(data)
      setError(null)
    }


  }
}

export default App
