import Navbar from "../../components/Navbar/Navbar"
import Albums from "../Albums/Albums"
import Artists from "../Artists/Artists"

function Main() {
  return (
    <div className="relative text-white h-[98%] w-[991px] bg-spotifyDarkGray rounded-lg overflow-hidden">
      <Navbar />
      <div className="h-auto max-h-screen overflow-y-auto scrollbar-thin">
        <Artists />
        <Albums />
        <Albums />
        <Albums />
      </div>
    </div>
  )
}

export default Main