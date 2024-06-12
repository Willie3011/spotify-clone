import Card from "../../components/Card/Card"
import album1 from '../../assets/album 1.jpg';
import album2 from '../../assets/album 2.jpg';
import album3 from '../../assets/album 3.jpg';
import album4 from '../../assets/album 4.jpg';

function Albums() {
  return (
    <div className="mt-[48px] p-5">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Popular albums</h2>
            <a href="#" className="text-xs text-spotifyLightGray font-semibold hover:underline">Show all</a>
        </div>
        <div className="flex items-center gap-4 mt-5">
            <Card imgUrl={album1} title="HIT ME HARD AND SOFT" description="Billie Eilish"/>
            <Card imgUrl={album2} title="One of Wun" description="Gunna"/>
            <Card imgUrl={album3} title="Isimo" description="Kabza De Small, Mthunzi"/>
            <Card imgUrl={album4} title="Kurhula" description="Kelvin Momo"/>
        </div>
    </div>
  )
}

export default Albums