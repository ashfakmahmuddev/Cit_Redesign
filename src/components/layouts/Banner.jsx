import React from "react";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";
import Container from "../Container";

// import bannerImg from "../assets/banner.jpg"; // আপনার ব্যানার ইমেজ ইমপোর্ট করুন

const Banner = () => {
  return (
    <section className="bg-[#FFF8F5] relative py-12 lg:py-20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
         
          {/* ========== Left Content ========== */}
          <div className="space-y-6 z-10">
            {/* Subheading */}
            <div className="flex items-center gap-2 text-[#FF1E1E] font-bold text-sm md:text-base">
              <FaCheckCircle />
              <span>Unleash Your Potential</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 leading-tight">
              Become an IT Pro & <br />
              Rule the <span className="text-[#FF1E1E]">Digital World</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
              With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and an updated curriculum. Pick your desired course from more than 45 trendy options.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-[#FF1E1E] text-white px-7 py-3 rounded font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition flex items-center gap-2">
                <BiBookOpen className="text-xl" /> Browse Course
              </button>
              <button className="bg-white border border-[#FF1E1E] text-[#FF1E1E] px-7 py-3 rounded font-bold hover:bg-red-50 transition">
                Join free seminar
              </button>
            </div>

            {/* ISO Certification Badge */}
            <div className="flex items-center gap-3 mt-6">
              <div className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center p-1">
                <span className="text-[10px] font-bold text-blue-700 text-center leading-3">
                  ISO <br/> Certified
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-700 w-48 leading-4">
                One of the best ISO certified IT Training Institutes in Bangladesh
              </p>
            </div>
          </div>

          {/* ========== Right Image Section ========== */}
          <div className="relative z-10 mt-8 lg:mt-0">
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              {/* Placeholder Image - নিজের ইমেজ লিংক দিন */}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Creative IT Banner"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />

              {/* Gradient Overlay & Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
               
                {/* Play Button (Center) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition animate-pulse shadow-lg">
                    <FaPlay className="text-[#FF1E1E] ml-1 text-xl" />
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="text-white relative z-20">
                  <p className="text-sm opacity-90 mb-1">ক্রিয়েটিভ আইটি ইনস্টিটিউট এখন</p>
                  <h3 className="text-xl md:text-2xl font-bold">দক্ষিণ এশিয়ার সেরা আইটি প্রতিষ্ঠান</h3>
                </div>
              </div>

              {/* Award Badge Floating */}
              <div className="absolute bottom-5 right-5 bg-white p-1 rounded shadow-lg transform rotate-[-3deg] hidden sm:block">
                  <div className="bg-yellow-50 border border-yellow-200 px-2 py-4 rounded text-center">
                    <span className="text-xs font-bold text-yellow-700">Best IT Institute <br/> Award 2024</span>
                  </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-[-30px] right-[-30px] w-32 h-32 bg-[#FF1E1E]/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </Container>

      {/* ========== Floating Side Tabs (Optional) ========== */}
      {/* Left Tab: Get Discount */}
      <div className="fixed top-1/2 left-0 z-50 -translate-y-1/2">
         <div className="bg-[#FF1E1E] text-white py-6 px-1.5 rounded-r-lg cursor-pointer hover:pl-3 transition-all shadow-lg writing-vertical-rl text-xs font-bold tracking-widest" style={{writingMode: 'vertical-rl'}}>
            GET DISCOUNT
         </div>
      </div>

      {/* Right Tab: Join Free Seminar */}
      <div className="fixed bottom-10 right-0 z-50">
         <div className="bg-[#FF1E1E] text-white py-6 px-1.5 rounded-l-lg cursor-pointer hover:pr-3 transition-all shadow-lg writing-vertical-rl text-xs font-bold tracking-widest" style={{writingMode: 'vertical-rl'}}>
            Join Free Seminar
         </div>
      </div>

    </section>
  );
};

export default Banner;