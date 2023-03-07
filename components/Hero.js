import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <div className="mt-[3rem] bg-[url(/highpack.jpg)] h-screen bg-cover bg-center bg-fixed-[9rem] flex items-center p-[2rem] from-transparent">
      <div className="flex flex-col gap-6 w-[100vw] md:flex-row  md:items-center md:justify-between">
        <div className="bg-gray-100 md:w-[40%]  shadow-2xl shadow-gray-900  rounded-xl p-[1rem] border-4 border-gray-700">
           <h1 className="text-[1.2rem] md:text-[2rem] font-bold text-teal-700">
           <Typewriter className="h-[4rem]"
                    options={{
                        strings:[
                            "Higpack Packers and Movers"
                            
                        ],
                        changeDelay:1,
                        changeDeleteSpeed:1,
                        autoStart:true,
                        loop:true,
                    }}
            />
           </h1>
           <span className="text-[1rem] md:text-[1.7rem]  font-semibold text-[#DAB600]">Estd 1989</span>
           
           <div className="text-[1.2rem] sm:mt-[2rem] text-teal-900">
              We are Here to shift your Home
           </div>
           
        </div>
        
        {/* <div>
           Mollitia
        </div> */}
       
      </div>
    </div>
  );
};

export default Hero;
