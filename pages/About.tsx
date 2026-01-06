import React from "react";

const About: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="relative flex flex-col items-center justify-center min-h-[500px] bg-cover bg-center bg-no-repeat px-4 py-16"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop")',
          }}
        >
          <div className="flex flex-col gap-4 text-center text-white max-w-5xl mx-auto z-20">
            <h1 className="text-3xl font-bold font-display tracking-wide">
              CHÚNG TÔI LÀ
            </h1>
            <h2 className="text-5xl md:text-6xl font-black font-display tracking-tight">
              Beacon Immigration
            </h2>
          </div>
        </div>

        {/* Stats */}
        <div className="relative -mt-24 z-30 mb-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { val: "10+", label: "Kinh nghiệm" },
                { val: "200+", label: "Hồ sơ thành công" },
                { val: "97%", label: "Khách hàng hài lòng" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center justify-center"
                >
                  <h3 className="text-primary text-6xl font-bold font-display">
                    {stat.val}
                  </h3>
                  <p className="text-text-main mt-2 font-semibold font-sans">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Detailed */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-bg-light">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTAj1jdP0ZUoJjr_cq9S5DNeF97akdnTjlpwpcI6HgSBymAjPrc4IY40a7bXkOgctxLmHDYHaDSyZ0Tx_wXlfi8q1t7dhufNpyJcYwVLzQUwN5px1_VUf-kKTQ4FRfPQxnzc-v2LObtxxacdHfm1FMvm5O_NnHz_GnwcGjxIdeUHivtBGDeafXGSecaR2N3g2wdCeb5YzmtKQCvByHAWwZeS2AV7K0X2DGbhV7vPRTWE-j6nD37jVwpAH6t_7Cm5dHv8ExqE6nkWee"
              alt="Consultant"
              className="rounded-xl object-cover w-full h-full max-h-[500px] shadow-md"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="font-display text-[#8a8060] text-lg font-bold tracking-widest mb-2 uppercase">
              Lý do chọn chúng tôi
            </h2>
            <h3 className="font-display text-text-main text-3xl md:text-4xl font-bold leading-tight mb-6">
              Đối tác tin cậy trên hành trình nhập cư của bạn
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: "groups",
                  title: "Cá nhân hóa quy trình tư vấn",
                  desc: "Chúng tôi điều chỉnh mọi tư vấn và chiến lược cho hoàn cảnh và nguyện vọng riêng của bạn.",
                },
                {
                  icon: "verified",
                  title: "Thông tin minh bạch",
                  desc: "Chúng tôi cung cấp thông tin rõ ràng, trung thực và cập nhật để bạn luôn được thông tin và tự tin.",
                },
                {
                  icon: "savings",
                  title: "Cam kết hoàn tiền",
                  desc: "Cam kết của chúng tôi đối với thành công của bạn được hỗ trợ bởi đảm bảo sự hài lòng, đảm bảo sự yên tâm.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-sans text-text-main text-lg font-bold">
                      {item.title}
                    </h4>
                    <p className="text-[#8a8060] text-sm font-normal leading-normal font-sans mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-[#8a8060] text-lg font-bold tracking-widest mb-2 uppercase">
              Dịch vụ tại Beacon Immigration
            </h2>
            <h3 className="font-display text-text-main text-3xl md:text-4xl font-bold leading-tight">
              Dịch vụ của chúng tôi là cách làm việc, mà ở đó chúng tôi mang đến
              sự chuyên nghiệp
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                            {
                title: "ĐỊNH CƯ MỸ",
                items: [
                  "Mỹ (Visa EB1A/EB3/EB2/EB5/L1)",
                  "Canada (Visa Startup/Visa lao động, Đầu tư quốc tịch)",
                  "Vùng Caribe (Đầu tư quốc tịch)",
                ],
              },
              {
                title: "ĐỊNH CƯ ÂU",
                items: [
               "Pháp (Visa Tài năng, Đầu tư quốc tịch)",
 "Ý (Đầu tư quốc tịch)",
"Slovenia (Đầu tư quốc tịch)",
"Cộng hòa Séc (Đầu tư quốc tịch)", 
"Romania (Đầu tư quốc tịch)",
"Malta (Thẻ thường trú nhân)",
                ],
              },
              {
                title: "ĐỊNH CƯ Á",
                items: [
                  "Nhật (Visa lao động, Đầu tư quốc tịch)",
                  "Malaysia (Visa lao động, Đầu tư quốc tịch)",
                ],
              },
            ].map((box, idx) => (
              <div
                key={idx}
                className="bg-bg-light rounded-lg p-6 flex flex-col shadow-sm"
              >
                <h4 className="font-display text-xl font-bold text-text-main mb-4">
                  {box.title}
                </h4>
                <ul className="space-y-2 text-[#8a8060] font-sans text-sm list-disc list-outside pl-5">
                  {box.items.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners & Contact */}
      <div className="bg-bg-light py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-text-main text-3xl md:text-4xl font-bold leading-tight">
              Đối Tác Chiến Lược
            </h2>
            <p className="mt-4 text-[#8a8060] font-sans">
              Chúng tôi tự hào được hợp tác với các đối tác hàng đầu trong ngành
              để mang đến cho bạn những giải pháp tốt nhất.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPHhrFVe5JH526HwzNvu4ysVplPb_5PO3wE-CrV_i-aghbjNu1jqHuXxT9DJ8BIjUbcF9bXz6LVGNjVIfaMW20JvnUuaLzpFm2tSRF2T-bhUbZdXKPJLe5z7m0t7McKuzQHJhPqYFYY09P1h03c5XK3mfL_z5AyKuZqccB10BkHDwQdw8yR6DzJfpxW10iZfCGEGYJG_qWSb89U9ZN-5ZleD9cCLp-pViSciJKic2u0LytY5yc1vI3ehJKOZYdNlBrse1rM3-pVowZ"
                alt="Partner logo"
                className="w-2/3 h-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="font-display text-2xl font-bold text-text-main mb-4">
                Liên Hệ
              </h3>
              <p className="font-sans text-[#8a8060] mb-6">
                Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí về
                hành trình định cư của bạn.
              </p>
              <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-text-main text-base font-bold leading-normal tracking-[0.015em] font-sans hover:bg-yellow-400 transition">
                <span className="truncate">(+84) 931 856 799</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;