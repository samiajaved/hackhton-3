import Image from "next/image";
import ButtonComponent from "./button";
import FeaturedProducts from "./featuredProducts";
import TopCategories from "./categories";



const brandImages = [
  { src: '/brandlogo/Logo.png', width: 85, height: 87 },
  { src: '/brandlogo/Logo (1).png', width: 107, height: 109 },
  { src: '/brandlogo/Logo (2).png', width: 135, height: 139 },
  { src: '/brandlogo/Logo (3).png', width: 63, height: 65 },
  { src: '/brandlogo/Logo (4).png', width: 98, height: 101 },
  { src: '/brandlogo/Logo (5).png', width: 113, height: 115 },
  { src: '/brandlogo/Logo (7).png', width: 84, height: 87 },
];


export default async function Hero(){

return(
    <div> 
        <div className=" lg:h-[800px]  w-full py-[8px] lg:px-[130px] px-1 bg-[#F0F2F3] ">
            <div className=" lg:w-[1080px] lg:h-[500px] w-[300px] h-[330px] lg:mt-[160px] mt-14 gap-[40px] lg:flex ">
                <div className="lg:w-[450px] lg:h-[280px]  lg:mt-28 ">
                    <div className="lg:w-[450px] h-[180px] gap-6 ">
                        <h1 className=" font-normal text-xs leading-6 mt-4 ">WELCOME TO CHAIRY</h1>
                        <p className="font-semibold lg:text-5xl text-4xl  leading-[70.14px] tracking-[-2%] w-[300px] lg:w-[450px] ">Best Furniture <br></br>Collection for your interior.</p>
                        <ButtonComponent /> 
                    </div>
                </div>
                {/* chair image */}
                <Image src={'/hero/mainDivChair.png'} alt="chair" width={250} height={200} className="w-[434px] h-[584px]  ml-[150px] lg:block hidden " />
            </div>
            <Image src={'/hero/mainDivChair.png'} alt="chair" width={250} height={200} className=" h-[250px] w-[200px] ml-12  lg:hidden block  " /> 
        </div>
        {/* brands logo */}
        <div className="w-full lg:h-[122px] lg:flex lg:mt-[83px] ">
            <div className="hidden lg:w-[1200px] lg:ml-20 lg:mt-7 lg:flex lg:justify-between">
                {brandImages.map((brand, index) => (
                    <Image key={index} src={brand.src} alt="logo" width={100} height={100} className={`lg:w-[${brand.width}px] lg:h-[${brand.height}px] lg:mt-6`}/>
                    ))}
            </div>
        </div> 
       <FeaturedProducts />      
       {/* <TopCategories /> */}
    </div>

    )
}