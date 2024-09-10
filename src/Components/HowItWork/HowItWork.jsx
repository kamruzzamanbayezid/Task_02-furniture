
const HowItWork = () => {
      return (
            <div className="max-w-[1200px] mx-auto my-10 lg:my-20">
                  <div className="text-center mb-10">
                        <h1 className="text-[#333333] text-3xl font-bold">How It Works</h1>
                        <p className="text-[#666666] mt-3 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-0">
                        <div className="flex flex-col items-center">
                              <img className="" src="https://i.ibb.co.com/t2SfZz9/Purchase-Securely.png" alt="" />
                              <p className="text-2xl font-semibold text-center mt-3">Purchase Securely</p>
                              <span className="text-[#333333] text-lg text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                        <div className="flex flex-col items-center">
                              <img className="" src="https://i.ibb.co.com/CsSKhL2/Ships-From-Warehouse.png" alt="" />
                              <p className="text-2xl font-semibold text-center mt-3">Ships From Warehouse</p>
                              <span className="text-[#333333] text-lg text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                        <div className="flex flex-col items-center">
                              <img className="" src="https://i.ibb.co.com/YLf0Qkt/Style-Your-Room.png" alt="" />
                              <p className="text-2xl font-semibold text-center mt-3">Style Your Room</p>
                              <span className="text-[#333333] text-lg text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                  </div>
            </div>
      );
};

export default HowItWork;