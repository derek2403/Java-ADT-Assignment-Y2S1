import { useState } from 'react'
import axios from 'axios'

export default function DeleteDonee() {
  const [username, setUsername] = useState('')

  const handleDelete = async (e) => {
    e.preventDefault()
    if (confirm('Are you sure you want to delete this donee?')) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/donees/delete/${username}`)
        alert(response.data)
        setUsername('')
      } catch (error) {
        console.error('Error deleting donee:', error)
        alert('Error deleting donee: ' + (error.response?.data || error.message))
      }
    }
  }

  return (
    <div>
      <h2>Delete Donee</h2>
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