import Link from "next/link";

import { LuSofa } from "react-icons/lu";
import { LiaTshirtSolid } from "react-icons/lia";
import { PiPants } from "react-icons/pi";
import { PiDress } from "react-icons/pi";
import { TbShoe } from "react-icons/tb";
import { GiShoppingCart } from "react-icons/gi";

export default function Category() {
    return (
        <>
        <div className="container">

          <div className="grid grid-cols-2 gap-8 my-5 md:grid-cols-6 sm:grid-cols-3">
            
            <Link href="#">
                <div className="bg-gray-300 p-5 h-[225px] rounded-lg relative flex items-center justify-center">
                   <LuSofa className="text-6xl text-slate-800"/>
                    <p className="absolute w-full text-slate-800 left-0 bottom-4 text-center font-semibold text-xl">
                     Furniture
                    </p>
                </div>
            </Link>
            <Link href="#">
                <div className="bg-gray-300 p-5 h-[225px] rounded-lg relative flex items-center justify-center">
                   <LiaTshirtSolid className="text-6xl text-slate-800"/>
                    <p className="absolute w-full text-slate-800 left-0 bottom-4 text-center font-semibold text-xl">
                     Shirt
                    </p>
                </div>
            </Link>
            <Link href="#">
                <div className="bg-gray-300 p-5 h-[225px] rounded-lg relative flex items-center justify-center">
                   <PiPants className="text-6xl text-slate-800"/>
                    <p className="absolute w-full text-slate-800 left-0 bottom-4 text-center font-semibold text-xl">
                     Pants
                    </p>
                </div>
            </Link>
            <Link href="#">
                <div className="bg-gray-300 p-5 h-[225px] rounded-lg relative flex items-center justify-center">
                   <PiDress className="text-6xl text-slate-800"/>
                    <p className="absolute w-full text-slate-800 left-0 bottom-4 text-center font-semibold text-xl">
                     Dress
                    </p>
                </div>
            </Link>
            <Link href="#">
                <div className="bg-gray-300 p-5 h-[225px] rounded-lg relative flex items-center justify-center">
                   <TbShoe className="text-6xl text-slate-800"/>
                    <p className="absolute w-full text-slate-800 left-0 bottom-4 text-center font-semibold text-xl">
                     Shoes
                    </p>
                </div>
            </Link>
            <Link href="#">
                <div className="bg-gray-300 p-5 h-[225px] rounded-lg relative flex items-center justify-center">
                   <GiShoppingCart className="text-6xl text-slate-800"/>
                    <p className="absolute w-full text-slate-800 left-0 bottom-4 text-center font-semibold text-xl">
                     Accessosires
                    </p>
                </div>
            </Link>
         
            
          
          </div>
        </div>
        
        
        </>
      )
}