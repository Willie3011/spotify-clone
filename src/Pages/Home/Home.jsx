import Logo from '../../sections/Logo/Logo';
import PlayList from '../../sections/PlayList/PlayList';
import Main from '../../sections/Main/Main';
function Home() {
  return (
    <div className="max-w-[1440] h-screen flex gap-1">
        <div className="flex flex-col gap-2 w-[350px]">
        <Logo />
        <PlayList/>
        </div>
        <div className="w-[calc(100% - 350px)] h-full">
          <Main/>
        </div>
    </div>
  )
}

export default Home