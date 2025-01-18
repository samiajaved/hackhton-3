import { sanityFetch } from "@/sanity/lib/fetch";
import { ourProducts, topCategory } from "@/sanity/lib/queries";
import Image from "next/image";
export type topCategory ={
    _id:string;
    title:string;
    imageUrl:string;  
}



export default async function TopCategories(){
    const data: topCategory[] = await sanityFetch({query:topCategory})

    return(
        <div>
        <div className="grid col-span-4">
             <div className="lg:w-full">
             <h1 className="text-gray-800 font-bold  text-3xl mt-36  w-full text-center ">Top Categories</h1>

                <div className="lg:flex justify-evenly mt-10"> 
            
            
                {data.map((items)=>(
                
                    <div key={items._id} >
                        <Image src={items.imageUrl} alt={items.title}  height={400} width={400} />
                    </div>
                     ))} 
                   
                </div>
            </div>
        </div>
        </div>
    )
}