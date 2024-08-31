import UpdateDetails from '../components/UpdateDetails'
import SearchDonor from '../components/SearchDonors'
import DeleteDonor from '../components/DeleteDonor'
import DonationManagement from '../components/donation-management'

export default function Dashboard() {
  return (
    <div>
      <h1>Donor Management Dashboard</h1>
      <UpdateDetails />
      <SearchDonor />
      <DeleteDonor />
      <DonationManagement />
    </div>
  )
}