// File: components/ExecuteDonation.js
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ExecuteDonation() {
  const [donees, setDonees] = useState([])
  const [donations, setDonations] = useState([])
  const [selectedDonee, setSelectedDonee] = useState('')
  const [selectedDonation, setSelectedDonation] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchDonees()
    fetchDonations()
  }, [])

  const fetchDonees = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/admin/donees`)
      setDonees(Array.isArray(response.data) ? response.data : [])
    } catch (error) {
      console.error('Error fetching donees:', error)
      setError('Failed to fetch donees. Please try again later.')
    }
  }

  const fetchDonations = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/donations/list/all`)
      setDonations(Array.isArray(response.data) ? response.data : [])
    } catch (error) {
      console.error('Error fetching donations:', error)
      setError('Failed to fetch donations. Please try again later.')
    }
  }

  const handleExecuteDonation = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/api/admin/execute-donation`, null, {
        params: { doneeId: selectedDonee, donationId: selectedDonation }
      })
      alert(response.data)
      setSelectedDonee('')
      setSelectedDonation('')
      fetchDonations()
    } catch (error) {
      console.error('Error executing donation:', error)
      setError('Failed to execute donation. Please try again.')
    }
  }

  if (error) {
    return <div style={{color: 'red'}}>{error}</div>
  }

  return (
    <div>
      <h2>Execute Donation</h2>
      <select value={selectedDonee} onChange={(e) => setSelectedDonee(e.target.value)}>
        <option value="">Select Donee</option>
        {donees.map((donee, index) => (
          <option key={donee.username || index} value={donee.username}>{donee.name}</option>
        ))}
      </select>
      <select value={selectedDonation} onChange={(e) => setSelectedDonation(e.target.value)}>
        <option value="">Select Donation</option>
        {donations.map((donation, index) => (
          <option key={donation.donationId || index} value={donation.donationId}>
            {donation.category} - {Array.isArray(donation.items) ? donation.items.join(', ') : donation.items}
          </option>
        ))}
      </select>
      <button onClick={handleExecuteDonation}>Execute Donation</button>
    </div>
  )
}