import { GoHomeFill, GoSearch } from "react-icons/go";
import { FaSpotify } from "react-icons/fa6";

function Logo() {
  return (
    <div className="text-white p-5 bg-spotifyDarkGray rounded-lg h-fit">
        <div className="flex items-center gap-1">
            <FaSpotify className="text-xl"/> <span className="font-semibold text-lg">Spotify</span>
        </div>
        <div className="my-5 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3 font-bold">
                <GoHomeFill className="text-2xl"/> <span>Home</span>
            </a>
            <a href="#" className="flex items-center gap-3 font-bold text-spotifyLightGray hover:text-white">
                <GoSearch className="text-2xl"/> <span>Search</span>
            </a>
        </div>
    </div>
  )
}

export default Logo