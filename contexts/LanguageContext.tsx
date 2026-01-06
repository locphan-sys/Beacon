
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'vi' | 'en' | 'cn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const translations = {
  vi: {
    common: {
      contact: "Liên Hệ",
      submit: "Gửi Yêu Cầu Ngay",
      namePlaceholder: "Họ tên của bạn",
      phonePlaceholder: "Số điện thoại",
      emailPlaceholder: "Email liên hệ",
      messagePlaceholder: "Lời nhắn của bạn...",
      programInterest: "— Quan tâm chương trình —",
      success: "Yêu cầu đã được gửi thành công! Cảm ơn Quý khách.",
      secureInfo: "Chúng tôi cam kết bảo mật tuyệt đối thông tin khách hàng",
      details: "CHI TIẾT"
    },
    header: {
      topBarText: "Tư vấn định cư các nước châu Âu - Mỹ - Á",
      schedule: "T2 - T6: 9:00 - 18:00",
      home: "Trang Chủ",
      about: "Giới Thiệu",
      programs: "Chương Trình Định Cư",
      news: "Tin Tức",
      contact: "Liên Hệ",
    },
    footer: {
       address: "97 Đặng Dung, Quận 1, TP HCM",
       businessCode: "Mã số doanh nghiệp: 0318107749 - Ngày cấp: 18/10/2023 - Sở KH&ĐT TPHCM",
       copyright: "© 2025 Beacon Immigration. All rights reserved."
    }
  },
  en: {
    common: {
      contact: "Contact",
      submit: "Submit Request",
      namePlaceholder: "Your Full Name",
      phonePlaceholder: "Phone Number",
      emailPlaceholder: "Email Address",
      messagePlaceholder: "Your message...",
      programInterest: "— Program of Interest —",
      success: "Request sent successfully! Thank you.",
      secureInfo: "We are committed to absolute confidentiality of customer information",
      details: "DETAILS"
    },
    header: {
      topBarText: "Immigration Consulting for Europe - USA - Asia",
      schedule: "Mon - Fri: 9:00 - 18:00",
      home: "Home",
      about: "About Us",
      programs: "Immigration Programs",
      news: "News",
      contact: "Contact",
    },
    footer: {
       address: "97 Dang Dung, District 1, HCMC",
       businessCode: "Business License: 0318107749 - Issued: 18/10/2023 - HCMC Dept of Planning & Investment",
       copyright: "© 2025 Beacon Immigration. All rights reserved."
    }
  },
  cn: {
    common: {
      contact: "联系我们",
      submit: "立即提交",
      namePlaceholder: "您的全名",
      phonePlaceholder: "电话号码",
      emailPlaceholder: "电子邮箱",
      messagePlaceholder: "您的留言...",
      programInterest: "— 感兴趣的项目 —",
      success: "请求已成功发送！谢谢。",
      secureInfo: "我们要对客户信息绝对保密",
      details: "详情"
    },
    header: {
      topBarText: "欧美亚移民咨询服务",
      schedule: "周一至周五: 9:00 - 18:00",
      home: "首页",
      about: "关于我们",
      programs: "移民项目",
      news: "新闻",
      contact: "联系我们",
    },
    footer: {
       address: "胡志明市第一郡邓勇街97号",
       businessCode: "营业执照: 0318107749 - 发证日期: 2023年10月18日 - 胡志明市计划投资厅",
       copyright: "© 2025 Beacon Immigration. 版权所有."
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
