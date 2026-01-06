
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const USImmigration: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    vi: {
      title: "Định cư Mỹ",
      intro: "Với sức mạnh visa top đầu, cùng ngôn ngữ chính là tiếng Anh, Mỹ trở thành “điểm đến” không thể bỏ qua. Với sự đa dạng văn hóa và xã hội, Mỹ luôn là địa điểm nhập cư nổi tiếng. Chính phủ Mỹ cũng đang hỗ trợ hết mình công dân toàn cầu với nhiều chính sách khác nhau.",
      facts: [
        { icon: "branding_watermark", title: "Quyền lực hộ chiếu", value: "Top 5 thế giới, được đi 173 nước (passport index 09/2023)" },
        { icon: "currency_exchange", title: "Đơn vị tiền tệ", value: "USD" },
        { icon: "groups", title: "Mật độ dân số", value: "37 người/km2 (2023)" },
        { icon: "flight_takeoff", title: "Thời gian bay từ Việt Nam", value: "16 giờ - 21 giờ" },
        { icon: "public", title: "Xếp hạng tổng diện tích quốc gia", value: "Top 4 (9,372,610 km2)" },
        { icon: "savings", title: "Xếp hạng tổng tài sản quốc gia", value: "Top 1 ($26,185.210B) (2023)" },
        { icon: "volunteer_activism", title: "Xếp hạng chính sách phúc lợi xã hội", value: "Top 25 (84,65 điểm)" },
        { icon: "diamond", title: "Xếp hạng mức độ giàu có", value: "Top 7 ($80,034.581) (2023)" },
        { icon: "school", title: "Xếp hạng giáo dục", value: "Top 1/78" },
        { icon: "medical_services", title: "Xếp hạng y tế", value: "Top 30 thế giới" },
        { icon: "diversity_3", title: "Tỷ lệ dân nhập cư", value: "13.6% dân số (2021)" },
        { icon: "shield", title: "Mức độ an toàn và hoà nhập xã hội", value: "Top 59/163" },
        { icon: "pie_chart", title: "Hạn ngạch 2023", value: "226,000 đối với diện gia đình bảo trợ. 140,000 đối với diện việc làm" },
        { icon: "payments", title: "Sinh hoạt phí", value: "Top 8/74. Khoảng $5,799 USD/ tháng cho gia đình (4 người). $3,468 USD/ tháng cho cá nhân" },
        { icon: "thermostat", title: "Khí hậu", value: "Ôn đới ở đa số vùng, nhiệt đới ở số vùng phía Nam. Nhiệt độ cao nhất: 40°C. Thấp nhất: -50°C." },
      ],
      benefits: {
        col1: {
          title: "LỢI ÍCH CỦA THẺ THƯỜNG TRÚ NHÂN - HỘ CHIẾU MỸ",
          items: [
            "Nộp đơn xin nhập quốc tịch Mỹ",
            "Được bảo lãnh thân nhân",
            "Ra vào Mỹ không giới hạn số lần và không cần visa",
            "Miễn học phí trường công từ tiểu học đến trung học, học phí đại học và cao học bằng 1/3 so với du học sinh",
            "Sinh viên được Chính phủ Mỹ cho mượn tiền không lãi (hoặc lãi rất thấp) dài hạn để đóng học phí",
            "Xin hưởng tiền An Sinh Xã Hội (Social Security), tiền Phụ Cấp Bệnh tật SSI và tiền trợ cấp chăm sóc Y tế (Medicare)..."
          ]
        },
        col2: {
          title: "VÌ SAO LỰA CHỌN ĐẦU TƯ - KINH DOANH & ĐỊNH CƯ MỸ?",
          items: [
            "Nền kinh tế lớn – cường quốc số 1 thế giới",
            "Nhiều chính sách ưu đãi cho các doanh nghiệp nước ngoài đến định cư Mỹ",
            "Thủ tục xét duyệt nhanh chóng",
            "Được hoàn trả 100% khoản đầu tư nếu nhà đầu tư nhận được thẻ Thường Trú Nhân",
            "Dễ dàng mở rộng kinh doanh, hợp tác quốc tế"
          ]
        },
        col3: {
          title: "VÌ SAO LỰA CHỌN LÀM VIỆC TẠI MỸ?",
          items: [
            "Thị trường lao động sôi động, đa dạng văn hoá",
            "Phúc lợi tốt cho học sinh, sinh viên (được miễn giảm học phí)",
            "Được bảo vệ khi ở nước ngoài",
            "Được hưởng trợ cấp xã hội, hỗ trợ y tế",
            "Không bị ảnh hưởng bởi các điều luật nhập cư được ban hành sau đó"
          ]
        }
      }
    },
    en: {
      title: "US Immigration",
      intro: "With top-tier visa power and English as the primary language, the US becomes an unmissable 'destination'. With cultural and social diversity, the US is always a famous immigration destination. The US government is also fully supporting global citizens with various policies.",
      facts: [
        { icon: "branding_watermark", title: "Passport Power", value: "Top 5 globally, visa-free to 173 countries (passport index 09/2023)" },
        { icon: "currency_exchange", title: "Currency", value: "USD" },
        { icon: "groups", title: "Population Density", value: "37 people/km2 (2023)" },
        { icon: "flight_takeoff", title: "Flight Time from Vietnam", value: "16 hours - 21 hours" },
        { icon: "public", title: "Total National Area Rank", value: "Top 4 (9,372,610 km2)" },
        { icon: "savings", title: "Total National Wealth Rank", value: "Top 1 ($26,185.210B) (2023)" },
        { icon: "volunteer_activism", title: "Social Welfare Policy Rank", value: "Top 25 (84.65 points)" },
        { icon: "diamond", title: "Wealth Level Rank", value: "Top 7 ($80,034.581) (2023)" },
        { icon: "school", title: "Education Rank", value: "Top 1/78" },
        { icon: "medical_services", title: "Healthcare Rank", value: "Top 30 globally" },
        { icon: "diversity_3", title: "Immigrant Ratio", value: "13.6% of population (2021)" },
        { icon: "shield", title: "Safety & Social Inclusion", value: "Top 59/163" },
        { icon: "pie_chart", title: "2023 Quota", value: "226,000 for family sponsorship. 140,000 for employment." },
        { icon: "payments", title: "Cost of Living", value: "Top 8/74. Approx $5,799 USD/month for family (4). $3,468 USD/month for individual." },
        { icon: "thermostat", title: "Climate", value: "Temperate in most areas, tropical in some Southern areas. Max temp: 40°C. Min temp: -50°C." },
      ],
      benefits: {
        col1: {
          title: "BENEFITS OF PERMANENT RESIDENT CARD - US PASSPORT",
          items: [
            "Apply for US citizenship",
            "Sponsor relatives",
            "Enter/Exit US unlimited times without visa",
            "Free public school tuition from elementary to high school, university/grad tuition 1/3 of international students",
            "Students can borrow long-term interest-free (or low interest) money from US Gov for tuition",
            "Apply for Social Security, SSI, and Medicare... if eligible"
          ]
        },
        col2: {
          title: "WHY CHOOSE INVESTMENT - BUSINESS & IMMIGRATION IN US?",
          items: [
            "Large economy – World's #1 superpower",
            "Many preferential policies for foreign businesses immigrating to US",
            "Fast processing procedures",
            "100% investment refund if investor receives Permanent Resident Card",
            "Easy to expand business, international cooperation"
          ]
        },
        col3: {
          title: "WHY CHOOSE TO WORK IN THE US?",
          items: [
            "Vibrant labor market, diverse culture",
            "Good benefits for students (tuition reduction/exemption)",
            "Protected when abroad",
            "Enjoy social welfare, medical support",
            "Not affected by immigration laws enacted afterwards"
          ]
        }
      }
    },
    cn: {
      title: "美国移民",
      intro: "凭借顶级的签证实力和英语作为主要语言，美国成为了不可错过的“目的地”。凭借文化和社会的多样性，美国一直是一个著名的移民目的地。美国政府也在通过各种政策全力支持全球公民。",
      facts: [
        { icon: "branding_watermark", title: "护照实力", value: "全球前5，免签173个国家（2023年9月护照指数）" },
        { icon: "currency_exchange", title: "货币单位", value: "美元 (USD)" },
        { icon: "groups", title: "人口密度", value: "37人/平方公里 (2023)" },
        { icon: "flight_takeoff", title: "从越南飞行时间", value: "16小时 - 21小时" },
        { icon: "public", title: "国家总面积排名", value: "前4 (9,372,610 平方公里)" },
        { icon: "savings", title: "国家总财富排名", value: "前1 ($26,185.210B) (2023)" },
        { icon: "volunteer_activism", title: "社会福利政策排名", value: "前25 (84.65分)" },
        { icon: "diamond", title: "财富水平排名", value: "前7 ($80,034.581) (2023)" },
        { icon: "school", title: "教育排名", value: "前1/78" },
        { icon: "medical_services", title: "医疗排名", value: "全球前30" },
        { icon: "diversity_3", title: "移民比例", value: "人口的13.6% (2021)" },
        { icon: "shield", title: "安全与社会包容度", value: "前59/163" },
        { icon: "pie_chart", title: "2023年配额", value: "家庭担保226,000。就业移民140,000。" },
        { icon: "payments", title: "生活成本", value: "前8/74。家庭(4人)约$5,799/月。个人$3,468/月。" },
        { icon: "thermostat", title: "气候", value: "大部分地区温带，南部部分地区热带。最高温：40°C。最低温：-50°C。" },
      ],
      benefits: {
        col1: {
          title: "永久居民卡 - 美国护照的好处",
          items: [
            "申请美国国籍",
            "担保亲属",
            "无限次进出美国，无需签证",
            "公立中小学免学费，大学及研究生学费仅为留学生的三分之一",
            "学生可向美国政府申请长期无息（或极低利息）贷款缴纳学费",
            "如符合条件，可申请社会保障金、SSI及医疗保险(Medicare)..."
          ]
        },
        col2: {
          title: "为什么选择在美国投资 - 商业和定居？",
          items: [
            "庞大的经济体 – 世界第一强国",
            "对移民美国的外国企业有许多优惠政策",
            "审批程序快",
            "如果投资者获得永久居民卡，投资款100%退还",
            "易于拓展业务，国际合作"
          ]
        },
        col3: {
          title: "为什么选择在美国工作？",
          items: [
            "充满活力的劳动力市场，多元文化",
            "对学生有良好福利（减免学费）",
            "在国外受保护",
            "享受社会福利，医疗支持",
            "不受随后颁布的移民法律影响"
          ]
        }
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section 
        className="relative h-[500px] flex items-end pb-12 justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550136513-548af4445338?q=80&w=2074&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-primary/90 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 rounded-sm">
             <img src="https://flagcdn.com/w40/us.png" alt="US Flag" className="w-5 h-3 object-cover"/>
             {currentContent.title}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tight max-w-2xl">
            {currentContent.title}
          </h1>
        </div>
      </section>

      {/* Intro Text */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
         <div className="container mx-auto px-6">
             <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
                 {currentContent.intro}
             </p>
         </div>
      </section>

      {/* Key Facts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {currentContent.facts.map((fact, idx) => (
                 <div key={idx} className="flex bg-bg-light rounded-lg overflow-hidden border border-gray-100 group hover:border-primary/50 transition-colors">
                     <div className="w-16 md:w-20 bg-[#8a6d3b] flex items-center justify-center shrink-0">
                         <span className="material-symbols-outlined text-3xl md:text-4xl text-white">
                             {fact.icon}
                         </span>
                     </div>
                     <div className="p-4 flex flex-col justify-center">
                         <h4 className="font-display text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">
                             {fact.title}
                         </h4>
                         <p className="font-sans text-sm md:text-base font-medium text-secondary">
                             {fact.value}
                         </p>
                     </div>
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* Benefits Section (Dark) */}
      <section 
        className="relative py-20 bg-secondary text-white overflow-hidden"
      >
        {/* Background Overlay Image */}
        <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1500514969900-348b67198893?q=80&w=2070&auto=format&fit=crop')",
            }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary opacity-80"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Column 1 */}
                <div className="group">
                    <h3 className="font-display text-xl font-bold mb-8 text-primary uppercase leading-snug border-l-4 border-primary pl-4">
                        {currentContent.benefits.col1.title}
                    </h3>
                    <ul className="space-y-4 font-sans text-sm md:text-base text-gray-300">
                        {currentContent.benefits.col1.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0 group-hover:bg-primary transition-colors"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 2 */}
                <div className="group">
                    <h3 className="font-display text-xl font-bold mb-8 text-primary uppercase leading-snug border-l-4 border-primary pl-4">
                        {currentContent.benefits.col2.title}
                    </h3>
                    <ul className="space-y-4 font-sans text-sm md:text-base text-gray-300">
                        {currentContent.benefits.col2.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0 group-hover:bg-primary transition-colors"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="group">
                    <h3 className="font-display text-xl font-bold mb-8 text-primary uppercase leading-snug border-l-4 border-primary pl-4">
                        {currentContent.benefits.col3.title}
                    </h3>
                    <ul className="space-y-4 font-sans text-sm md:text-base text-gray-300">
                        {currentContent.benefits.col3.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0 group-hover:bg-primary transition-colors"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default USImmigration;
