import { useState } from 'react'
import axios from 'axios'

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    age: '',
    type: '',
    criteria: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/api/donors/create', formData)
      alert(response.data)
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Error creating account: ' + (error.response?.data || error.message))
    }
  }

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input name="age" placeholder="Age" type="number" onChange={handleChange} required />
        <select name="type" onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="individual">Individual</option>
          <option value="organisation">Organisation</option>
        </select>
        <input name="criteria" placeholder="Criteria" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}