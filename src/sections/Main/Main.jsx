import Navbar from "../../components/Navbar/Navbar"
import Artists from "../Artists/Artists"

function Main() {
  return (
    <div className="text-white h-[98%] w-[991px] bg-spotifyDarkGray rounded-lg overflow-hidden">
    <Navbar/>
    <Artists/>
    </div>
  )
}

export default Main