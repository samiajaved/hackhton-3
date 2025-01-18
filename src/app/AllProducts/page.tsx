import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts, ourProducts } from "@/sanity/lib/queries";
import Image from "next/image"; 
import ForNewsLetter from "../components/newsletter";

export type product ={
    _id:string;
    title:string;
    price:number;
    badge:string;
    priceWithoutDiscount: number;
    category:string;
    description:string;
    inventory:string;
    tags:string; 
    imageUrl:string;  
}




export default async function AllProducts(){
    const products: product[] = await sanityFetch({query:allProducts})

    return(
        <div>
        <div className="grid col-span-4">
             <div className="lg:w-full">
             <h1 className="text-gray-800 font-bold  text-3xl mt-4 w-full text-center ">All Products</h1>

                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 mt-10"> 
            
            
                {products.map((items)=>(
                
                    <div key={items._id} className=" rounded-md  mt-10">
                        <div className="shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out" >
                            <Image src={items.imageUrl} alt={items.title}  height={250} width={250} />
                            <h2 className="lg:text-xl text-base font-semibold text-left">{items.title}</h2>
                            <p className="text-left text-base">${items.price}</p>
                        </div>
                    </div>
                     ))} 
                   
                </div>
            </div>
        </div>
        <ForNewsLetter />
        </div>
    )
}