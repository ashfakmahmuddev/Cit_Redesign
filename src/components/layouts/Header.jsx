
import React from "react";
import Container from "../Container";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";
import logo from "../../assets/logo.png"


const Header = () => {
  return (
    <header className="font-sans">
      {/* ================= Header Top Start ================= */}
      <div className="bg-gradient-to-r from-[#FF1E1E] via-[#FF1E1E] via-59% to-[#FF8079] py-2 text-white text-sm">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Side: Contact Info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-sm" />
                <span>01777308777</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-sm" />
                <span>info@creativeitinstitute.com</span>
              </div>
            </div>

            {/* Right Side: Language Switcher */}
            <div className="mt-2 md:mt-0 cursor-pointer">
              <div className="bg-white/20 px-1 py-1 rounded-full flex items-center gap-1">
                <button className="bg-white text-[#FF1E1E] px-2 py-[2px] rounded-full text-xs font-bold">
                  BN
                </button>
                <button className="text-white px-2 text-xs font-bold">
                  EN
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* ================= Header Top End ================= */}

      {/* ================= Navbar Start ================= */}
      <div className="bg-[#FFF8F5] shadow-sm sticky top-0 z-50">
        <Container>
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              {/* ইমেজের জায়গায় আপনার লোগো বসান */}
              <img src={logo} alt="Creative IT" className="h-10" />

              {/* লোগো না থাকলে টেক্সট লোগো (Demo) */}
              {/* <div className="flex items-center">
                <div className="text-3xl font-bold text-[#FF1E1E] mr-2">
                  CIT
                </div>
                <div className="hidden sm:block border-l-2 border-gray-400 pl-2 text-[10px] font-bold text-gray-600 leading-3">
                  South Asia's <br /> Best IT <br /> Institute
                </div>
              </div> */}
            </div>

            {/* Menu Items (Desktop) */}
            <div className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
              <a href="/" className="hover:text-[#FF1E1E] transition">
                Home
              </a>
              <a href="/about" className="hover:text-[#FF1E1E] transition">
                About us
              </a>
              <a
                href="/success-story"
                className="hover:text-[#FF1E1E] transition"
              >
                Success story
              </a>
              <a href="/diploma" className="hover:text-[#FF1E1E] transition">
                Diploma
              </a>
              <a href="/contact" className="hover:text-[#FF1E1E] transition">
                Contact
              </a>
            </div>

            {/* Browse Course Button */}
            <button className="hidden md:flex bg-[#FF1E1E] hover:bg-red-700 text-white px-5 py-2.5 rounded font-semibold transition items-center gap-2 shadow-lg shadow-red-200">
              <BiBookOpen className="text-lg" />
              Browse Course
            </button>

            {/* Mobile Menu Icon (Optional) */}
            <div className="lg:hidden text-2xl text-[#FF1E1E] cursor-pointer">
              ☰
            </div>
          </div>
        </Container>
      </div>
      {/* ================= Navbar End ================= */}
    </header>
  );
};

export default Header;

