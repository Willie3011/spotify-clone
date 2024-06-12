import { LuLibrary } from "react-icons/lu";
import { FiPlus } from "react-icons/fi"
import { TbWorld } from "react-icons/tb";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";

function PlayList() {
  return (
    <div className=" w-full h-fit bg-spotifyDarkGray text-white rounded-lg">
        <div className="flex items-center justify-between mb-4 p-3 text-spotifyLightGray">
            <div className="flex items-center gap-1 hover:text-white">
                <LuLibrary className="text-3xl "/> <span className=" text-xl font-bold">Your Library</span>
            </div>
            <div className="text-xl">
                <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-700 hover:text-white"><FiPlus /></button>
            </div>
        </div>

        <div className="flex flex-col gap-2 h-fit p-2">
            <div className="flex flex-col gap-8 h-[180px] my-2 overflow-y-scroll scrollbar-thin scrollbar-webkit">
            <PlaylistCard title="Create your first playlist" description="It's easy, we'll help you" buttonTitle="Create playlist"/>
            <PlaylistCard title="Let's find some podcasts to follow" description="We'll keep you updated on new episodes" buttonTitle="Browse podcasts"/>
            </div>
        </div>

        <div className="">
            <div className=" text-spotifyLightGray ">
                <ul className="flex p-5 gap-8 flex-wrap text-xs">
                    <li>
                        <a href="#">Legal</a>
                    </li>
                    <li >
                        <a href="#">Safety & Privacy Center</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Cookies</a>
                    </li>
                    <li>
                        <a href="#">About Ads</a>
                    </li>
                    <li>
                        <a href="#">Accessibility</a>
                    </li>
                </ul>
                <a className="p-5 text-sm" href="#">Cookies</a>
                <div className="p-5">
                    <button className="flex items-center gap-2 border px-2 py-1 hover:scale-105 hover:font-bold rounded-3xl"><TbWorld className="text-xl"/> English</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayList