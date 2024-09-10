import './Banner.css'

const Banner = () => {
      return (
            <div className="banner-container flex lg:flex-row flex-col items-center justify-center p-10 lg:p-0">
                  <div className='lg:w-1/2'></div>
                  <div className='lg:w-1/2 mx-auto'>
                        <div className='lg:w-[600px] leading-[65px] bg-[#DFE9F4] p-6 rounded-lg flex text-center lg:text-start flex-col items-center lg:items-start justify-center lg:justify-start'>
                              <p className='text-base font-semibold mb-3'>New Arrival</p>
                              <h2 className='text-[#054C73] font-bold text-5xl mb-6 lg:w-[400px]'>Discover Our New Collection</h2>
                              <p className='text-lg font-medium mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

                              <button className='bg-[#054C73] text-white font-bold rounded-full px-10 flex items-center justify-center h-14'>Buy Now</button>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;