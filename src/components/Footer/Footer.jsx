import logo from "../../assets/logo.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-black text-white relative z-50">
            <div className="grid md:grid-cols-2 items-center max-w-[1200px] mx-auto py-8 px-4">
                <div data-aos="fade-right" className="flex flex-col items-center justify-center">
                    <img className="w-10" src={logo} alt="" />
                    <h1 className="text-xl sm:text-3xl font-bold mt-3">Space Y</h1>
                </div>
                <div data-aos="fade-left" data-aos-delay="300" className="flex justify-center gap-4">
                    <h1 className="text-4xl"><FaInstagramSquare /></h1>
                    <h1 className="text-4xl"><FaSquareXTwitter /></h1>
                    <h1 className="text-4xl"><FaFacebookSquare /></h1>
                </div>

            </div>
            <div className="p-4 text-center text-wrap"> <p>Copyright © 2024 - All right reserved by Miran Muhtadi</p></div>
        </div>
    );
};

export default Footer;