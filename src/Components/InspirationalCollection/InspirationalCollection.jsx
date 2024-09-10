
const InspirationalCollection = () => {
      return (
            <div className="max-w-[1200px] mx-auto my-10 lg:my-20">
                  <div className="text-center mb-10 lg:mb-20">
                        <h1 className="text-[#333333] text-3xl font-bold">Inspiration Collection</h1>
                        <p className="text-[#666666] mt-3 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 lg:p-0">
                        <img className="w-full order-1 lg:order-1" src="https://i.ibb.co.com/0jtSv1g/Mask-Group.png" alt="" />
                        <img className="lg:-mt-8 w-full order-3 lg:order-2" src="https://i.ibb.co.com/pXn3wgT/Mask-Group-1.png" alt="" />
                        <img className="w-full order-2 lg:order-3" src="https://i.ibb.co.com/sF9qWRh/Mask-Group-2.png" alt="" />
                  </div>
            </div>
      );
};

export default InspirationalCollection;