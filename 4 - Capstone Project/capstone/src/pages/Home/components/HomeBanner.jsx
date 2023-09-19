import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

const HomeHero = () => {
  return (
    <div className="bg-[#495E57] grid grid-cols-1 xl:grid-cols-2 gap-12 py-4 mb-24 px-8 md:px-40">
      <div className="flex items-center text-white">
        <div className="block">
          <p className="text-6xl text-[#F4CE14] markazi-text">Little Lemon</p>
          <p className="text-4xl markazi-text mb-5">Chicago</p>
          <p className="text-2xl">
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reserve">
            <Button className="mt-12 p-4 px-12 w-auto font-semibold bg-[#F4CE14] text-black rounded-full transform hover:rotate-6 transition-all duration-200">
              Reserve a Table
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-end">
        <img
          className="rounded-2xl -mb-24 hover:-rotate-1 transition-all duration-300 ease-in-out lg:w-/5 h-[auto] max-h-[50vh]"
          src="/assets/Food/2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeHero;
