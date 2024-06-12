import Navbar from "../../components/Navbar/Navbar"
import Albums from "../Albums/Albums"
import Artists from "../Artists/Artists"
import Footer from "../Footer/Footer"
import Playlists from "../Playlists/Playlists"

function Main() {
  return (
    <div className="relative text-white h-[98%] w-[991px] mb-5 bg-spotifyDarkGray rounded-lg overflow-hidden">
      <Navbar />
      <div className="h-auto max-h-screen overflow-y-auto scrollbar-thin">
        <Artists />
        <Albums />
        <Playlists/>
        <Footer/>
      </div>
    </div>
  )
}

export default Main