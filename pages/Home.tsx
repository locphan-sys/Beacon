
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { Service } from "../types";

const services: Service[] = [
  {
    id: "1",
    title: "Chương trình Định cư Mỹ diện Nhân tài EB2 kết quả chỉ trong 45 ngày.",
    description: "Lộ trình định cư Mỹ diện Nhân tài EB2 yêu cầu kinh nghiệm, bằng cấp. Nhận thẻ xanh vĩnh viễn với gói đầu tư thấp từ 200,000 USD cho cả gia đình.",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "2",
    title: "Chương trình Đầu tư Sở hữu Quốc tịch Châu Âu chỉ trong 8 tháng.",
    description: "Trở thành công dân châu Âu với gói đầu tư từ 400,000 EUR. Quy trình minh bạch, cam kết hoàn tiền 100% nếu không đạt lộ trình.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "3",
    title: "Chương trình Đầu tư Sở hữu Quốc tịch một số quốc gia Châu Á chỉ trong 2 tháng.",
    description: "Lộ trình định cư không yêu cầu kinh nghiệm, bằng cấp, trình độ ngoại ngữ. Với gói đầu tư từ 200,000 USD/ 1 người, cả gia đình nhận quốc tịch nhanh chóng.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
];

interface ProgramGroup {
  name: string;
  icon: string;
  items: string[];
}

const Home: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [showEuropeModal, setShowEuropeModal] = useState(false);
  const [showUSAModal, setShowUSAModal] = useState(false);
  const [showAsiaModal, setShowAsiaModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Prevent scroll when any modal is open
  useEffect(() => {
    if (showEuropeModal || showUSAModal || showAsiaModal || showContactModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showEuropeModal, showUSAModal, showAsiaModal, showContactModal]);

  const toggleGroup = (groupName: string) => {
    setActiveGroup(activeGroup === groupName ? null : groupName);
  };

  const programs: ProgramGroup[] = [
    {
      name: "Định cư Châu Âu",
      icon: "public",
      items: ["Pháp", "Ý", "Slovenia", "Cộng hòa Séc", "Romania", "Malta"],
    },
    {
      name: "Định cư Châu Mỹ",
      icon: "flag",
      items: ["Mỹ", "Canada", "Vùng Caribe"],
    },
    {
      name: "Định cư Châu Á",
      icon: "flight",
      items: ["Nhật", "Malaysia"],
    },
  ];

  return (
    <>
      {/* General Expert Contact Modal */}
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

      {/* Asia Program Consultation Modal */}
      {showAsiaModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setShowAsiaModal(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <div 
            className="relative bg-white w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowAsiaModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-primary transition-colors z-10"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <p className="text-primary font-bold tracking-[0.2em] uppercase mb-2 text-xs">Asian Citizenship Program</p>
                <h2 className="font-display text-2xl font-black text-secondary uppercase tracking-[0.1em] mb-2 leading-tight">
                  Tư Vấn Quốc Tịch Châu Á
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-gray-500 text-sm font-sans">
                  Nhận quốc tịch nhanh chóng chỉ trong 2 tháng với gói đầu tư từ <span className="text-primary font-bold">200,000 USD</span>. Vui lòng để lại thông tin để chuyên gia Beacon hỗ trợ bạn.
                </p>
              </div>

              <form 
                className="space-y-4" 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  alert('Cảm ơn bạn đã quan tâm đến chương trình Châu Á! Beacon Immigration sẽ liên hệ tư vấn trong thời gian sớm nhất.'); 
                  setShowAsiaModal(false); 
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      required
                      type="text"
                      placeholder="Họ và tên"
                      className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm"
                    />
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">person</span>
                  </div>
                  <div className="relative">
                    <input
                      required
                      type="tel"
                      placeholder="Số điện thoại"
                      className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm"
                    />
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">call</span>
                  </div>
                </div>

                <div className="relative">
                  <input
                    required
                    type="email"
                    placeholder="Email liên hệ"
                    className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm"
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">mail</span>
                </div>

                <div className="relative">
                   <textarea 
                    placeholder="Lời nhắn hoặc câu hỏi cho chuyên gia (Ví dụ: Tôi quan tâm đến quốc tịch Nhật Bản...)"
                    className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm min-h-[100px] resize-none"
                   ></textarea>
                   <span className="material-symbols-outlined absolute left-4 top-6 text-gray-400 text-xl">chat_bubble</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-secondary font-black py-5 hover:bg-secondary hover:text-white transition-all duration-300 tracking-[0.3em] uppercase shadow-xl rounded-xl mt-4 text-sm"
                >
                  Đăng Ký Tư Vấn Ngay
                </button>
                
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest mt-4">
                  Cam kết bảo mật 100% dữ liệu khách hàng
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Europe Program Modal */}
      {showEuropeModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setShowEuropeModal(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <div 
            className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowEuropeModal(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-primary transition-colors z-20"
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>

            <div className="p-8 md:p-12 text-center bg-white border-b border-gray-100">
               <p className="text-secondary-light max-w-4xl mx-auto leading-relaxed font-sans mb-10 text-lg md:text-xl font-medium italic">
                Trở thành công dân châu Âu with gói đầu tư từ <strong className="text-primary">400,000 EUR</strong>.
               </p>
               <h2 className="text-4xl md:text-5xl font-display font-black text-secondary tracking-widest uppercase mb-12 border-b-2 border-primary inline-block pb-4">
                 ƯU ĐIỂM NỔI BẬT
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="bg-secondary p-8 text-white rounded-lg shadow-xl border-l-4 border-primary">
                    <h3 className="font-display font-bold text-xl mb-4 text-primary uppercase">1. Chương trình chính thống</h3>
                    <p className="font-sans text-sm leading-relaxed opacity-90">
                      Hoàn 100% số tiền đầu tư nếu không đạt lộ trình sở hữu quốc tịch.
                    </p>
                  </div>
                  <div className="bg-secondary p-8 text-white rounded-lg shadow-xl border-l-4 border-primary">
                    <h3 className="font-display font-bold text-xl mb-4 text-primary uppercase">2. Điều kiện đơn giản</h3>
                    <ul className="space-y-2 font-sans text-sm opacity-90">
                      <li>• Không yêu cầu cư trú</li>
                      <li>• Không yêu cầu ngoại ngữ</li>
                      <li>• Không yêu cầu trình độ học vấn Đại học</li>
                    </ul>
                  </div>
                  <div className="bg-secondary p-8 text-white rounded-lg shadow-xl border-l-4 border-primary">
                    <h3 className="font-display font-bold text-xl mb-4 text-primary uppercase">3. Thời gian xử lý hồ sơ nhanh</h3>
                    <ul className="space-y-2 font-sans text-sm opacity-90">
                      <li>• Giải pháp được cá nhân hóa cho từng trường hợp cụ thể</li>
                      <li>• Sở hữu quốc tịch chỉ trong 8 tháng</li>
                    </ul>
                  </div>
                  <div className="bg-secondary p-8 text-white rounded-lg shadow-xl border-l-4 border-primary">
                    <h3 className="font-display font-bold text-xl mb-4 text-primary uppercase">4. Cam kết đồng hành xuyên suốt</h3>
                    <ul className="space-y-2 font-sans text-sm opacity-90">
                      <li>• Hỗ trợ từ A đến Z toàn bộ thủ tục</li>
                      <li>• Các bước yêu cầu thực hiện đơn giản, chính xác và đúng tiến độ.</li>
                    </ul>
                  </div>
                  <div className="bg-secondary p-8 text-white rounded-lg shadow-xl border-l-4 border-primary md:col-span-2">
                    <h3 className="font-display font-bold text-xl mb-4 text-primary uppercase">5. Quy trình rõ ràng và minh bạch</h3>
                    <p className="font-sans text-sm leading-relaxed opacity-90">
                      Không phí ẩn. Không phát sinh phí trong suốt quá trình xử lý hồ sơ.
                    </p>
                  </div>
               </div>
            </div>
            <div className="p-8 md:p-12 bg-gray-50 text-center">
               <h2 className="text-3xl md:text-4xl font-display font-black text-secondary tracking-widest uppercase mb-12">
                 QUYỀN LỢI CHƯƠNG TRÌNH
               </h2>
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {[
                    { icon: "verified_user", text: "Thường trú Châu Âu vĩnh viễn" },
                    { icon: "language", text: "Tự do đi lại toàn cầu" },
                    { icon: "family_restroom", text: "Cả gia đình hưởng mọi đặc quyền giáo dục, y tế, an sinh xã hội như người bản xứ" },
                    { icon: "account_balance", text: "Kế thừa quốc tịch cho các thế hệ sau" },
                    { icon: "trending_down", text: "Thiên đường ưu đãi thuế cho doanh nghiệp" },
                    { icon: "apartment", text: "Quốc tế hóa doanh nghiệp, mở rộng thị trường kinh doanh trong khu vực Schengen và EU" },
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-4 group">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-primary/20 shadow-md group-hover:bg-primary transition-all duration-300">
                        <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">
                          {benefit.icon}
                        </span>
                      </div>
                      <p className="text-[11px] font-bold text-secondary-light leading-relaxed font-sans uppercase tracking-tighter">
                        {benefit.text}
                      </p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      )}

      {/* USA EB2 Talent Modal */}
      {showUSAModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setShowUSAModal(false)}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm"></div>
          
          <div 
            className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl animate-in zoom-in-95 duration-300 border-t-4 border-primary"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowUSAModal(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-primary transition-colors z-30 bg-white/10 p-2 rounded-full backdrop-blur-md"
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>

            {/* Header / Banner */}
            <div className="relative py-20 px-6 md:px-12 text-center text-white bg-cover bg-center" style={{backgroundImage: "url('https://i.ibb.co/tpPJ83z3/Gemini-Generated-Image-6g1ge46g1ge46g1g.png?q=80&w=2074&auto=format&fit=crop')"}}>
              <div className="absolute inset-0 bg-secondary/80"></div>
              <div className="relative z-10 max-w-4xl mx-auto">
                <p className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">Beacon Immigration Presents</p>
                <h2 className="text-3xl md:text-5xl font-display font-black tracking-widest uppercase mb-6 leading-tight">
                  Nhận thẻ xanh vĩnh viễn với gói đầu tư thấp từ <span className="text-primary">200.000 USD</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>
                
                <h3 className="text-2xl font-display font-bold tracking-widest uppercase mb-8">ƯU ĐIỂM CHƯƠNG TRÌNH</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {[
                     { icon: "speed", desc: "Hồ sơ được xét duyệt cấp tốc, nhận chấp thuận chỉ trong vòng 45 ngày kể từ khi nộp hồ sơ" },
                     { icon: "payments", desc: "Chi phí đầu tư thấp, chỉ từ 200,000 USD" },
                     { icon: "verified_user", desc: "Không phải diện lao động việc làm, không cần thư mời làm việc từ công ty Mỹ" },
                   ].map((item, idx) => (
                     <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-lg flex flex-col items-center hover:bg-white/10 transition-all duration-300">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6 shadow-xl">
                           <span className="material-symbols-outlined text-2xl text-secondary">{item.icon}</span>
                        </div>
                        <p className="text-sm font-sans leading-relaxed text-gray-200">{item.desc}</p>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Requirements Section */}
            <div className="bg-bg-light py-20 px-6 md:px-12 text-center">
               <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-black tracking-widest text-secondary uppercase mb-6">
                   ĐIỀU KIỆN THAM GIA CHƯƠNG TRÌNH
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>
                
                <div className="bg-secondary text-white inline-block px-12 py-4 rounded-full font-bold mb-16 uppercase tracking-widest text-sm shadow-xl">
                  NHÀ ĐẦU TƯ ĐÁP ỨNG 1 TRONG 2 ĐIỀU KIỆN SAU
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   {/* Condition 1 */}
                   <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-primary text-left group hover:-translate-y-2 transition-all">
                      <div className="flex items-center gap-6 mb-6">
                         <span className="text-7xl font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-300">01</span>
                         <span className="material-symbols-outlined text-4xl text-primary">school</span>
                      </div>
                      <p className="font-sans text-lg text-secondary leading-relaxed">
                        Sở hữu bằng <strong>thạc sĩ, tiến sĩ</strong> hoặc <strong>giáo sư</strong> và có <strong>5 năm</strong> làm việc liên tục trong lĩnh vực chuyên môn
                      </p>
                   </div>

                   {/* Condition 2 */}
                   <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-primary text-left group hover:-translate-y-2 transition-all">
                      <div className="flex items-center gap-6 mb-6">
                         <span className="text-7xl font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-300">02</span>
                         <span className="material-symbols-outlined text-4xl text-primary">workspace_premium</span>
                      </div>
                      <p className="font-sans text-lg text-secondary leading-relaxed">
                        Sở hữu bằng <strong>cử nhân</strong> và có <strong>10 năm</strong> làm việc liên tục trong lĩnh vực chuyên môn
                      </p>
                   </div>
                </div>
               </div>
            </div>

            {/* Process Section - 5 Steps */}
            <div className="bg-white py-20 px-6 md:px-12 text-center border-t border-gray-100">
               <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-black text-secondary tracking-widest uppercase mb-16">
                  QUY TRÌNH XỬ LÝ HỒ SƠ
                </h2>
                
                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-5 gap-4">
                  {[
                    { step: "1", title: "Thẩm định & Ký kết", desc: "Thẩm định hồ sơ & Ký hợp đồng dịch vụ" },
                    { step: "2", title: "Nộp đơn I-140", desc: "Nộp đơn I-140 vào USCIS & Nhận chấp thuận" },
                    { step: "3", title: "Tiếp nhận hồ sơ", desc: "Beacon Immigration tiếp nhận và xử lý đơn" },
                    { step: "4", title: "Phỏng vấn LSQ", desc: "Phỏng vấn tại Lãnh Sứ Quán & Nhận visa" },
                    { step: "5", title: "Sang định cư", desc: "Sang định cư Mỹ với Thẻ Xanh vĩnh viễn" },
                  ].map((item, idx) => (
                    <div key={idx} className="relative group">
                       <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 h-full flex flex-col items-center hover:bg-white hover:shadow-2xl hover:border-primary transition-all duration-500 z-10 relative">
                          <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center font-black text-xl mb-6 shadow-lg group-hover:bg-primary group-hover:text-secondary transition-colors">
                             {item.step}
                          </div>
                          <h4 className="font-bold text-secondary text-sm mb-4 uppercase tracking-wider">{item.title}</h4>
                          <p className="text-gray-500 text-[11px] font-sans leading-relaxed">{item.desc}</p>
                       </div>
                       {idx < 4 && (
                         <div className="hidden md:block absolute top-12 left-[90%] w-full h-0.5 bg-gray-100 z-0"></div>
                       )}
                    </div>
                  ))}
                </div>
               </div>
            </div>
            
            <div className="bg-secondary py-12 text-center">
              <button 
                onClick={() => setShowUSAModal(false)}
                className="bg-primary text-secondary px-16 py-4 rounded-full font-bold uppercase tracking-[0.3em] hover:bg-white hover:scale-105 transition-all shadow-2xl text-xs"
              >
                Trở lại trang chủ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner / Hero Section */}
      <section
        className="relative h-[750px] flex items-center justify-center text-center text-white bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/tpPJ83z3/Gemini-Generated-Image-6g1ge46g1ge46g1g.png?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
        
        <div className="relative z-10 p-6 md:p-12 w-full max-w-6xl mx-auto">
          <h1 className="font-display text-4xl md:text-7xl font-black mb-4 text-white drop-shadow-2xl tracking-tight uppercase">
             BEACON IMMIGRATION
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-display text-lg md:text-xl mb-12 text-primary font-bold tracking-[0.2em] uppercase">
             Cầu nối đến cuộc sống mới của bạn
          </p>
          
          <div className="flex flex-col md:flex-row items-start md:justify-center gap-6 text-base font-sans font-bold">
            {programs.map((group) => (
              <div key={group.name} className="w-full md:w-72 flex flex-col">
                <button
                  onClick={() => toggleGroup(group.name)}
                  className={`flex items-center justify-between w-full border border-white/30 px-6 py-4 rounded-full backdrop-blur-md transition-all duration-300 ${
                    activeGroup === group.name 
                    ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
                    : "bg-black/40 text-white hover:border-primary hover:bg-black/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined ${activeGroup === group.name ? 'text-white' : 'text-primary'}`}>
                      {group.icon}
                    </span>
                    <span className="uppercase tracking-wider">{group.name}</span>
                  </div>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${activeGroup === group.name ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeGroup === group.name ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-2 p-2 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                    {group.items.map((item) => (
                      <Link
                        key={item}
                        to="#"
                        className="px-6 py-2.5 text-sm text-left text-gray-200 hover:text-primary hover:bg-white/5 rounded-xl transition-all duration-200 border-b border-white/5 last:border-0"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">Dịch Vụ Của Chúng Tôi</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-secondary uppercase tracking-tight">Chương Trình Độc Quyền Của Beacon Immigration</h3>
              <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
           </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onDetailClick={
                  service.id === "1" ? () => setShowUSAModal(true) : 
                  service.id === "2" ? () => setShowEuropeModal(true) :
                  service.id === "3" ? () => setShowAsiaModal(true) : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="consultation-form" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10 gap-12">
          <div className="text-secondary max-w-xl">
             <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary">
               Bắt Đầu Hành Trình Của Bạn
             </h2>
             <p className="text-gray-600 mb-8 leading-relaxed text-lg">
               Để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ và tư vấn lộ trình định cư phù hợp nhất với hồ sơ của bạn và gia đình.
             </p>
             <ul className="space-y-4">
               {[
                 "Tư vấn 1-1 chuyên sâu",
                 "Đánh giá hồ sơ miễn phí",
                 "Bảo mật thông tin tuyệt đối"
               ].map((text) => (
                 <li key={text} className="flex items-center gap-4">
                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white shadow-md">
                     <span className="material-symbols-outlined text-sm">check</span>
                   </span>
                   <span className="font-bold text-secondary">{text}</span>
                 </li>
               ))}
             </ul>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl w-full max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
            <h2 className="font-display text-2xl font-bold text-secondary mb-8 text-center uppercase tracking-widest border-b border-gray-100 pb-4">
              Đăng Ký Tư Vấn
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Họ tên"
                  className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition rounded-xl font-sans"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition rounded-xl font-sans"
                />
              </div>
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition rounded-xl font-sans"
              />
              <select className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-500 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition rounded-xl font-sans">
                <option>— Quan tâm chương trình —</option>
                <option>Định cư Mỹ</option>
                <option>Định cư Châu Âu</option>
                <option>Định cư Châu Á</option>
              </select>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-5 hover:bg-secondary hover:shadow-xl transition-all duration-300 tracking-[0.2em] uppercase shadow-lg rounded-xl mt-4"
              >
                Gửi Yêu Cầu Ngay
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-sm font-bold text-primary mb-2 uppercase tracking-[0.3em]">
            Giá Trị Cốt Lõi
          </h2>
          <h3 className="font-display text-3xl md:text-5xl font-bold text-secondary mb-16">
            Tại Sao Chọn Beacon Immigration?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Tận Tâm & Chân Thành",
                desc: "Chúng tôi đặt lợi ích của khách hàng lên hàng đầu, tư vấn trung thực về khả năng thành công của hồ sơ.",
                icon: "handshake",
              },
              {
                title: "Tài Chính Minh Bạch",
                desc: "Cam kết không phát sinh chi phí ẩn. Mọi khoản phí đều được liệt kê rõ ràng trong hợp đồng pháp lý.",
                icon: "payments",
              },
              {
                title: "Quy Trình Chuyên Nghiệp",
                desc: "Hệ thống xử lý hồ sơ khoa học, cập nhật tiến độ liên tục giúp khách hàng an tâm tuyệt đối.",
                icon: "verified_user",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500 shadow-sm relative overflow-hidden">
                    <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                    </span>
                </div>
                <h4 className="font-display text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <div className="w-12 h-0.5 bg-gray-200 mb-4 group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>
                <p className="text-gray-500 text-sm leading-relaxed font-sans max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-secondary font-display text-3xl md:text-5xl font-bold mb-4">
                Quy Trình Làm Việc
              </h2>
              <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase">
                Chuyên nghiệp - Rõ ràng - Hiệu quả
              </p>
           </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Tư vấn sơ bộ",
                desc: "Tiếp nhận thông tin và đánh giá khả năng hồ sơ.",
              },
              {
                step: "02",
                title: "Lập lộ trình",
                desc: "Xây dựng chiến lược định cư phù hợp nhất.",
              },
              {
                step: "03",
                title: "Ký kết & Xử lý",
                desc: "Ký hợp đồng và tiến hành hoàn thiện hồ sơ.",
              },
              {
                step: "04",
                title: "Kết quả",
                desc: "Nhận Visa, Passport và Hỗ trợ An cư quốc gia mới ",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-10 border border-gray-100 hover:border-primary group transition-all duration-300 shadow-md hover:shadow-2xl rounded-2xl relative overflow-hidden"
              >
                <div className="text-8xl font-black text-gray-50 absolute -right-4 -bottom-4 group-hover:text-primary/10 transition-colors">
                    {step.step}
                </div>
                <h4 className="font-display text-xl font-bold mb-4 text-secondary group-hover:text-primary transition-colors relative z-10">
                  {step.title}
                </h4>
                <p className="text-sm font-sans text-gray-500 relative z-10 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary">Đội Ngũ Chuyên Gia</h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
            {
                  name: "Ms HUYEN TRUONG (HUMI)",
                  role: "GIÁM ĐỐC BEACON IMMIGRATION",
                  image:
                    "https://i.ibb.co/sJgMhf2N/506253836-10235999942596015-2304511236105444107-n.jpg",
                },
                {
                  name: "Ms PHUONG LE (LUCY)",
                  role: "TRỢ LÝ THỦ TỤC HỒ SƠ",
                  image:
                    "https://i.ibb.co/5HY3LvR/4.png",
                },
                  {
                  name: "Mr LOC PHAN (Sheng Lu)",
                  role: "CHUYÊN VIÊN TƯ VẤN",
                  image:
                    "https://i.ibb.co/xKK7m46z/3.png",
                },
              ].map((member, idx) => (
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

export default Home;
