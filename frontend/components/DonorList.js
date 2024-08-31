// File: components/admin/DonorList.js
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function DonorList() {
  const [donors, setDonors] = useState([])
  const [criteria, setCriteria] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    fetchDonors()
  }, [criteria, type])

  const fetchDonors = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/admin/donors`, {
        params: { criteria, type }
      })
      setDonors(response.data)
    } catch (error) {
      console.error('Error fetching donors:', error)
    }
  }

  return (
    <div>
      <h2>Donor List</h2>
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
      <ul>
        {donors.map((donor, index) => (
          <li key={index}>
            {donor.name} - {donor.type} - Criteria: {donor.criteria}
          </li>
        ))}
      </ul>
    </div>
  )
}