import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    // Exact match or sub-path match for news
    if (path === "/news" && location.pathname.startsWith("/news")) {
         return "text-primary border-b-2 border-primary pb-1 font-bold";
    }
    return location.pathname === path
      ? "text-primary border-b-2 border-primary pb-1 font-bold"
      : "text-secondary hover:text-primary transition-colors";
  };

  const immigrationPrograms = [
    {
      title: "Định cư Châu Âu",
      items: [
        "Pháp",
        "Ý",
        "Slovenia",
        "Séc",
        "Bồ Đào Nha",
        "Malta",
        "Romania",
      ],
    },
    {
      title: "Định cư Châu Mỹ",
      items: ["Mỹ", "Canada", "Các quốc gia vùng Caribe"],
    },
    {
      title: "Định cư Châu Á",
      items: ["Nhật"],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      {/* Top Bar - Gold Background for Luxury feel */}
      <div className="bg-primary text-white text-xs hidden md:block">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center font-sans">
          <p className="tracking-wide font-medium">
            Tư vấn định cư các nước châu Âu - Mỹ - Á
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 hover:text-secondary transition cursor-pointer">
              <span className="material-symbols-outlined text-sm">email</span>
              <span>beaconimmigration@beacongroup.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>T2 - T6: 9:00 - 18:00</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-secondary transition cursor-pointer">
              <span className="material-symbols-outlined text-sm">call</span>
              <span>(+84) 931 856 799</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            {/* TYPOGRAPHY LOGO - Replaces broken image */}
            <div className="flex flex-col justify-center">
                <h1 className="font-display font-black text-3xl tracking-widest text-primary leading-none group-hover:opacity-90 transition-opacity">
                    BEACON
                </h1>
                <span className="font-sans text-[0.65rem] font-bold tracking-[0.38em] text-secondary mt-1 text-center uppercase">
                    Immigration
                </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-secondary font-display uppercase tracking-wider">
            <Link to="/" className={isActive("/")}>
              Trang Chủ
            </Link>
            <Link to="/about" className={isActive("/about")}>
              Giới Thiệu
            </Link>

            {/* Nested Dropdown Menu */}
            <div className="relative group py-4 z-50">
              <div className="flex items-center cursor-pointer text-secondary hover:text-primary transition-colors">
                <span>Chương Trình Định Cư</span>
                <span className="material-symbols-outlined text-base ml-1">
                  expand_more
                </span>
              </div>

              {/* Level 2 Menu */}
              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white shadow-xl border border-gray-100 py-2 rounded-sm">
                  {immigrationPrograms.map((program, idx) => (
                    <div key={idx} className="relative group/sub">
                      <div className="px-5 py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer text-gray-700 hover:text-primary transition-colors border-b border-gray-50 last:border-0">
                        <span className="font-medium text-sm">
                          {program.title}
                        </span>
                        <span className="material-symbols-outlined text-sm">
                          chevron_right
                        </span>
                      </div>

                      {/* Level 3 Menu */}
                      <div className="absolute left-full top-0 ml-1 w-56 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0">
                        <div className="bg-white shadow-xl border border-gray-100 py-2 rounded-sm">
                          {program.items.map((country, cIdx) => (
                            <Link
                              key={cIdx}
                              to="#"
                              className="block px-5 py-2 hover:bg-gray-50 hover:text-primary text-gray-600 text-sm transition-colors capitalize normal-case"
                            >
                              {country}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/news" className={isActive("/news")}>
              Tin Tức
            </Link>
            <Link to="/contact" className={isActive("/contact")}>
              Liên Hệ
            </Link>
            <button className="text-secondary hover:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4 text-sm font-medium text-secondary font-display border-t border-gray-100 pt-4 bg-white">
            <Link
              to="/"
              className="hover:text-primary px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang Chủ
            </Link>
            <Link
              to="/about"
              className="hover:text-primary px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Giới Thiệu
            </Link>
            
            {/* Mobile Expanded Menu for Programs */}
            <div className="space-y-2 px-4">
              <div className="font-bold text-primary border-b border-gray-100 pb-1">
                Chương Trình Định Cư
              </div>
              {immigrationPrograms.map((prog, i) => (
                <div key={i} className="pl-4">
                  <div className="font-semibold text-xs text-gray-500 mb-1 uppercase tracking-wide">
                    {prog.title}
                  </div>
                  <div className="pl-2 border-l-2 border-gray-100 flex flex-col space-y-2 py-1">
                    {prog.items.map((item, j) => (
                      <Link
                        key={j}
                        to="#"
                        className="text-xs text-gray-600 hover:text-primary block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/news"
              className="hover:text-primary px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tin Tức
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-primary px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên Hệ
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;