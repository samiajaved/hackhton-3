import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts, forNewsLetter, ourProducts } from "@/sanity/lib/queries";
import Image from "next/image"; 

export type product ={
    _id:string;
    title:string; 
    imageUrl:string;  
}




export default async function ForNewsLetter(){
    const products: product[] = await sanityFetch({query:forNewsLetter})

    return(
        <div>
            <div className="bg-[#1E28320D] w-[470px] lg:w-full   mt-7 lg:h-[754px]  h-fit   lg:px-2 px-10 py-8">
              <div className="text-center lg:w-[800px] lg:h-[175px] lg:ml-64 ">
                <h1 className="font-medium lg:text-[50px] text-[30px] leading-[58.59px]">Or subscribe to the newsletter</h1>
                <div className="flex justify-around lg:mt-16 mt-10">
                    <input placeholder="Email adress..." className="shadow-xl lg:w-[500px] w-[200px] h-[32px]" />
                    <button className="shadow-xl w-[70px] lg:w-[90px] lg:px-4 py-1 bg-white rounded-lg text-sm hover:bg-black hover:text-white ">SUBMIT</button>
                </div>
            </div>  
            <div className="lg:w-[1324px] lg:h-[319px] w-[400px] h-fit  mt-8">
                <h1 className="font-medium lg:text-[50px] text-[30px]  text-center leading-[58.59px]" >Follow products and discounts on Instagram</h1>
                <div className="lg:flex mt-10 ml-24 lg:ml-10">
                {products.map((items)=>(
                 <div key={items._id} className=" rounded-md  mt-10">
                   <Image src={items.imageUrl} width={200} height={200} alt="chair" className='mb-4 p-2'/>
                </div>        
               ))}                         
                       
                </div>
            </div>
            </div>
        </div>
    )
}