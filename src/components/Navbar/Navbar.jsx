import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="h-[60px] w-full bg-transparent p-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
            <button className="h-[25px] w-[25px] flex items-center justify-center rounded-full text-spotifyLightGray bg-spotifyBlack" disabled>
                <FaChevronLeft/>
            </button>
            <button className="h-[25px] w-[25px] flex items-center justify-center rounded-full text-spotifyLightGray bg-spotifyBlack" disabled>
                <FaChevronRight/>
            </button>
        </div>

        <div className="flex items-center gap-6">
            <button className="text-sm  font-bold text-spotifyLightGray hover:text-white hover:scale-105">
                Sign up
            </button>
            <button className="bg-white text-black w-[100px] p-3 rounded-3xl text-sm font-bold hover:bg-spotifyLightGray hover:scale-105">
                Log in
            </button>
        </div>
    </div>
  )
}

export default Navbar