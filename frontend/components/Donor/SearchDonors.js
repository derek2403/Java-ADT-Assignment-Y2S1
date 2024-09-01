import { useState } from 'react'
import axios from 'axios'

export default function SearchDonor() {
  const [username, setUsername] = useState('')
  const [donor, setDonor] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`http://localhost:3001/api/donors/search?username=${username}`)
      setDonor(response.data)
    } catch (error) {
      console.error('Error searching donor:', error)
      alert('Error searching donor: ' + (error.response?.data || error.message))
    }
  }

  return (
    <div>
      <h2>Search Donor</h2>
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
      {donor && (
        <div>
          <h3>Donor Details</h3>
          <p>Name: {donor.name}</p>
          <p>Email: {donor.email}</p>
          <p>Age: {donor.age}</p>
          <p>Type: {donor.type}</p>
          <p>Criteria: {donor.criteria}</p>
        </div>
      )}
    </div>
  )
}