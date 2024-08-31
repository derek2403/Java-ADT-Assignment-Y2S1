import { useState } from 'react'
import axios from 'axios'

export default function DeleteDonor() {
  const [username, setUsername] = useState('')

  const handleDelete = async (e) => {
    e.preventDefault()
    if (confirm('Are you sure you want to delete this donor?')) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/donors/delete/${username}`)
        alert(response.data)
        setUsername('')
      } catch (error) {
        console.error('Error deleting donor:', error)
        alert('Error deleting donor: ' + (error.response?.data || error.message))
      }
    }
  }

  return (
    <div>
      <h2>Delete Donor</h2>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username to delete"
          required
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  )
}
