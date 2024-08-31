// File: components/SignIn.js
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/AuthContext'

export default function SignIn() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const router = useRouter()
  const { loginDonor } = useAuth()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/api/donors/signin', formData)
      loginDonor(response.data)
      router.push('/dashboard')
    } catch (error) {
      console.error('Error signing in:', error)
      alert('Error signing in: ' + (error.response?.data || error.message))
    }
  }

  return (
    <div>
      <h2>Sign In Donor</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}