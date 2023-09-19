const HomeAbout = () => {
  return (
    <div className="block px-8 md:px-40 py-20">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="block">
          <div className="block mb-6">
            <p className="text-6xl text-[#F4CE14] markazi-text">Little Lemon</p>
            <p className="text-4xl markazi-text text-[#495E57]">Chicago</p>
          </div>
          <p className="text-lg pr-12">
            Little Lemon is a charming restaurant nestled in the heart of Chicago. We offer a delightful dining experience that combines the rich flavors of Chicago's culinary traditions with a touch of innovation.
            Our commitment to quality ingredients and exceptional service has made us a beloved dining destination. Whether you're looking for a cozy dinner or a special celebration, Little Lemon has you covered.
            Our talented chefs craft each dish with care, using locally sourced ingredients to create a menu that reflects Chicago's diverse tastes.
            Join us and experience the warmth and hospitality that define Little Lemon. Let us take you on a culinary journey through the flavors of Chicago.
            Visit us today and discover why Little Lemon is more than just a restaurant; it's a Chicago dining experience like no other.
          </p>
        </div>
        <div className="relative hidden xl:block">
          <img
            className="absolute top-0 left-0 w-80 h-80 object-cover z-20 rounded-3xl rounded-ss-3xl hover:rotate-12 transition-all duration-500 ease-in-out"
            src="/assets/Food/Cooker.jpg"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0 w-96 h-96 object-cover rounded-3xl hover:-rotate-12 transition-all duration-500 ease-in-out"
            src="/assets/Food/Meditarranean.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default HomeAbout;
