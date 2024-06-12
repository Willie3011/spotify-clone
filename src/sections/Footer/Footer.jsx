import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className="flex flex-col h-auto p-6 mb-[120px]">
            <div className="flex justify-between">
            <div className="">
                <h4 className="text-base font-bold">Company</h4>
                <ul>
                    <li><a href="" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">About</a></li>
                    <li><a href="" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">Jobs</a></li>
                    <li><a href="" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">For the Record</a></li>
                </ul>
            </div>
            <div className="">
                <h4 className="text-base font-bold">Communities</h4>
                <ul>
                    <li><a href="#" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">For Artists</a></li>
                    <li><a href="#" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">Developers</a></li>
                    <li><a href="#" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">Advertising</a></li>
                    <li><a href="#" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">Investors</a></li>
                    <li><a href="#" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">Vendors</a></li>
                </ul>
            </div>
            <div className="">
                <h4 className="text-base font-bold">Useful links</h4>
                <ul>
                    <li><a href="#" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">Support</a></li>
                    <li><a href="#" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">Free Mobile App</a></li>
                </ul>
            </div>
            <div className="">
                <h4 className="text-base font-bold">Spotify Plans</h4>
                <ul>
                    <li><a href="#" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">Premium Individual</a></li>
                    <li><a href="#" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">Premium Duo</a></li>
                    <li><a href="#" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">Premium Family</a></li>
                    <li><a href="#" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">Predium Student</a></li>
                    <li><a href="#" className="text-sm text-spotifyLightGray font-semibold hover:underline hover:text-white transition-all duration-300 ease-in">Spotify Free</a></li>
                </ul>
            </div>
            <div className="">
                <ul className="flex gap-2">
                    <li className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#292929] hover:bg-[#727272] transition-all duration-300">
                        <FaInstagram/>
                    </li>
                    <li className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#292929] hover:bg-[#727272] transition-all duration-300">
                        <FaTwitter/>
                    </li>
                    <li className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#292929] hover:bg-[#727272] transition-all duration-300">
                        <FaFacebook/>
                    </li>
                </ul>
            </div>

            </div>
            <div className="h-[1px] w-full bg-gray-500 opacity-40 my-8"></div>
            <div className="text-sm text-spotifyLightGray">
                <p>&copy; Spotify AB (Cloned by Willem April)</p>
            </div>
        </div>
    )
}

export default Footer