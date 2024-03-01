import elon2 from "../../assets/elon2.jpg"
import elon3 from "../../assets/elon3.jpg"
import elon4 from "../../assets/elon4.jpg"
import elon5 from "../../assets/elon5.jpg"
import elon6 from "../../assets/elon6.jpg"
import elon7 from "../../assets/elon7.jpg"

const Gallary = () => {
    return (
        <div className="w-full relative bg-black">

            <div className="w-fit grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                <img className="w-[full] rounded" src={elon2} alt="" />
                <img className="w-[full] rounded" src={elon3} alt="" />
                <img className="w-[full] rounded" src={elon4} alt="" />

                <img className="w-[full] rounded" src={elon5} alt="" />
                <img className="w-[full] rounded" src={elon6} alt="" />
                <img className="w-[full] rounded" src={elon7} alt="" />

                <img className="w-[full] rounded" src={elon2} alt="" />
                <img className="w-[full] rounded" src={elon3} alt="" />
                <img className="w-[full] rounded" src={elon4} alt="" />
            </div>
        </div>
    );
};

export default Gallary;