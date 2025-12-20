import React from "react";
import { Link } from "react-router-dom";

interface NewsItem {
  id: string;
  category: string;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  slug: string;
}

const newsData: NewsItem[] = [
  {
    id: "1",
    category: "TIN TỨC ĐỊNH CƯ LATVIA",
    title: "Việc làm Latvia nhà hàng: Lựa chọn của nhiều lao động Việt",
    date: "10/11/2023",
    author: "BEACON IMMIGRATION",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
    excerpt: "Trong số các chương trình định cư diện tay nghề, việc làm Latvia nhà hàng đang trở thành hướng đi được nhiều người Việt lựa chọn nhờ công việc ổn định, điều kiện làm việc nhẹ nhàng, môi trường văn minh và cơ hội định cư lâu dài. Với nhu cầu tuyển dụng cao trong [...]",
    slug: "viec-lam-latvia-nha-hang"
  },
  {
    id: "2",
    category: "TIN TỨC ĐỊNH CƯ LATVIA",
    title: "Việc làm Latvia tiệm nail: Cơ hội định cư châu Âu rộng mở",
    date: "10/11/2023",
    author: "BEACON IMMIGRATION",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Trong vài năm trở lại đây, việc làm Latvia tiệm nail đã trở thành hướng đi được nhiều người Việt lựa chọn nhờ công việc nhẹ nhàng, thu nhập ổn định và lộ trình định cư rõ ràng. Với nhu cầu làm đẹp ngày càng tăng tại các thành phố lớn ngành nail ở Latvia [...]",
    slug: "viec-lam-latvia-tiem-nail"
  },
  {
    id: "3",
    category: "TIN TỨC ĐỊNH CƯ LATVIA",
    title: "Việc làm Latvia hãng cá: Lựa chọn định cư hoàn hảo",
    date: "10/11/2023",
    author: "BEACON IMMIGRATION",
    image: "https://images.unsplash.com/photo-1534951009808-766178b47a8e?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Việc làm Latvia hãng cá là một trong những vị trí định cư diện tay nghề phổ biến nhất hiện nay. Không chỉ thu hút bởi mức lương hấp dẫn mà còn là những quyền lợi cư trú mà ít ai hiểu rõ về thị trường định cư Latvia. Tổng quan về thị trường việc [...]",
    slug: "viec-lam-latvia-hang-ca"
  },
  {
    id: "4",
    category: "TIN TỨC ĐỊNH CƯ LATVIA",
    title: "Thu nhập ở Latvia: Người Việt kiếm bao nhiêu mỗi tháng?",
    date: "10/11/2023",
    author: "BEACON IMMIGRATION",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Mức thu nhập ở Latvia là mối quan tâm của nhiều anh chị khi cân nhắc lựa chọn giữa các quốc gia định cư. Liệu thu nhập của việc làm tại Latvia có đủ để chi trả cho các khoản sinh hoạt phí? Cùng Beacon tìm hiểu chi tiết qua bài viết dưới đây. Tổng [...]",
    slug: "thu-nhap-o-latvia"
  },
  {
    id: "5",
    category: "CHƯA PHÂN LOẠI",
    title: "Chương trình định cư Latvia diện cổ đông",
    date: "03/11/2023",
    author: "BEACON IMMIGRATION",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    excerpt: "Định cư Latvia diện cổ đông với mức đầu tư từ 50.000 EUR, thủ tục minh bạch, cả gia đình nhận thẻ cư trú châu Âu nhanh chóng.",
    slug: "dinh-cu-latvia-dien-co-dong"
  },
];

const News: React.FC = () => {
  return (
    <>
      {/* Banner */}
      <section
        className="relative h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-6">
          <h1 className="font-display text-5xl font-bold mb-2 uppercase tracking-wider text-primary">
            TIN TỨC
          </h1>
          <p className="font-display text-sm font-bold uppercase tracking-widest mb-1 opacity-90">
            BEACON IMMIGRATION
          </p>
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-gray-200">
            DU HỌC & ĐỊNH CƯ
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column: News Feed */}
            <div className="w-full lg:w-3/4">
              <div className="space-y-16">
                {newsData.map((item) => (
                  <article key={item.id} className="flex flex-col border-b border-gray-100 pb-12 last:border-0 last:pb-0">
                    {/* Meta Header */}
                    <div className="text-center mb-4">
                      <span className="text-[10px] font-bold text-accent-brown uppercase tracking-widest block mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-bold text-secondary hover:text-primary transition-colors cursor-pointer mb-2 font-display">
                        <Link to={`/news/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        ĐĂNG VÀO {item.date} BỞI {item.author}
                      </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative mb-6 group cursor-pointer overflow-hidden rounded-sm">
                        <Link to={`/news/${item.slug}`}>
                            <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden relative">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                
                                {/* Date Badge */}
                                <div className="absolute top-4 left-4 bg-white text-center py-2 px-3 shadow-md rounded-sm z-10">
                                    <span className="block text-2xl font-bold text-secondary leading-none">{item.date.split('/')[0]}</span>
                                    <span className="block text-xs font-bold text-gray-500 uppercase">Th{item.date.split('/')[1]}</span>
                                </div>

                                {/* Logo Badge Overlay (Mock) */}
                                <div className="absolute top-4 left-20 bg-secondary/90 text-primary px-3 py-1 rounded-sm text-xs font-bold shadow-md">
                                    Beacon
                                </div>

                                {/* Bottom Info Bar Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 py-2 px-4 flex justify-between items-center text-gray-200 text-xs font-bold font-sans">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm text-primary">call</span>
                                        <span>0901 816 787</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                                        <span>97 Đặng Dung, Q.1, TP.HCM</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans text-justify">
                        {item.excerpt}
                    </p>

                    {/* Read More Button */}
                    <div className="text-center">
                        <Link 
                            to={`/news/${item.slug}`}
                            className="inline-block border border-gray-300 text-gray-500 px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:border-primary hover:bg-primary hover:text-black transition-all duration-300 rounded-sm"
                        >
                            Tiếp tục đọc →
                        </Link>
                    </div>

                    {/* Footer Meta */}
                    <div className="mt-6 text-center">
                         <span className="text-[10px] text-gray-400">
                            Đăng trong <span className="text-accent-brown">{item.category}</span>
                         </span>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-16 flex justify-center gap-2">
                  {[1, 2, 3, 4].map((page) => (
                      <button 
                        key={page}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold transition-colors ${page === 1 ? 'bg-primary text-black border-primary' : 'bg-white text-gray-500 border-gray-300 hover:border-primary hover:text-primary'}`}
                      >
                          {page}
                      </button>
                  ))}
                  <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="sticky top-24">
                 <div className="mb-8">
                     <h3 className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary inline-block pb-2 mb-6 text-secondary">
                         Tin Tức Định Cư
                     </h3>
                     <ul className="space-y-0 text-sm border-t border-gray-200">
                         {[
                             "Tin Tức Du Học",
                             "Tin Tức Định Cư",
                             "Định cư Latvia – Châu Âu",
                             "Định cư Mỹ EB3 Unskilled"
                         ].map((item, idx) => (
                             <li key={idx} className="border-b border-gray-200">
                                 <a href="#" className="flex justify-between items-center py-3 text-gray-600 hover:text-primary transition-colors group">
                                     <span>{item}</span>
                                     <span className="material-symbols-outlined text-gray-400 text-sm group-hover:text-primary">expand_more</span>
                                 </a>
                             </li>
                         ))}
                     </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;