import { useState } from 'react'
import Link from 'next/link'
import CreateAccount from '../components/Register.js'
import SignIn from '../components/SignIn'
import RegisterDonee from '../components/RegisterDonee'
import SignInDonee from '../components/SignInDonee'
import { useAuth } from '../contexts/AuthContext'

export default function Home() {
  const [userType, setUserType] = useState(null)
  const [action, setAction] = useState(null)
  const { isDonorLoggedIn, isDoneeLoggedIn } = useAuth()

  if (isDonorLoggedIn) {
    return (
      <div>
        <h1>Welcome, Donor!</h1>
        <Link href="/dashboard">
          <a>Go to Donor Dashboard</a>
        </Link>
      </div>
    )
  }

  if (isDoneeLoggedIn) {
    return (
      <div>
        <h1>Welcome, Donee!</h1>
        <Link href="/donee-dashboard">
          <a>Go to Donee Dashboard</a>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Charity Management System</h1>
      {!userType && (
        <div>
          <button onClick={() => setUserType('donor')}>I'm a Donor</button>
          <button onClick={() => setUserType('donee')}>I'm a Donee</button>
        </div>
      )}
      {userType && !action && (
        <div>
          <button onClick={() => setAction('register')}>Register</button>
          <button onClick={() => setAction('signin')}>Sign In</button>
          <button onClick={() => setUserType(null)}>Back</button>
        </div>
      )}
      {userType === 'donor' && action === 'register' && <CreateAccount />}
      {userType === 'donor' && action === 'signin' && <SignIn />}
      {userType === 'donee' && action === 'register' && <RegisterDonee />}
      {userType === 'donee' && action === 'signin' && <SignInDonee />}
      {action && (
        <button onClick={() => setAction(null)}>Back</button>
      )}
    </div>
  )
}