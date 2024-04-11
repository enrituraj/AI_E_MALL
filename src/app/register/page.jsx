'use client';
import React from 'react'

const page = () => {
  return (
    <>
       <div className="w-full min-h-screen bg-zinc-100 font-['gilroy']">
        <div className="nav flex justify-between items-center px-5 py-5 relative">
            <i className="text-lg ri-menu-2-line"></i>
            <i className="carticon text-lg ri-shopping-bag-2-fill"></i>
            <div className="cartexpnd w-52 bg-zinc-100 rounded-lg absolute top-[80%] right-5 flex flex-col gap-2">

            </div>
        </div>
        <div className="input flex justify-between px-5 gap-2">
            <input className="font-semibold capitalize px-4 py-3 rounded-lg w-full bg-zinc-200 outline-none" type="text"
                placeholder="search"/>
            <button className="px-4 py-3 text-white rounded-xl shader"><i className="ri-equalizer-fill"></i></button>
        </div>
        <div className="categories py-8 flex items-center gap-5 pl-5 whitespace-nowrap overflow-auto">
            <div className="icon rounded-full px-6 shadow-xl shadow-black/40 py-5 shader text-yellow-400">
                <i className="text-lg ri-home-2-line"></i>
            </div>
            <div className="icon rounded-full shadow-md shadow-slate/10 px-5 py-4">
                <i className="text-lg ri-scroll-to-bottom-line"></i>
            </div>
            <div className="icon rounded-full shadow-md shadow-slate/10 px-5 py-4">
                <i className="text-lg ri-store-2-line"></i>
            </div>
            <div className="icon rounded-full shadow-md shadow-slate/10 px-5 py-4">
                <i className="text-lg ri-bookmark-line"></i>
            </div>
            <div className="icon rounded-full shadow-md shadow-slate/10 px-5 py-4">
                <i className="text-lg ri-global-line"></i>
            </div>
            <div className="icon rounded-full shadow-md shadow-slate/10 px-5 py-4">
                <i className="text-lg ri-service-line"></i>
            </div>
            <div className="icon rounded-full shadow-md shadow-slate/10 px-5 py-4">
                <i className="text-lg ri-home-2-fill"></i>
            </div>
        </div>
        <div className="products whitespace-nowrap flex overflow-auto px-5 gap-5">
            <div className="product w-fit rounded-xl p-2 bg-white">
                <div className="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"></div>
                <div className="data w-full px-2 py-5">
                    <h1 className="font-semibold text-xl leading-none tracking-tight">EJ 100 Ox Chair.</h1>
                    <div className="flex justify-between w-full items-center mt-2">
                        <div className="w-1/2">
                            <h3 className="font-semibold opacity-20">Hangup data.</h3>
                            <h4 className="font-semibold mt-2">$3,456</h4>
                        </div>
                        <button className="w-10 h-10 rounded-full shader text-yellow-400"><i
                                className="ri-add-line"></i></button>
                    </div>
                </div>
            </div>
            <div className="product w-fit rounded-xl p-2 bg-white">
                <div className="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"></div>
                <div className="data w-full px-2 py-5">
                    <h1 className="font-semibold text-xl leading-none tracking-tight">EJ 100 Ox Chair.</h1>
                    <div className="flex justify-between w-full items-center mt-2">
                        <div className="w-1/2">
                            <h3 className="font-semibold opacity-20">Hangup data.</h3>
                            <h4 className="font-semibold mt-2">$3,456</h4>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i
                                className="ri-add-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="populardiv mt-5">
            <h3 className="text-2xl pl-5 font-semibold">Popular</h3>
            <div className="populars mt-5 flex whitespace-nowrap gap-5 overflow-auto w-full pl-5">
                <div className="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div className="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1571575173700-afb9492e6a50?q=80&w=3412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""/>
                    </div>
                    <div className="data py-2 w-full">
                        <h1 className="leading-none font-semibold">Eyes Lounge</h1>
                        <h4 className="leading-none mt-2 text-sm font-semibold opacity-20">Bisco Do Lobo</h4>
                        <h4 className="mt-3 font-semibold text-zinc-500">$12,000</h4>
                    </div>
                </div>
                <div className="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div className="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1571575173700-afb9492e6a50?q=80&w=3412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""/>
                    </div>
                    <div className="data py-2 w-full">
                        <h1 className="leading-none font-semibold">Eyes Lounge</h1>
                        <h4 className="leading-none mt-2 text-sm font-semibold opacity-20">Bisco Do Lobo</h4>
                        <h4 className="mt-3 font-semibold text-zinc-500">$12,000</h4>
                    </div>
                </div>
                <div className="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div className="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1571575173700-afb9492e6a50?q=80&w=3412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""/>
                    </div>
                    <div className="data py-2 w-full">
                        <h1 className="leading-none font-semibold">Eyes Lounge</h1>
                        <h4 className="leading-none mt-2 text-sm font-semibold opacity-20">Bisco Do Lobo</h4>
                        <h4 className="mt-3 font-semibold text-zinc-500">$12,000</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer flex items-center justify-between px-10 fixed bottom-0 left-0 w-full py-5 bg-white">
            <div className="flex gap-10">
                <i className="text-xl text-[#69628a] ri-home-2-fill"></i>
                <i className="text-xl opacity-20 ri-heart-fill"></i>
            </div>
            <i
                className="text-xl absolute shader top-0 left-1/2 -translate-y-1/3 -translate-x-1/2 flex items-center justify-center rounded-full shadow-xl shadow-black/30 w-[4rem] h-[4rem] ri-shopping-bag-fill text-yellow-400"></i>
            <div className="flex gap-10">
                <i className="text-xl opacity-20 ri-settings-fill"></i>
                <i className="text-xl opacity-20 ri-user-fill"></i>
            </div>
        </div>
    </div>
    </>
  )
}

export default page
