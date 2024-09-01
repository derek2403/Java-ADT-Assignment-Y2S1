import { useState } from 'react'
import axios from 'axios'

export default function SearchDonee() {
  const [username, setUsername] = useState('')
  const [donee, setDonee] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`http://localhost:3001/api/donees/search?username=${username}`)
      setDonee(response.data)
    } catch (error) {
      console.error('Error searching donee:', error)
      alert('Error searching donee: ' + (error.response?.data || error.message))
    }
  }

  return (
    <div>
      <h2>Search Donee</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />
        <button type="submit">Search</button>
      </form>
      {donee && (
        <div>
          <h3>Donee Details</h3>
          <p>Name: {donee.name}</p>
          <p>Email: {donee.email}</p>
          <p>Age: {donee.age}</p>
          <p>Type: {donee.type}</p>
          <p>Needs: {donee.needs}</p>
        </div>
      )}
    </div>
  )
}