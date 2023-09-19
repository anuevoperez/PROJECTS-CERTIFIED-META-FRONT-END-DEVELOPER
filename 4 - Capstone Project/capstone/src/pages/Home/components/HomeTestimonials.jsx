const HomeTestimonials = () => {
  
  return (
    <div className="block px-8 md:px-40 bg-[#495E57] py-20">
      <p className="text-5xl markazi-text text-white mb-12">Testimonials</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-9 xl:gap-8">
        {/* Avatar 1 */}
        <div className="card bg-[#fff] rounded-xl mb-4 px-2 pt-2">
          <img
            className="block mx-auto object-cover rounded-full h-32 w-32 mt-6"
            src="https://i.pravatar.cc/150?img=64"
            alt=""
          />

          <div className="card-body mx-4 pb-6">
            <p className="card-title text-3xl markazi-text text-center my-4">
              David Anderson
            </p>

            <div className="flex items-center space-x-1">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star-half-stroke"
                className="w-5 h-5 text-yellow-300"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"
                ></path>
              </svg>
            </div>

            <p className="card-desc text-md my-3">
              "Had a wonderful family dinner here. The food was delicious, and the atmosphere was perfect."
            </p>
          </div>
        </div>

        {/* Avatar 2 */}
        <div className="card bg-[#fff] rounded-xl mb-4 px-2 pt-2">
          <img
            className="block mx-auto object-cover rounded-full h-32 w-32 mt-6"
            src="https://i.pravatar.cc/150?img=45"
            alt=""
          />

          <div className="card-body mx-4 pb-6">
            <p className="card-title text-3xl markazi-text text-center my-4">
              Emily Johnson
            </p>

            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>

            <p className="card-desc text-md my-3">
              "Had an amazing date night with my boyfriend. We had a fantastic evening, and the food was exceptional!."
            </p>
          </div>
        </div>

        {/* Avatar 3 */}
        <div className="card bg-[#fff] rounded-xl mb-4 px-2 pt-2">
          <img
            className="block mx-auto object-cover rounded-full h-32 w-32 mt-6"
            src="https://i.pravatar.cc/150?img=32"
            alt=""
          />

          <div className="card-body mx-4 pb-6">
            <p className="card-title text-3xl markazi-text text-center my-4">
              Sarah Williams
            </p>

            <div className="flex items-center space-x-1">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>

            <p className="card-desc text-md my-3">
              "Went out for dinner with my college buddies. The restaurant was great, but I had slightly higher expectations for the pudding."
            </p>
          </div>
        </div>

        {/* Avatar 4 */}
        <div className="card bg-[#fff] rounded-xl mb-4 px-2 pt-2">
          <img
            className="block mx-auto object-cover rounded-full h-32 w-32 mt-6"
            src="https://i.pravatar.cc/150?img=59"
            alt=""
          />

          <div className="card-body mx-4 pb-6">
            <p className="card-title text-3xl markazi-text text-center my-4">
              John Lemon
            </p>

            <div className="flex items-center space-x-1">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star-half-stroke"
                className="w-5 h-5 text-yellow-300"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"
                ></path>
              </svg>
            </div>

            <p className="card-desc text-md my-3">
              "Visited with my partner, and we had a fantastic time. Great food and a lovely atmosphere."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTestimonials;
