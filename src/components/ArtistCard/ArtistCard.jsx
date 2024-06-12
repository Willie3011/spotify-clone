/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

function ArtistCard({ imgUrl, artistName, title }) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="h-full w-[250px] p-2 rounded-md hover:bg-gradient-to-t hover:from-[#1a1a1a] relative">
            <div className="">
                <img src={imgUrl} alt="Artist" className="h-[200px] w-[200px] rounded-full object-cover shadow-lg shadow-spotifyBlack" />
            </div>
            <button className={isHover ? "flex absolute bottom-[64px] right-6 h-[40px] w-[40px] bg-spotifyGreen items-center justify-center rounded-full text-black animate-fade hover:scale-105" : "hidden"}>
                <FaPlay />
            </button>
            <h4 className="mt-2 font-semibold text-base">{artistName}</h4>
            <p className="mt-1 text-spotifyLightGray text-sm font-semibold">{title}</p>
        </div>
    )
}

export default ArtistCard