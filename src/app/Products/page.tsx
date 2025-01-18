import { sanityFetch } from "@/sanity/lib/fetch";
import {productPage} from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
export type product ={
    _id:string;
    title:string;
    price:number;
    imageUrl:string;  
}



export default async function Products(){
    const products: product[] = await sanityFetch({query:productPage})

    return(
        <div>
   
   <div className="h-[850px] w-full py-[8px] lg:px-[130px] px-[40px] bg-white ">
            <div className=" lg:w-[1080px] lg:h-[500px] lg:mt-[160px] mt-10 gap-[40px] lg:flex ">


                  
            <Image src={"/products/image (17).png"} width={325} height={280} alt="" className='lg:w-[575px] lg:h-[507px]'/>

                    <div className="w-[440px] h-[430px]  ">
                        <div className="w-[440px] h-[230px] gap-6">
                            <h1 className=" w-[400px] font-semibold text-5xl leading-[70.14px] tracking-[-2%] text-[#212529] ">
                            Library Stool Chair
                            </h1>
                            <button className="py-1 pl-2 bg-[#029FAE] hover:bg-white hover:text-[#029FAE] mt-4 text-white gap-4 rounded-3xl w-[130px] h-[40px]">$20.00 USD</button>
                            <div className="w-[440px] h-[1px] border mt-5  "> </div>
                            <p className="font-normal lg:text-[22px]  leading-6 text-[#212529] mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
                            </p>

                            {/* button */}
                            
                            <div className="w-[140px] h-[45px] bg-[#029FAE] text-white flex justify-center items-center  rounded-lg gap-[10px]  pl-4
                            font-normal tracking-[-2%] text-sm lg:mt-12 my-8">
                                <button className=" ">
                                    {/* <Image src={"/group.png"} width={22} height={21} alt="" className=''/> */}
                                    Add To cart
                                </button>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            {/* featured Products */}

            <div className='flex  '>
                <div className=" flex justify-between w-full px-[50px]   ">
                 <h1 className="text-gray-800 font-bold text-2xl  lg:text-3xl  ">Fetured Products</h1>
                 <Link href="AllProducts" className="font-bold lg:text-lg text-sm h-fit underline " >veiw all</Link>
                </div>
            </div>            
            
            <main className='lg:flex justify-between mt-8 lg:ml-5 ml-24'>
                {products.map((items)=>(
                
                    <div key={items._id} className=" rounded-md  mt-10">
                        <div className="shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out" >
                            <Image src={items.imageUrl} alt={items.title}  height={250} width={250} />
                            <h2 className="lg:text-xl text-base font-semibold text-left flex justify-between">{items.title}{items.price}</h2>
                        </div>
                    </div>
                    
                     ))} 
            </main>
                  
                
     
        </div>
    )
}