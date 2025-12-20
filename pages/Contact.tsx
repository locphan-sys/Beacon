
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  // Ngăn cuộn trang khi Modal mở
  useEffect(() => {
    if (showContactModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showContactModal]);

  const teamMembers = [
    {
      name: "Ms HUYEN TRUONG (HUMI)",
      role: "GIÁM ĐỐC BEACON IMMIGRATION",
      image: "https://i.ibb.co/sJgMhf2N/506253836-10235999942596015-2304511236105444107-n.jpg",
    },
    {
      name: "Ms PHUONG LE (LUCY)",
      role: "TRỢ LÝ THỦ TỤC HỒ SƠ",
      image: "https://i.ibb.co/5HY3LvR/4.png",
    },
    {
      name: "Mr LOC PHAN (Sheng Lu)",
      role: "CHUYÊN VIÊN TƯ VẤN",
      image: "https://i.ibb.co/xKK7m46z/3.png",
    },
  ];

  return (
    <>
      {/* Modal liên hệ chuyên gia */}
      {showContactModal && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setShowContactModal(false)}
        >
          <div className="absolute inset-0 bg-secondary/90 backdrop-blur-md"></div>
          <div 
            className="relative bg-white w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 border-t-8 border-primary"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-primary transition-colors z-10"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <span className="material-symbols-outlined text-5xl text-primary mb-4">contact_support</span>
                <h2 className="font-display text-2xl font-black text-secondary uppercase tracking-[0.2em] mb-2">
                  Liên Hệ Chuyên Gia
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-gray-500 text-sm font-sans leading-relaxed">
                  Quý khách vui lòng để lại thông tin liên hệ. Chuyên gia tư vấn của <strong>Beacon Immigration</strong> sẽ phản hồi trong vòng 24h.
                </p>
              </div>

              <form 
                className="space-y-4" 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  alert('Yêu cầu đã được gửi thành công! Cảm ơn Quý khách.'); 
                  setShowContactModal(false); 
                }}
              >
                <div className="relative">
                  <input
                    required
                    type="text"
                    placeholder="Họ và tên của Quý khách"
                    className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm"
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">person</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      required
                      type="tel"
                      placeholder="Số điện thoại"
                      className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm"
                    />
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">call</span>
                  </div>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm"
                    />
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">mail</span>
                  </div>
                </div>

                <div className="relative">
                   <textarea 
                    placeholder="Quý khách đang quan tâm đến chương trình định cư nào?"
                    className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm min-h-[120px] resize-none"
                   ></textarea>
                   <span className="material-symbols-outlined absolute left-4 top-6 text-gray-400 text-xl">chat_bubble</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-secondary font-black py-5 hover:bg-secondary hover:text-white transition-all duration-300 tracking-[0.3em] uppercase shadow-xl rounded-xl mt-4 text-sm"
                >
                  Gửi Thông Tin Ngay
                </button>
                
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest mt-6">
                  Chúng tôi cam kết bảo mật tuyệt đối thông tin khách hàng
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Banner Section */}
      <section
        className="relative h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
            Luôn Sẵn Lòng Phục Vụ
          </h1>
          <p className="font-sans text-lg md:text-xl leading-relaxed text-gray-100">
            Với kinh nghiệm hơn 10 năm trong lĩnh vực tư vấn Visa Lao động –
            Định cư Châu Âu, Định cư Châu Mỹ, Định cư Châu Á chúng tôi tự
            tin mang đến cho Quý khách các gói dịch vụ với chi phí TIẾT KIỆM,
            thời gian xử lý NHANH và cam kết theo sát lộ trình định cư giúp Quý
            khách AN TÂM dựng xây tương lai mới.
          </p>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 -mt-24 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-large shadow-xl p-10 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 border-b-4 border-primary">
              <span className="material-symbols-outlined text-4xl mb-4 text-primary">
                call
              </span>
              <h3 className="font-display font-bold text-xl uppercase mb-2 text-secondary">
                HOTLINE 24/7
              </h3>
              <p className="font-sans text-gray-500 mb-1">(Zalo, Viber, Whatsapp)</p>
              <p className="font-sans text-lg font-bold text-secondary">
                (+84) 931856799
              </p>
            </div>

            <div className="bg-white rounded-large shadow-xl p-10 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 border-b-4 border-primary">
              <span className="material-symbols-outlined text-4xl mb-4 text-primary">
                map
              </span>
              <h3 className="font-display font-bold text-xl uppercase mb-2 text-secondary">
                EMAIL
              </h3>
              <p className="font-sans text-gray-500 mb-1">
                Gửi yêu cầu cho chúng tôi:
              </p>
              <p className="font-sans text-lg font-bold text-secondary break-all">
                beaconimmigration@beacongroup.com
              </p>
            </div>

            <div className="bg-white rounded-large shadow-xl p-10 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 border-b-4 border-primary">
              <span className="material-symbols-outlined text-4xl mb-4 text-primary">
                location_on
              </span>
              <h3 className="font-display font-bold text-xl uppercase mb-2 text-secondary">
                VĂN PHÒNG
              </h3>
              <p className="font-sans text-lg text-secondary">
                97 Đặng Dung, Quận 1, TP HCM
              </p>
            </div>

            <div className="bg-white rounded-large shadow-xl p-10 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 border-b-4 border-primary">
              <span className="material-symbols-outlined text-4xl mb-4 text-primary">
                schedule
              </span>
              <h3 className="font-display font-bold text-xl uppercase mb-2 text-secondary">
                GIỜ MỞ CỬA
              </h3>
              <p className="font-sans text-gray-500">Làm việc từ:</p>
              <p className="font-sans text-lg font-bold text-secondary">
                T2 – T6: 9:00 – 18:00
              </p>
              <p className="font-sans text-gray-500">T7, CN & Các ngày lễ: Nghỉ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-large shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
            <div className="text-center mb-10">
              <h3 className="font-display font-bold text-2xl text-primary uppercase mb-2">
                Đừng ngần ngại
              </h3>
              <h2 className="font-display font-bold text-3xl text-secondary">
                gửi tin nhắn của bạn cho chúng tôi
              </h2>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Họ & Tên"
                  className="w-full p-4 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition bg-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition bg-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="SĐT liên hệ"
                  className="w-full p-4 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition bg-white"
                />
                <select className="w-full p-4 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-gray-500 bg-white">
                  <option>—Vui lòng chọn—</option>
                  <option>Đăng ký Đại lý</option>
                  <option>Tư vấn Định cư</option>
                  <option>Hỗ trợ khác</option>
                </select>
              </div>

              <textarea
                placeholder="Yêu cầu của Quý khách"
                rows={5}
                className="w-full p-4 rounded-sm border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none bg-white"
              ></textarea>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-secondary hover:bg-primary text-white font-bold py-4 px-12 rounded-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
                >
                  GỬI LỜI NHẮN
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Team Contact Section - REPLACED WITH EXPERT TEAM FROM HOME */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary">Đội Ngũ Chuyên Gia</h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="bg-white p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 text-center group rounded-3xl">
                  <div className="relative inline-block mb-8">
                      <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-48 h-48 rounded-full object-cover border-4 border-gray-50 shadow-2xl group-hover:scale-105 transition-all duration-500 relative z-10"
                      />
                  </div>
                  
                  <h4 className="font-bold text-2xl font-display text-secondary mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs font-black tracking-[0.3em] text-gray-400 mb-8 uppercase">
                    {member.role}
                  </p>
                  <div className="flex justify-center space-x-5">
                    <button
                     onClick={() => setShowContactModal(true)}
                     className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                      <span className="material-symbols-outlined text-xl">email</span>
                    </button>
                    <button 
                      onClick={() => setShowContactModal(true)}
                      className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
                <Link to="/contact" className="inline-block bg-secondary text-white font-bold py-4 px-12 hover:bg-primary transition-all duration-300 uppercase tracking-[0.3em] text-xs rounded-full shadow-2xl">
                    Trở thành đối tác chiến lược
                </Link>
            </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
