
// eslint-disable-next-line react/prop-types
function PlaylistCard({title, description, buttonTitle}) {
  return (
    <div className="bg-[#242424] px-2 py-4 rounded-xl">
        <h2 className="font-bold text-md mb-4">{title}</h2>
        <p className="text-sm mb-4">{description}</p>
        <button className="text-xs font-bold p-2 rounded-2xl bg-white text-black hover:scale-105">{buttonTitle}</button>
    </div>
  )
}

export default PlaylistCard