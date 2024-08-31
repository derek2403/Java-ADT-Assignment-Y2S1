// File: components/DoneeList.js
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function DoneeList() {
  const [donees, setDonees] = useState([])
  const [criteria, setCriteria] = useState('')
  const [type, setType] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchDonees()
  }, [criteria, type])

  const fetchDonees = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/admin/donees`, {
        params: { criteria, type }
      })
      setDonees(Array.isArray(response.data) ? response.data : [])
      setError(null)
    } catch (error) {
      console.error('Error fetching donees:', error)
      setError('Failed to fetch donees. Please try again later.')
      setDonees([])
    }
  }

  return (
    <div>
      <h2>Donee List</h2>
      <div>
        <input
          type="text"
          placeholder="Filter by criteria"
          value={criteria}
          onChange={(e) => setCriteria(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All Types</option>
          <option value="individual">Individual</option>
          <option value="organisation">Organisation</option>
        </select>
      </div>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {donees.length === 0 ? (
        <p>No donees found.</p>
      ) : (
        <ul>
          {donees.map((donee, index) => (
            <li key={index}>
              {donee.name} - {donee.type} - Needs: {donee.needs}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}