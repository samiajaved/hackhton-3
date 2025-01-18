import Image from "next/image";

export default function Contact (){
    return (
        <div>
            <div>
                <h1 className=" font-bold text-2xl text-center mt-11">Get In Touch With Us</h1>
                <p className="text-base text-center leading-[24px] mt-6">For More Information About Our Product & Services. Please Feel Free To Drop Us <br></br> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

                <div className="lg:w-[1000px] h-fit mt-14 ml-10  lg:ml-[180px]">
                    <div className="lg:flex  ">
                        <div className="w-[300px] h-[500px] lg:ml-0 ml-10  p-4 ">

                             
                                <Image src={"/contact/Vector (3).png"} alt="phone logo"  width={22} height={22} className="m-3"/>
                                <div className="ml-10 -mt-5 ">
                                    <h1 className="font-bold ">Adress</h1>
                                    <p>236 5th SE Avenue, New York NY10000, United States</p>
                                </div>



                                
                                <Image src={"/contact/bxs_phone.png"} alt="phone logo"  width={22} height={22} className="m-3"/>
                                <div className="ml-10 -mt-5 ">
                                    <h1 className="font-bold ">Phone</h1>
                                    <p>Mobile: +(84) 546-6789</p>
                                    <p> Hotline: +(84) 456-6789</p>
                                </div>


                                
                                <Image src={"/contact/bi_clock-fill.png"} alt="phone logo"  width={22} height={22} className="m-3"/>
                                <div className="ml-10 -mt-5 ">
                                    <h1 className="font-bold ">Working Time</h1>
                                    <p>Monday-Friday: 9:00 - <br></br>22:00<br></br> Saturday-Sunday: 9:00 -<br></br> 21:00</p>
                                </div>
                        </div>


                        <div>
                            <form className=" ml-8 lg:ml-20  ">
                                <h1 className="my-4 font-medium text-base  "> Your Name</h1>
                                <input placeholder="abc" className="lg:w-[528px] lg:h-[60px] h-[50px] w-[300px] rounded-[10px] pl-4 border"/>
                                <h1 className="my-4 font-medium text-base "> Email Adress </h1>
                                <input placeholder="abc@gmail.com" className="lg:w-[528px] lg:h-[60px] h-[50px] w-[300px]  rounded-[10px] pl-4 border"/>
                                <h1 className="my-4 font-medium text-base "> Subject</h1>
                                <input placeholder="this is optional" className="lg:w-[528px] lg:h-[60px] h-[50px] w-[300px]  rounded-[10px] pl-4 border"/>
                                <h1 className="my-4 font-medium text-base "> Message</h1>
                                <textarea placeholder="Hi! i'd like to ask about" className="lg:w-[528px] lg:h-[120px] h-[80px] w-[300px]  pl-4 rounded-[10px] border"></textarea>
                                <button className='bg-[#029FAE] hover:bg-transparent  hover:text-black  text-white pt-2  px-7  py-2  rounded-[5px] mt-7    w-[237px] h-[52px] '>Submit </button>

                            </form>
                        </div>
                    </div>
                </div>



                <div className="hidden lg:flex justify-between items-center bg-gray-100 px-4 py-10 mx-auto border border-gray-300 max-w-[1080px] mt-10">
            
                    <div className=" flex justify-between">
                        <Image src="/contact/trophy 1.png" alt="High Quality Icon"  width={60} height={60} className="mb-2 mx-auto" />
                        <div>
                        <h3 className="text-lg font-semibold">High Quality</h3>
                        <p className="text-gray-600">crafted from top materials</p>
                        </div>
                    </div>

                    {/* <!-- Warranty Protection Section --> */}
                    <div className="text-center flex justify-between">
                        <Image src="/contact/guarantee.png" alt="Warranty Protection Icon" width={60} height={60} className="mb-2 mx-auto"/>
                        <div>
                        <h3 className="text-lg font-semibold">Warranty Protection</h3>
                        <p className="text-gray-600">Over 2 years</p>
                        </div>
                    </div>

                    {/* <!-- 24/7 Support Section --> */}
                    <div className="text-center flex justify-between">
                        <Image src="/contact/Vector (4).png" alt="24/7 Support Icon" width={60} height={60} className="mb-2 mx-auto"/>
                        <div>
                        <h3 className="text-lg font-semibold">24/7 Support</h3>
                        <p className="text-gray-600">Dedicated support</p>
                        </div>
                    </div>
            </div>

            
            
            
            </div>


            <div>
                
            </div>
        </div>
    )
}