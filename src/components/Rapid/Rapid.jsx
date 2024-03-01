import setelite1 from "../../assets/satelite1.jpg"

const Rapid = () => {
    return (
        <div className="bg-black text-white pb-12 relative z-50">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div>
                        <img data-aos="zoom-in" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover aos-init aos-animate" src={setelite1} alt="" />
                    </div>
                    <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-r-sky-800 border-b-2 border-b-sky-800">
                        <p data-aos="fade-up"
                            className="text-sky-800 uppercase">Our Mission</p>
                        <h1 data-aos="fade-up" className="uppercase text-5xl">Rapidcast</h1>
                        <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt.
                        </p>
                        <button data-aos="fade-up" data-aos-delay="300" className="primary-button">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rapid;