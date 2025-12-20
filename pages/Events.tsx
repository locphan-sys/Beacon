
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  status: "upcoming" | "past";
  description: string;
}

const eventsData: EventItem[] = [
  {
    id: "1",
    title: "Tọa đàm: Bí quyết định cư Mỹ diện nhân tài EB2-NIW",
    date: "15/05/2025",
    time: "09:00 - 11:30",
    location: "Khách sạn Sheraton, Quận 1, TP. HCM",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    status: "upcoming",
    description: "Buổi chia sẻ chuyên sâu từ các chuyên gia di trú hàng đầu về lộ trình nhận Thẻ Xanh Mỹ diện EB2 chỉ trong 45 ngày."
  },
  {
    id: "2",
    title: "Hội thảo: Đầu tư quốc tịch Châu Âu - Xu hướng 2025",
    date: "22/05/2025",
    time: "14:00 - 16:30",
    location: "Văn phòng Beacon Immigration, Quận 1",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    status: "upcoming",
    description: "Khám phá các chương trình định cư Châu Âu tối ưu nhất: Malta, Slovenia, Ý và Bồ Đào Nha."
  },
  {
    id: "3",
    title: "Private Talk: Định cư Châu Á & Chiến lược bảo toàn tài sản",
    date: "10/04/2025",
    time: "15:00 - 17:00",
    location: "Park Hyatt Saigon",
    image: "https://images.unsplash.com/photo-1540575861501-7ad0582373f2?q=80&w=2070&auto=format&fit=crop",
    status: "past",
    description: "Buổi gặp gỡ thân mật dành riêng cho các nhà đầu tư quan tâm đến thị trường Nhật Bản và Malaysia."
  }
];

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Ngăn cuộn trang khi Modal mở
  useEffect(() => {
    if (showRegisterModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showRegisterModal]);

  const handleOpenRegister = (event: EventItem) => {
    setSelectedEvent(event);
    setShowRegisterModal(true);
  };

  const filteredEvents = eventsData.filter(event => event.status === activeTab);

  return (
    <div className="bg-white">
      {/* Registration Modal */}
      {showRegisterModal && selectedEvent && (
        <div 
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setShowRegisterModal(false)}
        >
          <div className="absolute inset-0 bg-secondary/95 backdrop-blur-md"></div>
          <div 
            className="relative bg-white w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 border-t-8 border-primary"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowRegisterModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-primary transition-colors z-10"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <span className="material-symbols-outlined text-5xl text-primary mb-4">confirmation_number</span>
                <h2 className="font-display text-2xl font-black text-secondary uppercase tracking-[0.1em] mb-2 leading-tight">
                  Đăng Ký Tham Dự
                </h2>
                <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">
                  {selectedEvent.title}
                </p>
                <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-gray-500 text-sm font-sans leading-relaxed">
                  Quý khách vui lòng cung cấp thông tin chính xác để <strong>Beacon Immigration</strong> gửi thư mời và tài liệu hội thảo.
                </p>
              </div>

              <form 
                className="space-y-4" 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  alert(`Đăng ký thành công sự kiện: ${selectedEvent.title}. Chúng tôi sẽ gửi thư mời qua email của bạn.`); 
                  setShowRegisterModal(false); 
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
                      placeholder="Email nhận thư mời"
                      className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm"
                    />
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">mail</span>
                  </div>
                </div>

                <div className="relative">
                   <textarea 
                    placeholder="Quý khách có câu hỏi nào muốn gửi tới chuyên gia trong buổi tọa đàm?"
                    className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white outline-none transition rounded-xl font-sans text-sm min-h-[100px] resize-none"
                   ></textarea>
                   <span className="material-symbols-outlined absolute left-4 top-6 text-gray-400 text-xl">quiz</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-secondary font-black py-5 hover:bg-secondary hover:text-white transition-all duration-300 tracking-[0.3em] uppercase shadow-xl rounded-xl mt-4 text-sm"
                >
                  Gửi Đăng Ký Ngay
                </button>
                
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest mt-6">
                  Thông tin được bảo mật hoàn toàn bởi Beacon Immigration
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-primary">Sự Kiện & Hội Thảo</h1>
          <p className="font-sans text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Kết nối trực tiếp với các chuyên gia di trú hàng đầu để tìm ra lộ trình định cư hoàn hảo cho gia đình bạn.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8">
            <button 
              onClick={() => setActiveTab("upcoming")}
              className={`pb-4 px-4 font-display font-bold uppercase tracking-widest text-sm transition-all relative ${activeTab === "upcoming" ? "text-primary" : "text-gray-400 hover:text-secondary"}`}
            >
              Sắp diễn ra
              {activeTab === "upcoming" && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary animate-in fade-in slide-in-from-bottom-2"></div>}
            </button>
            <button 
              onClick={() => setActiveTab("past")}
              className={`pb-4 px-4 font-display font-bold uppercase tracking-widest text-sm transition-all relative ${activeTab === "past" ? "text-primary" : "text-gray-400 hover:text-secondary"}`}
            >
              Đã diễn ra
              {activeTab === "past" && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary animate-in fade-in slide-in-from-bottom-2"></div>}
            </button>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row group hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-primary text-secondary font-black px-4 py-2 rounded-lg text-sm shadow-lg">
                      {event.date.split('/')[0]} TH{event.date.split('/')[1]}
                    </div>
                  </div>
                  <div className="p-8 md:w-3/5 flex flex-col">
                    <h3 className="text-xl font-display font-black text-secondary mb-4 leading-tight group-hover:text-primary transition-colors uppercase">
                      {event.title}
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-500 text-sm">
                        <span className="material-symbols-outlined text-primary mr-3 text-xl">schedule</span>
                        {event.time}
                      </div>
                      <div className="flex items-start text-gray-500 text-sm">
                        <span className="material-symbols-outlined text-primary mr-3 text-xl">location_on</span>
                        {event.location}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3 font-sans italic">
                      "{event.description}"
                    </p>
                    <div className="mt-auto">
                      {event.status === "upcoming" ? (
                        <button 
                          onClick={() => handleOpenRegister(event)}
                          className="bg-secondary text-primary hover:bg-primary hover:text-secondary w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-md"
                        >
                          Đăng ký tham dự ngay
                        </button>
                      ) : (
                        <button className="bg-gray-100 text-gray-400 w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs cursor-not-allowed">
                          Sự kiện đã kết thúc
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">event_busy</span>
                <p className="text-gray-400 font-sans">Hiện chưa có sự kiện nào được cập nhật trong mục này.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter / Contact Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
              Không bỏ lỡ bất kỳ hội thảo nào?
            </h2>
            <p className="text-gray-400 font-sans mb-12 text-lg">
              Đăng ký nhận bản tin để cập nhật lịch trình các buổi tọa đàm mới nhất và nhận tài liệu định cư miễn phí.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn đã đăng ký!'); }}>
              <input 
                type="email" 
                placeholder="Nhập email của bạn" 
                className="flex-grow bg-white/10 border border-white/20 p-5 rounded-xl text-white outline-none focus:border-primary transition-all font-sans"
                required
              />
              <button type="submit" className="bg-primary text-secondary px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-xl">
                Đăng ký ngay
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
