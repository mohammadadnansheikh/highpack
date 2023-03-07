import { ImCross } from "react-icons/im";

const GetQuoteSlider = ({ setSlider }) => {
  return (
    <div className="fixed text-gray-700  w-[70vw] py-[2rem] sm:w-[35vw] md:w-[30vw] bg-gray-300 border-4 border-teal-500 shadow-2xl shadow-gray-900 right-[1rem] top-[10rem] z-[200]">
      <ImCross
        className="absolute right-[1rem] top-[1rem] cursor-pointer"
        onClick={setSlider}
      />

      <h1 className="text-[1.4rem] font-bold text-center">GET FREE QUOTES</h1>

      <form action="" className="">
        <div className="flex flex-col justify-center items-center mt-[2rem]">
          <div className="mb-3 w-[80%]">
            <label htmlFor="name" className="block text-sm font-bold mb-1">
              Name
            </label>
            <input type="text" id="name" placeholder="Name" className="shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-3 w-[80%]">
            <label htmlFor="mobile" className="block text-sm font-bold mb-1">
              Mobile No.
            </label>
            <input type="text" id="mobile" placeholder=" Ex.. 9089******" className="shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-3 w-[80%]">
            <label htmlFor="from" className="block text-sm font-bold mb-1">
              From Location
            </label>
            <input type="text" id="from" placeholder="From Address" className="shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-3 w-[80%]">
            <label htmlFor="to" className="block text-sm font-bold mb-1">
              To Location
            </label>
            <input type="text" id="to" placeholder="To Address" className=" shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="my-3 w-[80%]">
             <button className="bg-indigo-500 text-white shadow appearance-none hover:bg-indigo-600 rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GetQuoteSlider;
