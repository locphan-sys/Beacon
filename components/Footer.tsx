
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  onOpenConsultation?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setActiveService(activeService === service ? null : service);
  };

  const serviceData = [
    {
      name: "Định cư Châu Âu",
      items: ["Pháp", "Ý", "Slovenia", "Séc", "Malta", "Romania"],
    },
    {
      name: "Định cư Châu Mỹ",
      items: ["Mỹ", "Canada", "Các quốc gia vùng Caribe"],
    },
    {
      name: "Định cư Châu Á",
      items: ["Nhật", "Malaysia"],
    },
  ];

  return (
    <footer className="bg-white text-gray-600 pt-20 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: GIỚI THIỆU */}
          <div>
            <h5 className="font-display font-bold text-secondary mb-8 text-lg uppercase tracking-wider border-l-[6px] border-primary pl-4 leading-none">
              GIỚI THIỆU
            </h5>
            <ul className="space-y-4 text-sm font-sans text-gray-500">
              <li>
                <Link to="/about" className="hover:text-primary transition flex items-center group">
                  <span className="material-symbols-outlined text-sm mr-2 text-primary font-bold group-hover:translate-x-1 transition-transform">chevron_right</span>
                  Giới thiệu Beacon Group
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-primary transition flex items-center group">
                  <span className="material-symbols-outlined text-sm mr-2 text-primary font-bold group-hover:translate-x-1 transition-transform">chevron_right</span>
                  Sự kiện Hội thảo
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-primary transition flex items-center group">
                  <span className="material-symbols-outlined text-sm mr-2 text-primary font-bold group-hover:translate-x-1 transition-transform">chevron_right</span>
                  Tin tức
                </Link>
              </li>
               <li>
                <button 
                  onClick={onOpenConsultation}
                  className="hover:text-primary transition flex items-center group text-left w-full"
                >
                  <span className="material-symbols-outlined text-sm mr-2 text-primary font-bold group-hover:translate-x-1 transition-transform">chevron_right</span>
                  Liên hệ tư vấn
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: DỊCH VỤ BEACON (Accordion Style) */}
          <div>
            <h5 className="font-display font-bold text-secondary mb-8 text-lg uppercase tracking-wider border-l-[6px] border-primary pl-4 leading-none">
              Dịch vụ Beacon
            </h5>
            <div className="space-y-2">
              {serviceData.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <button
                    onClick={() => toggleService(service.name)}
                    className={`flex items-center justify-between w-full py-3 px-4 rounded-sm transition-all duration-300 group ${
                      activeService === service.name 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-gray-50 text-gray-500"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className={`material-symbols-outlined text-sm mr-3 font-bold transition-transform duration-300 ${activeService === service.name ? 'text-primary' : 'text-primary'}`}>
                        chevron_right
                      </span>
                      <span className="text-sm font-bold uppercase tracking-wide">{service.name}</span>
                    </div>
                    <span className={`material-symbols-outlined text-base transition-transform duration-300 ${activeService === service.name ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeService === service.name ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-11 py-2 flex flex-col space-y-2">
                      {service.items.map((item) => (
                        <Link
                          key={item}
                          to="#"
                          className="text-xs text-gray-400 hover:text-primary transition-colors py-1 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/30 mr-2"></span>
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: THÔNG TIN LIÊN HỆ */}
          <div>
            <h5 className="font-display font-bold text-secondary mb-8 text-lg uppercase tracking-wider border-l-[6px] border-primary pl-4 leading-none">
              Thông Tin Liên Hệ
            </h5>
            <ul className="space-y-5 text-sm font-sans text-gray-500">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-lg mr-3 mt-0.5 text-primary">
                  location_on
                </span>
                <span>97 Đặng Dung, Quận 1, TP HCM</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-lg mr-3 mt-0.5 text-primary">
                  phone
                </span>
                <span>(+84) 931 856 799</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-lg mr-3 mt-0.5 text-primary">
                  email
                </span>
                <span>beaconimmigration@beacongroup.com</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-10">
              {[
                "facebook", "public", "smart_display", "group"
              ].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white text-gray-500 transition-all duration-300 shadow-sm`}
                >
                     <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-12 text-xs text-gray-400 text-center font-sans">
          <p className="mb-2 uppercase tracking-widest font-bold opacity-70">
            Mã số doanh nghiệp: 0318107749 - Ngày cấp: 18/10/2023 - Sở KH&ĐT TPHCM
          </p>
          <p className="text-gray-400">
            © 2025 Beacon Immigration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
