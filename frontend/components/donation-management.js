import { useAuth } from '../contexts/AuthContext'
import AddDonation from '../components/AddDonation'
import RemoveDonation from '../components/RemoveDonation'
import DonationList from '../components/DonationList'

export default function DonationManagement() {
  const { isDonorLoggedIn } = useAuth()

  if (!isDonorLoggedIn) {
    return <div>Please sign in as a donor to access donation management.</div>
  }

  return (
    <div>
      <h1>Donation Management</h1>
      <AddDonation />
      <RemoveDonation />
    </div>
  )
}