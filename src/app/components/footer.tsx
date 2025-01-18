import Image from "next/image";

export default function Footer (){
    return (
        <div>
            <div className=" lg:w-full lg:h-[499px] w-full h-[700px]  bg-[#F0F0F0] lg:mt-40 px-10 lg:px-0 ">
                <div className=" px-[20px] lg:w-[1240px] lg:h-[377px] lg:ml-[70px]  w-[392px]  lg:flex lg:justify-between ">


                    <div className="lg:w-[248px] h-fit gap-[35px] mt-32">
                        <div className="flex">
                            <Image src={'/navbar/Logo Icon.png'} alt="logo" width={30} height={30} />
                            <h1 className=" m-2 font-medium text-lg leading-[18px]">Comforty</h1>
                        </div>
                        <p className="mt-4 lg:w-full w-[357px] font-satoshi font-normal text-sm lg:mt-6">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.</p>
                        
                        <Image src={'/navbar/Social links.png'} width={180} height={100} alt="social logo" className="mt-6 lg:mt-6" />
                    </div>


                    <div className="flex justify-between">
                        <div className="lg:h-fit lg:mt-32 mt-10 w-fit ">
                            <h1 className="font-medium text-base leading-[18px]">CATEGORY</h1>
                            <p className="mt-4 text-base leading-[19px] font-normal">sofa</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">arm chair</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">desk chairk</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">wooden chair</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">park bench</p>
                        </div>

                        <div className=" lg:h-fit lg:mt-32 mt-10 w-fit lg:ml-32 ml-32 ">
                        <h1 className="font-medium text-base leading-[18px]">SUPPORT</h1>
                            <p className="mt-4 text-base leading-[19px] font-normal">help Support</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Terms and Condition</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Privacy Policy</p>
                            <p className="mt-4 text-base leading-[19px] font-normal">Help</p>
                        </div>
                    </div>


                    

                    <div className="flex">
                        <div className=" lg:h-fit lg:mt-32 mt-10 w-[350px] ">
                            <h1 className="font-medium text-base leading-[18px]">NEWSLETTER</h1>
                            <div className="flex mt-4">
                                <input placeholder="Your email"></input>
                                <button className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:border-blue-500 p-3 rounded ml-2">subscribe</button>
                            </div>
                            <p className="mt-4 lg:text-base text-sm leading-[19px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>

                        </div>



                    </div>


                    <div className="lg:hidden block ">   
                    <div className="w-[358px]  border-[1px] bg-gray-600 mt-4 "></div>
                    <h1 className="mt-2 ml-10 font-normal text-sm leading-[18.9px]">@ 2021 - Blogy - Designed & Develop by Zakirsoft</h1>
                    <Image src={'/navbar/footer.png'} alt="logo" width={180} height={60}  className="ml-10 mt-4"/>
                    </div>
                </div>

                 
                    <div className=" w-[1240px] hidden  lg:block  border-[1px] ml-16  bg-gray-600 mt-4"></div>
                    <div className=" hidden  lg:flex justify-between px-4 "> 
                    <h1 className=" ml-16 font-normal text-sm leading-[18.9px] mt-4">@ 2021 - Blogy - Designed & Develop by Zakirsoft</h1>
                    <Image src={'/navbar/footer.png'} alt="logo" width={180} height={40}  className="mt-4 mr-6 h-auto"  />
                    </div>
            </div>

           

        </div>
    )
}