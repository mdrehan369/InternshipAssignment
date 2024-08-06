"use client"

import { ChevronDown } from "lucide";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

    const [flag, setFlag] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleUpvote = (e: any) => {
        const btn = document.getElementById('action')
        btn!.classList.replace('bg-gradient-to-tr', 'bg-transparent')
        btn!.classList.replace('text-white', 'text-[#21293c]')
        btn!.firstElementChild!.innerHTML = 'Upvoted'
        document.getElementById('votes')!.innerText = '136'
    }

    return (
        <main className="bg-white w-full h-[100vh]">
            <div className="md:w-[55%] w-full h-[100vh] mx-auto flex items-center flex-col justify-start gap-2 md:p-10 p-3">
                <Image src='/logo.avif' width={30} height={30} alt="" className="md:mb-2 self-start w-20" />
                <div className="w-full self-start relative flex items-center justify-start gap-1">
                    <h1 className="font-bold text-2xl text-[#21293c]">VideoDubber - Fast Video Translator</h1>
                    <Image src={'/chevron-down.svg'} width={24} height={24} alt="" className="text-[#cdc9c8] cursor-pointer" onClick={() => setFlag(prev => !prev)} />
                    {
                        flag &&
                        <div className=" absolute top-8 left-[50%] translate-x-[-50%] bg-white z-20 border-[1px] shadow-md border-gray-200 rounded p-3">
                            <button className="border-[1px] border-gray-200 text-sm font-bold px-20 py-2 text-[#21293c] transition-colors duration-500 hover:border-[#ff6154]">Flag</button>
                        </div>
                    }
                </div>
                <div className=" w-full flex items-center md:flex-row flex-col md:gap-0 gap-4 justify-between">
                    <div className="font-medium text-xl text-[#45577e]">
                        Translate videos in your own voice,<br /> globalize in a click!
                    </div>
                    <div className=" flex items-center justify-center gap-4">
                        <button className="w-fit px-6 py-6 flex items-center justify-center gap-1 hover:border-[#ff6154] transition-colors duration-500 rounded border-[1px] border-gray-300 text-sm text-[#21293c] font-bold relative" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                            <span>Visit</span>
                            <Image src={'/chevron-down.svg'} width={24} height={24} alt="" className="text-[#cdc9c8] cursor-pointer" />
                            {
                                dropdown &&
                                <div className=" font-normal absolute md:w-[15vw] w-[60vw] top-20 md:left-auto left-6 shadow-md border-[1px] border-gray-200 flex flex-col items-center z-20 bg-white justify-start">
                                    <div className="text-[#21293c] w-full px-3 py-5 hover:bg-gray-200 transition-colors duration-300"><span className="font-bold">Website</span> videodubber.ai</div>
                                    <div className="text-[#21293c] w-full px-3 py-5 hover:bg-gray-200 transition-colors duration-300"><span className="font-bold">Learn More</span> videodubber.ai</div>
                                    <div className="text-[#21293c] w-full px-3 py-5 hover:bg-gray-200 transition-colors duration-300"><span className="font-bold">Learn More</span> videodubber.ai</div>
                                    <div className="text-[#21293c] w-full px-3 py-5 hover:bg-gray-200 transition-colors duration-300"><span className="font-bold">Learn More</span> videodubber.ai</div>
                                    <div className="text-[#21293c] w-full px-3 py-5 hover:bg-gray-200 transition-colors duration-300"><span className="font-bold">Learn More</span> videodubber.ai</div>
                                </div>
                            }
                        </button>
                        <button id="action" className="w-fit px-14 py-6 rounded border-[1px] border-[#ff6154] text-sm uppercase bg-gradient-to-tr from-[#ff6154] to-[#ff6154] text-white font-bold transition-all hover:to-pink-600 duration-500" onClick={handleUpvote}>
                            <span>Upvote</span> <span className="" id="votes">135</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
