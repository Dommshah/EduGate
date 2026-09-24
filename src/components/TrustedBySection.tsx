const TrustedBySection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Trusted by */}
        <div className="text-center mb-12">
          <h3 className="text-lg text-gray-500 font-semibold">Our Global Partners:</h3>
          <div className="flex justify-center flex-wrap gap-6 sm:gap-10 md:gap-12 mt-4">
            {['uni1.png', 'uni2.png', 'uni3.png', 'uni4.png', 'uni5.png', 'uni6.png'].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 grayscale-75 hover:grayscale-0 text-gray-400 text-sm sm:text-base"
              >
                <img className="w-16" src={item} alt="university"/>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Image block */}
          <div className="relative lg:w-1/2 flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-100 rounded-xl shadow-lg">
            <div className="absolute top-6 left-7 bg-purple-800 border-2 border-purple-800 text-white px-4 py-2 rounded-lg font-bold shadow-md">
              2.4k
              <div className="text-sm font-normal">Success Stories</div>
            </div>

            <div className="w-40 mt-10 h-60 md:w-1/3 rounded-xl overflow-hidden shadow-md border-2 ">
              <img
                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg"
                alt="Instructor 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/5306456/pexels-photo-5306456.jpeg"
                alt="Main student"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-transparent bg-opacity-30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 text-white cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4.832a1 1 0 001.555.832l4.444-2.416a1 1 0 000-1.664L9.555 7.168z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Text block */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Inspiring Future Innovators</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Discover EduGate – Shaping Bright Futures Worldwide</h2>
            <p className="mt-4 text-gray-600">At EduGate, we believe in transforming education through
              innovation, accessibility, and world-class mentorship. Join a
              community of learners achieving excellence every day.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-3 bg-purple-50 p-4 rounded-lg flex-1">
                <div className="text-2xl">🌍</div>
                <div>
                  <div className="font-semibold">Global Community</div>
                  <div className="text-xs text-gray-500">Learn with peers from 100+ countries.</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-purple-50 p-4 rounded-lg flex-1">
                <div className="text-2xl">✨</div>
                <div>
                  <div className="font-semibold">Career Growth</div>
                  <div className="text-xs text-gray-500">Boost your career with expert guidance.</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <img
                  src="https://placehold.co/60x60/805ad5/ffffff?text=WJ"
                  alt="William James"
                  className="rounded-full"
                />
                <div>
                  <div className="font-bold">Amelia Roberts</div>
                  <div className="text-sm text-gray-500">Founder & CEO, EduGate</div>
                </div>
              </div>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors w-full sm:w-auto">
                 Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrustedBySection



