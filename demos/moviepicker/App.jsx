import { useState } from 'react'


function App() {

  const [input, setInput] = useState("")
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)

  return (
    <div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
      <button onClick={movieSearch}>Suchen</button>

      <ul>
        {movies.map((filmTitel, position) => (
          <li key={position} onClick={() => setSelectedMovie(filmTitel)}>
            <img src={filmTitel.Poster} alt={filmTitel.Title} />
            {filmTitel.Title}

          </li>
        ))}
      </ul>

      {selectedMovie && (
        <div>
          <h2>{selectedMovie.Title}</h2>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
          <p>{selectedMovie.Year}</p>
          <button onClick={() => setSelectedMovie(null)}>Zurück</button>
        </div>
      )}
    </div>
  )



  async function movieSearch() {
    const answer = await fetch(`https://www.omdbapi.com/?apikey=92a81346&s=${input}`)
    const data = await answer.json()
    console.log(data)
    setMovies(data.Search)
  }

}

export default App;
