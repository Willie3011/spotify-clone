import Logo from '../../sections/Logo/Logo';
import PlayList from '../../sections/PlayList/PlayList';
function Home() {
  return (
    <div className="max-w-[1440] h-screen flex gap-1">
        <div className="flex flex-col gap-2 w-[280px]">
        <Logo />
        <PlayList/>
        </div>
    </div>
  )
}

export default Home