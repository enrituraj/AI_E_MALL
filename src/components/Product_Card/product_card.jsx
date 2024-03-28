import Image from "next/image";
import Link from "next/link";
import product_img from "../../assests/img/ai.png"

const Product_card = ({product_name,product_price,sm_desc,rating,btn_value}) => {
  return (
    <>
      
      <div className="my-4">
            <div className="relative rounded-lg w-full h-[250px] bg-gray-100 border border-solid border-slate-200 ">
              <Image src={product_img} className="w-full h-full object-contain "></Image>
              <div className="absolute bg-slate-50 top-2 right-2 p-3 rounded-full border-2 border-solid border-slate-200 ">
                <span>❤</span>
              </div>
            </div>
            <div className="flex items-center text-lg font-semibold justify-between mt-2 mb-1">
              <p>{product_name}</p>
              <p> 
                <sup>$</sup>
                <span>{product_price}</span>
                <sup>.00</sup>
              </p>
            </div>
            <p className="text-sm font-semibold text-slate-500 mb-1"> {sm_desc}</p>
            <div className="flex font-semibold mb-4">
              <div>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <p>({rating})</p>
            </div>
            <Link href="#" className="rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700">{btn_value}</Link>
          </div>
    </>
  )
}

export default Product_card
