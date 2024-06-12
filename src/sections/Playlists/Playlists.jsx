import Card from '../../components/Card/Card';
import playlist1 from '../../assets/playlist 1.jpg'
import playlist2 from '../../assets/playlist 2.jpg'
import playlist3 from '../../assets/playlist 3.jpg'
import playlist4 from '../../assets/playlist 4.jpg'

function Playlists() {
  return (
    <div className='p-5'>
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Spotify Playlists</h2>
            <a className="text-xs text-spotifyLightGray font-semibold hover:underline" href="#">Show all</a>
        </div>
        <div className="flex items-center gap-4 mt-5">
            <Card imgUrl={playlist1} title="lofi beats" description="Chill beats, lofi vibes, new tracks every week..."/>
            <Card imgUrl={playlist2} title="Today's Top Hits" description="Sabrina Carpenter is on top of the Hottest 50!"/>
            <Card imgUrl={playlist3} title="All Out 2020s" description="The biggest songs of the 2020s"/>
            <Card imgUrl={playlist4} title="Chillout Lounge" description="Just leanback and enjoy relaxed beats."/>
        </div>
    </div>
  )
}

export default Playlists