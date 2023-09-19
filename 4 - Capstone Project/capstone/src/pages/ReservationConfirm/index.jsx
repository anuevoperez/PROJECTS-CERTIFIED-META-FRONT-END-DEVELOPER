import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const ReservationConfirm = () => {
  return (
    <>
      <Header />
      <main className="px-8 md:px-40 py-10">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center text-[#495E57] mb-6">
            Reservation Confirmed
          </h1>
          <ul className="text-[#495E57] text-lg mb-6">
            <li>
              <strong>Reservation Name:</strong> John Doe
            </li>
            <li>
              <strong>Mobile Number:</strong> +1 123-456-7890
            </li>
            <li>
              <strong>Date:</strong> October 15, 2023
            </li>
            <li>
              <strong>Time:</strong> 7:30 PM
            </li>
            <li>
              <strong>No of Adults:</strong> 2
            </li>
            <li>
              <strong>No of Children:</strong> 1
            </li>
          </ul>
          <p className="text-[#495E57] text-lg mb-6">
            If you have any special requests or need to make changes to your reservation, please feel free to contact us.
          </p>
          <p className="text-[#495E57] text-lg">
            We look forward to serving you on your reservation date!
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ReservationConfirm
