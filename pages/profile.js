const Profile = () => {
  return (
    <div className="mt-[4.5rem] sm:mt-[4.7rem] md:mt-[5rem] p-[2rem]">
      <div className="text-[1.6rem] text-center">
        {" "}
        <span className="text-teal-900 text-[2rem] font-bold">Highpack</span> in
        Patna is one of the leading businesses in the Packers and Movers.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-[2rem]">
        <div className="text-center rounded-lg p-[3rem] bg-gray-100 hover:bg-gray-200">
          <div className="text-[2rem] font-bold text-teal-700">30+</div>
          <img
            src="/experience.png"
            alt=""
            className="mx-auto h-[auto] w-[4rem]"
          />
          <div className="text-[1.5rem] font-semibold">Year of Service</div>
          <div className="text-[1.2rem]">Trusted by big Brands of India</div>
        </div>
        <div className="text-center rounded-lg p-[3rem] bg-gray-100 hover:bg-gray-200">
          {" "}
          <div className="text-[2rem] font-bold text-teal-700">40+</div>
          <img
            src="/expert.png"
            alt=""
            className="mx-auto h-[auto] w-[4rem]"
          />
          <div className="text-[1.5rem] font-semibold">Expert Members</div>
          <div className="text-[1.2rem]">Skilled Member and Staffs</div>
        </div>
        <div className="text-center rounded-lg p-[3rem] bg-gray-100 hover:bg-gray-200">
          {" "}
          <div className="text-[2rem] font-bold text-teal-700">1000+</div>
          <img
            src="/truck.png"
            alt=""
            className="mx-auto h-[auto] w-[4rem]"
          />
          <div className="text-[1.5rem] font-semibold">Transportation Facilities</div>
          <div className="text-[1.2rem]">Across all over India</div>
        </div>
        <div className="text-center rounded-lg p-[3rem] bg-gray-100 hover:bg-gray-200">
          {" "}
          <div className="text-[2rem] font-bold text-teal-700">500+</div>
          <img
            src="/all.png"
            alt=""
            className="mx-auto h-[auto] w-[4rem]"
          />
          <div className="text-[1.5rem] font-semibold">PAN India</div>
          <div className="text-[1.2rem]">Proven work experience in each year</div>
        </div>
        <div className="text-center rounded-lg p-[3rem] bg-gray-100 hover:bg-gray-200">
          {" "}
          <div className="text-[2rem] font-bold text-teal-700">Z+</div>
          <img
            src="/shield.png"
            alt=""
            className="mx-auto h-[auto] w-[4rem]"
          />
          <div className="text-[1.5rem] font-semibold">Safely Transportation</div>
          <div className="text-[1.2rem]">Your property safety is my priority</div>
        </div>
        <div className="text-center rounded-lg p-[3rem] bg-gray-100 hover:bg-gray-200">
          {" "}
          <div className="text-[2rem] font-bold text-teal-700">24+</div>
          <img
            src="/24-hours.png"
            alt=""
            className="mx-auto h-[auto] w-[4rem]"
          />
          <div className="text-[1.5rem] font-semibold">Your Query</div>
          <div className="text-[1.2rem]">Serving 24*7 throughout the year</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
