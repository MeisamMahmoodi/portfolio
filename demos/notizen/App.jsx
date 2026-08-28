import { useState } from "react"

function App() {
  
  const [input, setInput] = useState("")
  const [note, setNote] = useState([])
  
  return (
    <div>
      <h1>Notizen</h1>
      
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        
        />
      <button onClick={addNote}>Hinzufügen</button>
      
      
<ul>
  {note.map((n, i) => (
    <li key={i}>
      {n}
      <button onClick={() => deleteNote(i)}>Löschen</button>
    </li>
  ))}
</ul>
    </div>
  )
  
  function addNote() {
    setNote([...note, input])
    setInput("")
    
  }
  
function deleteNote(d) {
  setNote(note.filter((o, i) => i !== d))
}
  
  
}

export default App