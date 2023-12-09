 

const Inspire = () => {
    return (
       <div className="md:pt-20 pt-12 pb-6">
        <h2 className="md:text-5xl text-4xl font-bold text-center pb-12">OUR DAILY <span>BLOG</span></h2>
        <div className="bg-gray-400 ">
        <div className="px-4  max-w-[1300px] mx-auto w-full  ">
         <div className="md:flex  gap-6 ">
            <div className="flex-[1]">
                <img src={'https://i.ibb.co/MnkmGSV/inspire.jpg'} alt="" />
            </div>
            <div className="flex-[1] text-end items-center lg:pt-32 md:pt-8 pt-10 pb-14 md:pb-0">
                <h2 className="text-3xl md:text-5xl font-bold">Inspire Daily Reading</h2>
                <p className="text-xl font-semibold py-5">Visit Our Blog and Page Find Out Daily Inspiration Quotes from the Best Authors</p>
                <button className=" btn">VIEW OUR BLOG</button>
            </div>
        </div>
       </div>
       </div>
       </div>
    );
};

export default Inspire;