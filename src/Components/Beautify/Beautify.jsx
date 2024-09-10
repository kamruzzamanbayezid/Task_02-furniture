
const Beautify = () => {
      return (
            <div className="bg-[#F2F5FF]">
                  <div className="max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-20 lg:gap-14 py-10 px-5 lg:px-0">
                        <div className="lg:w-1/2 mb-6 lg:mb-0">
                              <div className='flex text-center lg:text-start flex-col items-center lg:items-start justify-center lg:justify-start'>
                                    <p className='text-3xl font-bold mb-3'>New Arrival</p>
                                    <p className='text-xl text-[#666666] mb-6'>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                                    <button className='bg-[#054C73] text-white font-bold rounded-full px-10 flex items-center justify-center h-14'>Learn More</button>
                              </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                              <img className="z-20 relative" src="https://i.ibb.co.com/HVD8PzX/Mask-Group-3.png" alt="" />
                              <img className="z-10 absolute right-0 top-1/2 -translate-y-1/2" src="https://i.ibb.co.com/yWh5X8s/Ellipse-5.png" alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default Beautify;