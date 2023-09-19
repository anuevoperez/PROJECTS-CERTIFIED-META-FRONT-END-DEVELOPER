import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useState, useEffect } from 'react'; // Agrega useEffect

const Reserve = () => {
  const navigate = useNavigate();
  const [reservationName, setReservationName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [bookDate, setBookDate] = useState('');
  const [bookTime, setBookTime] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const isValid =
      reservationName &&
      mobileNumber.match(/^\d+$/) &&
      bookDate &&
      bookTime &&
      adults &&
      children &&
      !isNaN(adults) &&
      !isNaN(children) &&
      adults >= 0 &&
      children >= 0;

    setIsFormValid(isValid);
  };

  const handleMobileNumberBlur = () => {
    if (mobileNumber && !mobileNumber.match(/^\d+$/)) {
      // Si el número de teléfono no contiene solo números, establece el borde en rojo
      document.getElementById('mobile-number').style.border = '1px solid red';
    } else {
      // Si el número de teléfono es válido, restaura el estilo predeterminado del borde
      document.getElementById('mobile-number').style.border = '1px solid #ccc';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validations
    if (!isFormValid) {
      alert('Please fill out all the required fields and enter valid numbers.');
      return;
    }
    // If all validations pass, navigate to the confirmation page
    navigate('/reserve-confirmation');
  };

  // Update form validity whenever inputs change
  useEffect(() => {
    validateForm();
  }, [reservationName, mobileNumber, bookDate, bookTime, adults, children]);

  return (
    <>
      <Header />
      <main>
        <div className="flex items-center justify-center h-[90vh] px-8 md:px-40">
          <div className="block w-full lg:w-3/4 bg-[#fbfafa] rounded-xl p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="reservation-name"
                  className="block mb-2 text-sm font-medium text-[#495E57]"
                >
                  Reservation Name:
                </label>
                <input
                  id="reservation-name"
                  type="text"
                  value={reservationName}
                  onChange={(e) => setReservationName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F4CE14] focus:border-[#F4CE14] block w-full p-2.5"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="mobile-number"
                  className="block mb-2 text-sm font-medium text-[#495E57]"
                >
                  Mobile Number:
                </label>
                <input
                  id="mobile-number"
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  onBlur={handleMobileNumberBlur}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F4CE14] focus:border-[#F4CE14] block w-full p-2.5"
                  placeholder="Your Mobile Number"
                  required
                />
                {mobileNumber && !mobileNumber.match(/^\d+$/) && (
                  <p className="text-xs text-red-500 mt-2">
                    Please enter numbers only.
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-6">
                  <label
                    htmlFor="book-date"
                    className="block mb-2 text-sm font-medium text-[#495E57]"
                  >
                    Book a date:
                  </label>
                  <input
                    id="book-date"
                    type="date"
                    value={bookDate}
                    onChange={(e) => setBookDate(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F4CE14] focus:border-[#F4CE14] block w-full p-2.5"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="book-time"
                    className="block mb-2 text-sm font-medium text-[#495E57]"
                  >
                    Select a booking time:
                  </label>
                  <select
                    name=""
                    id="book-time"
                    value={bookTime}
                    onChange={(e) => setBookTime(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F4CE14] focus:border-[#F4CE14] block w-full p-2.5"
                    required
                  >
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                    <option value="22:30">10:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-6">
                  <label
                    htmlFor="book-adults"
                    className="block mb-2 text-sm font-medium text-[#495E57]"
                  >
                    No of adults:
                  </label>
                  <input
                    id="book-adults"
                    type="number"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F4CE14] focus:border-[#F4CE14] block w-full p-2.5"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="book-children"
                    className="block mb-2 text-sm font-medium text-[#495E57]"
                  >
                    No of children:
                  </label>
                  <input
                    id="book-children"
                    type="number"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F4CE14] focus:border-[#F4CE14] block w-full p-2.5"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="special-requests"
                  className="block mb-2 text-sm font-medium text-[#495E57]"
                >
                  Special Requests (Optional):
                </label>
                <textarea
                  id="special-requests"
                  rows="4"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#F4CE14] focus:border-[#F4CE14]"
                  placeholder="I have a special request..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className={`block mx-auto w-80 p-4 mt-8 px-12 font-semibold ${
                  isFormValid
                    ? 'bg-[#F4CE14] text-black hover:scale-105 transition-all duration-300 ease-in-out'
                    : 'bg-[#B9B9B9] text-gray-700 pointer-events-none'
                } rounded-full`}
                disabled={!isFormValid}
              >
                Reserve a table
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Reserve;
