/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

function Card({ imgUrl, title, description }) {
    const [isHover, setIsHover] = useState(false);
    return (
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="h-full w-[250px] flex flex-col p-2 rounded-md hover:bg-[#1a1a1a] cursor-pointer">
            <div className="relative">
                <img src={imgUrl} className="h-[220px] w-[220px] rounded-md object-cover shadow-xl" />
                <button className={isHover ? "flex absolute bottom-2 right-2 h-[40px] w-[40px] bg-spotifyGreen items-center justify-center rounded-full text-black animate-fade hover:scale-105" : "hidden"}>
                    <FaPlay />
                </button>
            </div>
            <div className="flex flex-col text-left mt-2">
            <h4 className="text-left font-bold text-sm">{title}</h4>
            <p className="text-sm text-spotifyLightGray font-semibold">{description}</p>
            </div>
        </div>
    )
}

export default Card