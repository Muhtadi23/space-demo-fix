import surface from "../../assets/moon-surface-hd.png"
const Hero = () => {
    return (
        <div className="bg-black/20 h-full text-white relative z-50">
            <div className="h-full flex justify-center items-center p-4 ">
                <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-4 lg:pr-36">
                        <h1 className="uppercase font-bold text-5xl">ORBIT THE EARTH</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea dolorem eius accusamus beatae. Nulla quis beatae quo, possimus tempora similique dignissimos repellat aperiam veniam culpa consequatur repudiandae asperiores saepe.</p>
                        <button className="bg-sky-800 hover:bg-sky-500 py-2 px-4 rounded">Learn More</button>
                    </div>
                    <div></div>
                </div>
            </div>
            <img className="absolute right-0 bottom-0 w-full brightness-50 z-10" src={surface} alt="" />
            <div className="absolute bottom-0 z-30 w-full bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
        </div>
    );
};

export default Hero;