
const Footer = () => {
      return (
            <footer className="px-4 divide-y bg-[#03344F] text-white dark:bg-gray-100 dark:text-gray-800">
                  <div className="max-w-[1200px] flex flex-col justify-between py-20 mx-auto space-y-8 lg:flex-row lg:space-y-0 gap-6">
                        <div className="lg:w-1/3">
                              <h1 className="text-2xl font-bold mb-4">Beauty Care</h1>
                              <p className="mb-7">Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                              <h1 className="text-2xl font-bold ">Follow Us</h1>
                        </div>
                        <div className="lg:w-2/3">
                              <h1 className="text-2xl font-bold mb-5">Instagram Shop</h1>
                              <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 sm:grid-cols-4">
                                    <img src="https://i.ibb.co.com/6n7wVkg/IG-1.jpg" alt="" />
                                    <img src="https://i.ibb.co.com/Lkgwm4N/IG-2.jpg" alt="" />
                                    <img src="https://i.ibb.co.com/0yzxytr/IG-3.jpg" alt="" />
                                    <img src="https://i.ibb.co.com/cw6p8Y0/IG-4.jpg" alt="" />
                              </div>
                        </div>
                  </div>

            </footer>
      );
};

export default Footer;