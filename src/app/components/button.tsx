export default function ButtonComponent (){
    return(
        <div>     
            <div className="w-[140px] h-[45px] bg-[#029FAE] text-white rounded-lg gap-[10px] py-3 pl-6 font-normal tracking-[-2%] text-sm lg:mt-24 mt-10 hover:bg-transparent  hover:text-black">
                <button className="flex justify-between gap-4 ">Shop Now
                    {/* <Image src={arrow} alt="right arrow" className="w-auto  " /> */}
                </button>
            </div>            
        </div>
    )
}