
const MailoingList = () => {
      return (
            <div className="bg-[#F2F5FF] py-10">
                  <div className="text-center mb-10">
                        <h1 className="text-[#333333] text-3xl font-bold">Join Our Mailing List</h1>
                        <p className="text-[#666666] mt-3 text-xl">Sign up to receive inspiration, product updates,<br /> and special offers from our team.</p>
                        <div className="mt-6">
                              <input type="text" placeholder="example@gmail.com" className="h-12 w-full max-w-xs pl-5" />
                              <button className="bg-[#054C73] text-white h-12 px-5">Submit</button>
                        </div>
                  </div>
            </div>
      );
};

export default MailoingList;