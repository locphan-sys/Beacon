
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

interface Language {
  code: "vi" | "en" | "cn";
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "vi", name: "Tiếng Việt", flag: "https://flagcdn.com/w40/vn.png" },
  { code: "en", name: "English", flag: "https://flagcdn.com/w40/us.png" },
  { code: "cn", name: "中文", flag: "https://flagcdn.com/w40/cn.png" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const currentLang = languages.find(l => l.code === language) || languages[0];

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === "/news" && location.pathname.startsWith("/news")) {
         return "text-primary border-b-2 border-primary pb-1 font-bold";
    }
    return location.pathname === path
      ? "text-primary border-b-2 border-primary pb-1 font-bold"
      : "text-secondary hover:text-primary transition-colors";
  };

  const immigrationPrograms = {
    vi: [
      {
        title: "Định cư Châu Âu",
        items: ["Pháp", "Ý", "Slovenia", "Séc", "Bồ Đào Nha", "Malta", "Romania"],
      },
      {
        title: "Định cư Châu Mỹ",
        items: ["Mỹ", "Canada", "Các quốc gia vùng Caribe"],
      },
      {
        title: "Định cư Châu Á",
        items: ["Nhật"],
      },
    ],
    en: [
      {
        title: "Europe",
        items: ["France", "Italy", "Slovenia", "Czech Republic", "Portugal", "Malta", "Romania"],
      },
      {
        title: "Americas",
        items: ["USA", "Canada", "Caribbean"],
      },
      {
        title: "Asia",
        items: ["Japan"],
      },
    ],
    cn: [
      {
        title: "欧洲移民",
        items: ["法国", "意大利", "斯洛文尼亚", "捷克", "葡萄牙", "马耳他", "罗马尼亚"],
      },
      {
        title: "美洲移民",
        items: ["美国", "加拿大", "加勒比地区"],
      },
      {
        title: "亚洲移民",
        items: ["日本"],
      },
    ]
  };

  const currentPrograms = immigrationPrograms[language];

  // Helper to get link for specific program items
  const getProgramLink = (item: string) => {
    if (item === "Mỹ" || item === "USA" || item === "美国") {
      return "/programs/us";
    }
    return "#";
  };

  const LanguageSwitcher = ({ isMobile = false }) => (
    <div className={`relative ${isMobile ? 'px-4 py-2 border-t border-gray-100 mt-4' : ''}`} ref={langRef}>
      <button
        onClick={() => setIsLangOpen(!isLangOpen)}
        className={`flex items-center space-x-2 transition-all duration-300 ${
          isMobile 
            ? 'w-full justify-between py-2 text-secondary font-bold text-sm' 
            : 'hover:text-secondary'
        }`}
      >
        <div className="flex items-center space-x-2">
          <img src={currentLang.flag} alt={currentLang.name} className="w-5 h-3.5 object-cover rounded-sm shadow-sm" />
          <span className={isMobile ? "uppercase tracking-widest" : ""}>{currentLang.name}</span>
        </div>
        <span className={`material-symbols-outlined text-sm transition-transform ${isLangOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`absolute z-[100] transition-all duration-300 transform ${
          isLangOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
        } ${
          isMobile 
            ? 'left-0 right-0 top-full mt-1 bg-white border border-gray-100 shadow-xl' 
            : 'right-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-2xl rounded-sm py-2'
        }`}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code);
              setIsLangOpen(false);
              if (isMobile) setIsMenuOpen(false);
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
              currentLang.code === lang.code ? 'bg-primary/5 text-primary' : 'text-gray-600'
            }`}
          >
            <img src={lang.flag} alt={lang.name} className="w-5 h-3.5 object-cover rounded-sm" />
            <span className="text-xs font-bold uppercase tracking-wider">{lang.name}</span>
            {currentLang.code === lang.code && (
              <span className="material-symbols-outlined text-sm ml-auto">check</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      {/* Top Bar - Gold Background */}
      <div className="bg-primary text-white text-xs hidden md:block">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center font-sans">
          <p className="tracking-wide font-medium">
            {t.header.topBarText}
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 hover:text-secondary transition cursor-pointer">
              <span className="material-symbols-outlined text-sm">email</span>
              <span>beaconimmigration@beacongroup.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>{t.header.schedule}</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-secondary transition cursor-pointer border-r border-white/20 pr-6 mr-2">
              <span className="material-symbols-outlined text-sm">call</span>
              <span>(+84) 931 856 799</span>
            </div>
            
            {/* Desktop Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
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
            <Link to="/" className={isActive("/")}>{t.header.home}</Link>
            <Link to="/about" className={isActive("/about")}>{t.header.about}</Link>

            <div className="relative group py-4 z-50">
              <div className="flex items-center cursor-pointer text-secondary hover:text-primary transition-colors">
                <span>{t.header.programs}</span>
                <span className="material-symbols-outlined text-base ml-1">expand_more</span>
              </div>
              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white shadow-xl border border-gray-100 py-2 rounded-sm">
                  {currentPrograms.map((program, idx) => (
                    <div key={idx} className="relative group/sub">
                      <div className="px-5 py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer text-gray-700 hover:text-primary transition-colors border-b border-gray-50 last:border-0">
                        <span className="font-medium text-sm">{program.title}</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </div>
                      <div className="absolute left-full top-0 ml-1 w-56 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0">
                        <div className="bg-white shadow-xl border border-gray-100 py-2 rounded-sm">
                          {program.items.map((country, cIdx) => (
                            <Link 
                              key={cIdx} 
                              to={getProgramLink(country)} 
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

            <Link to="/news" className={isActive("/news")}>{t.header.news}</Link>
            <Link to="/contact" className={isActive("/contact")}>{t.header.contact}</Link>
            <button className="text-secondary hover:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4 text-sm font-medium text-secondary font-display border-t border-gray-100 pt-4 bg-white">
            <Link to="/" className="hover:text-primary px-4 py-2" onClick={() => setIsMenuOpen(false)}>{t.header.home}</Link>
            <Link to="/about" className="hover:text-primary px-4 py-2" onClick={() => setIsMenuOpen(false)}>{t.header.about}</Link>
            
            <div className="space-y-2 px-4">
              <div className="font-bold text-primary border-b border-gray-100 pb-1">{t.header.programs}</div>
              {currentPrograms.map((prog, i) => (
                <div key={i} className="pl-4">
                  <div className="font-semibold text-xs text-gray-500 mb-1 uppercase tracking-wide">{prog.title}</div>
                  <div className="pl-2 border-l-2 border-gray-100 flex flex-col space-y-2 py-1">
                    {prog.items.map((item, j) => (
                      <Link 
                        key={j} 
                        to={getProgramLink(item)} 
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

            <Link to="/news" className="hover:text-primary px-4 py-2" onClick={() => setIsMenuOpen(false)}>{t.header.news}</Link>
            <Link to="/contact" className="hover:text-primary px-4 py-2" onClick={() => setIsMenuOpen(false)}>{t.header.contact}</Link>
            
            {/* Mobile Language Switcher */}
            <LanguageSwitcher isMobile={true} />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
