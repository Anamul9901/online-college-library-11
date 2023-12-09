

const Authors = () => {
    return (
        <div className="max-w-[1300px] w-full  mx-auto md:pt-24 pb-20 pt-16  px-4">
                <h2 className="md:text-5xl text-4xl font-bold text-center pb-12">FAVORITE <span className="text-pink-500">AUTHORS</span></h2>
            <div className="flex justify-center ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 ">
                    <div className="items-center w-48 h-48">
                        <img className="rounded-xl " src={'https://www.tejgaoncollege.edu.bd/wp-content/uploads/2023/08/Principal-3.jpg'} alt="" />
                        <div><h2 className="text-center text-xl font-bold">Professor Dr. Md. Harun-or-Rashid</h2></div>
                    </div>
                    <div>
                        <img className="rounded-xl w-48 h-48" src={'https://www.tejgaoncollege.edu.bd/wp-content/uploads/2022/04/p_1717406684.jpg'} alt="" />
                        <div><h2 className="text-center text-xl font-bold">Md. Mokhlesur Rahman</h2>
                        <p className="text-center">moklesur.cse.ru@gmail.com</p></div>
                    </div>
                    <div>
                        <img className="rounded-xl w-48 h-48" src={'https://cse.tejgaoncollege.edu.bd/wp-content/uploads/2023/08/hasan.jpeg'} alt="" />
                        <div><h2 className="text-center text-xl font-bold">Md.Hasan</h2>
                        <p className="text-center">hasancseiu@gmail.com</p></div>
                    </div>
                    <div>
                        <img className="rounded-xl w-48 h-48" src={'https://cse.tejgaoncollege.edu.bd/wp-content/uploads/2023/08/Far-1.jpeg'} alt="" />
                        <div><h2 className="text-center text-xl font-bold">Farjana Haque</h2>
                        <p className="text-center">eva.farzana@yahoo.com</p></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Authors;