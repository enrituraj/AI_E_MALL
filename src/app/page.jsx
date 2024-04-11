import Link from "next/link";
import Category from "./category/page";
import Product_card from "../components/Product_Card/product_card"
// `app/page.js` is the UI for the `/` URL
export default function Page() {
  return (
    <>
    <div className="container">

      <div className="mt-16 p-5 bg-slate-400">
        <h1>hi</h1>
      </div>
    </div>


      <section className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">
            Category
          </h1>
          <Link href="/category">View All</Link>
        </div>
        <div className="p-0">
          <Category/>
        </div>
      </section>



      <section className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">
            New Arrivals
          </h1>
          <Link href="/category">View All</Link>
        </div>
        <div className="p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="bg-red-200 p-20 col-span-2	">
              <h1>1</h1>
            </div>
            <div className="grid grid-rows-1 gap-4 md:grid-rows-2" >

            <div className="bg-red-200 p-20">
              <h1>2</h1>
            </div>
            <div className="bg-red-200 p-20">
              <h1>2</h1>
            </div>
            </div>
            <div className="grid grid-rows-1 gap-4 md:grid-rows-2">

            <div className="bg-red-200 p-20">
              <h1>2</h1>
            </div>
            <div className="bg-red-200 p-20">
              <h1>2</h1>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">
            Products
          </h1>
          <Link href="/category">View All</Link>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 gap-8 my-5 md:grid-cols-4 sm:grid-cols-2">


          <Product_card 
            product_name="Airpod Max pro"
            product_price="250"
            sm_desc="A perfect balance of high quality audio"
            rating="125"
            btn_value="Add To Cart"
          />

          <Product_card 
            product_name="Airpod Max pro"
            product_price="250"
            sm_desc="A perfect balance of high quality audio"
            rating="125"
            btn_value="Add To Cart"
          />
          <Product_card 
            product_name="Airpod Max pro"
            product_price="250"
            sm_desc="A perfect balance of high quality audio"
            rating="125"
            btn_value="Add To Cart"
          />
          <Product_card 
            product_name="Airpod Max pro"
            product_price="250"
            sm_desc="A perfect balance of high quality audio"
            rating="125"
            btn_value="Add To Cart"
          />
          
          <Product_card 
            product_name="Airpod Max pro"
            product_price="250"
            sm_desc="A perfect balance of high quality audio"
            rating="125"
            btn_value="Add To Cart"
          />

          <Product_card 
            product_name="Airpod Max pro"
            product_price="250"
            sm_desc="A perfect balance of high quality audio"
            rating="125"
            btn_value="Add To Cart"
          />
          <Product_card 
            product_name="Airpod Max pro"
            product_price="250"
            sm_desc="A perfect balance of high quality audio"
            rating="125"
            btn_value="Add To Cart"
          />
          <Product_card 
            product_name="Airpod Max pro"
            product_price="250"
            sm_desc="A perfect balance of high quality audio"
            rating="125"
            btn_value="Add To Cart"
          />
          
          </div>
        </div>
      </section>

      <section className="mt-20 bg-slate-400 p-10 ">

        <div className="p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="bg-red-200 p-20">
              <h1>1</h1>
            </div>
            <div className="bg-red-200 p-20">
              <h1>2</h1>
            </div>
            <div className="bg-red-200 p-20">
              <h1>3</h1>
            </div>
            <div className="bg-red-200 p-20">
              <h1>4</h1>
            </div>
            
          </div>
        </div>
      </section>

      <footer className="bg-slate-700 p-10">
        <div className="container">

        <h1>fdgdfgd</h1>
        </div>
      </footer>
    </>
  )
}