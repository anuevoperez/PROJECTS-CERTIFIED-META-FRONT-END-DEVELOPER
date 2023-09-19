import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

const HomeSpecials = () => {
  return (
    <div className="block px-4 md:px-20 mb-12 py-20">
      <div className="flex justify-between mb-8">
        <p className="text-5xl markazi-text">Specials</p>
        <Button className="p-2 px-12 font-semibold bg-[#F4CE14] text-black rounded-full transform hover:-rotate-6 transition-all duration-200">
          Online Menu
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-x-20">
        {/* Tarjeta 1 */}
        <div className="card bg-[#f8f6f6] rounded-xl mb-4">
          <img
            className="object-cover rounded-t-xl h-48 w-full"
            src="/assets/Food/1.png"
            alt=""
          />

          <div className="card-body mx-2 pb-4 px-2">
            <div className="flex justify-between items-center my-2">
              <div className="card-title text-3xl markazi-text mt-2">
                Greek Salad
              </div>
            </div>
            <p className="card-desc text-md mb-4 text-[#6e6e6e]">
              The famous Greek salad of crispy lettuce, peppers, olives, and our
              Chicago-style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="flex justify-end">
              <Button className="p-2 text-black rounded-lg animate-pulse transition-all duration-1000 ease-in-out">
                <Link to="/">
                  Order a delivery &nbsp;
                  <FontAwesomeIcon className="cursor-pointer" icon={faBiking} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="card bg-[#f8f6f6] rounded-xl mb-4">
          <img
            className="object-cover rounded-t-xl h-48 w-full"
            src="/assets/Food/3.png"
            alt=""
          />

          <div className="card-body mx-2 pb-4 px-2">
            <div className="flex justify-between items-center my-2">
              <div className="card-title text-3xl markazi-text mt-2">
                Bruschetta
              </div>
            </div>
            <p className="card-desc text-md mb-4 text-[#6e6e6e]">
              Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.
            </p>
            <div className="flex justify-end">
              <Button className="p-2 text-black rounded-lg animate-pulse transition-all duration-1000 ease-in-out">
              <Link to="/">
                  Order a delivery &nbsp;
                  <FontAwesomeIcon className="cursor-pointer" icon={faBiking} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="card bg-[#f8f6f6] rounded-xl mb-4">
          <img
            className="object-cover rounded-t-xl h-48 w-full"
            src="/assets/Food/12.webp"
            alt=""
          />

          <div className="card-body mx-2 pb-4 px-2">
            <div className="flex justify-between items-center my-2">
              <div className="card-title text-3xl markazi-text mt-2">
                Lemon Pie
              </div>
            </div>
            <p className="card-desc text-md mb-4 text-[#6e6e6e]">
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
            </p>
            <div className="flex justify-end">
              <Button className="p-2 text-black rounded-lg animate-pulse transition-all duration-1000 ease-in-out">
              <Link to="/">
                  Order a delivery &nbsp;
                  <FontAwesomeIcon className="cursor-pointer" icon={faBiking} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeSpecials;
