import kabza from '../../assets/kabza.jpg';
import drake from '../../assets/drake.jpg';
import rihanna from '../../assets/rihanna.jpg';
import chris from '../../assets/chris-brown.jpg';

import ArtistCard from "../../components/ArtistCard/ArtistCard"

function Artists() {
  return (
    <div className="h-[300px] bg-gradient-to-b from-[#1f1f1f] p-5">
        <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Popular artists</h2>
        <a href="#" className="text-xs text-spotifyLightGray font-semibold hover:underline">Show all</a>
        </div>
        <div className="flex gap-2 mt-4">
        <ArtistCard imgUrl={kabza} artistName="Kabza De Small" title="Artist"/>
        <ArtistCard imgUrl={drake} artistName="Drake" title="Artist"/>
        <ArtistCard imgUrl={rihanna} artistName="Rihanna" title="Artist"/>
        <ArtistCard imgUrl={chris} artistName="Chris Brown" title="Artist"/>
        </div>

    </div>
  )
}

export default Artists