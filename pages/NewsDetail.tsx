import React from "react";
import { Link } from "react-router-dom";

const NewsDetail: React.FC = () => {
  return (
    <div className="px-4 py-10 sm:px-10 lg:px-20 bg-bg-light">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 pb-4 text-sm font-medium">
          <Link
            to="/"
            className="text-[#8a8060] hover:text-primary transition-colors"
          >
            Trang chủ
          </Link>
          <span className="text-[#8a8060]">/</span>
          <Link
            to="/news"
            className="text-[#8a8060] hover:text-primary transition-colors"
          >
            Tin tức
          </Link>
          <span className="text-[#8a8060]">/</span>
          <span className="text-text-main">Cuộc sống ở Georgia</span>
        </div>

        {/* Title & Meta */}
        <h1 className="text-text-main tracking-tight text-3xl sm:text-4xl font-bold leading-tight text-left pb-2 pt-4 font-display">
          Cuộc sống ở Mỹ - Đời sống tại tiểu bang Georgia
        </h1>
        <p className="text-[#8a8060] text-sm font-normal leading-normal pb-6 pt-1 font-sans">
          Published on August 15, 2024 by Admin
        </p>

        {/* Hero Image */}
        <div
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-80 sm:min-h-[400px] mb-8"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3tvfj_q4s9eybV9hKLyKkTHrJFdPsYEz5u91fvSJ7ajnurg7chC4tXu5r0Ezx2dUITm2BhR21KXw8fr6HHnewr6TJLKju8ca8kl5sIe5YLytG9kyM4oIGPAj3ILCULUDqp1HF6f6rjdai6ypKYxbTMoMHs_k6fM-xBRjFND2NYJqREAFMfBHEEFpL9eTUPidUioia8lO5xvudJHs665NVduB8yn_Vd7oQbPsnl_dv6tl7sRvP_mXqoYlB7Nvf3dooBZURjhO5nKhS")',
          }}
        ></div>

        {/* Content */}
        <article className="prose prose-lg max-w-none text-[#5D4037] space-y-6 font-sans">
          <p className="text-lg font-medium text-text-main">
            Georgia, được biết đến với biệt danh "Peach State", không chỉ nổi
            tiếng với những quả đào ngon ngọt mà còn là một điểm đến hấp dẫn cho
            người nhập cư từ khắp nơi trên thế giới, bao gồm cả cộng đồng người
            Việt. Với chi phí sinh hoạt phải chăng, khí hậu ôn hòa và một cộng
            đồng người Việt vững mạnh, Georgia đang dần trở thành lựa chọn hàng
            đầu cho những ai tìm kiếm một cuộc sống mới tại Mỹ.
          </p>

          <h2 className="text-text-main font-bold text-xl font-display">
            1. Cuộc sống ở bang Georgia – Khí hậu và môi trường sống
          </h2>
          <p>
            Georgia có khí hậu cận nhiệt đới ẩm, với mùa hè nóng và ẩm, mùa đông
            ôn hòa và ngắn. Điều này tạo điều kiện thuận lợi cho các hoạt động
            ngoài trời quanh năm. Bang cũng sở hữu cảnh quan thiên nhiên đa dạng,
            từ dãy núi Blue Ridge ở phía bắc đến các bãi biển xinh đẹp ở bờ biển
            Đại Tây Dương, mang lại nhiều cơ hội khám phá và giải trí cho cư dân.
          </p>

          <h2 className="text-text-main font-bold text-xl font-display">
            2. Chi phí sinh hoạt – Điểm cộng lớn của cuộc sống ở Mỹ tại Georgia
          </h2>
          <p>
            So với các tiểu bang lớn khác như California hay New York, chi phí
            sinh hoạt tại Georgia thấp hơn đáng kể. Giá nhà ở, thực phẩm, và các
            dịch vụ khác đều ở mức hợp lý, giúp người dân, đặc biệt là người mới
            nhập cư, dễ dàng ổn định cuộc sống và tiết kiệm được một khoản chi
            phí đáng kể.
          </p>

          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-80"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpePgdc0ymu6yrJIVHOg5r9Adm_uawamqOeQPqIbmpqeKqM4e1sQdSaPss5aA8_Hzfbgf1v771OpzBw37AB-DHqhRzxDMbKtOS4xExqsqCfnV_S2yDdHpQPRmLzyw10m2zwJarX63wjBHrII3GqfevlN7gAkdS0tlHFJmS1qjogVIu_easmmr2dFtISLUivq9tAGGue5os2-K1CBKs744bB1Cd_nKJyVKnb-RfrwHwwQd0XDckCOA-pdaUXh8YyPIfYQD6eeGOOa9w")',
            }}
          ></div>

          <h2 className="text-text-main font-bold text-xl font-display">
            3. Đời sống cộng đồng – Người Việt tại Georgia sống ra sao?
          </h2>
          <p>
            Cộng đồng người Việt tại Georgia, tập trung chủ yếu ở khu vực
            Atlanta, rất phát triển và gắn kết. Có nhiều khu chợ, nhà hàng, và
            chùa chiền Việt Nam, tạo nên một không gian văn hóa quen thuộc và ấm
            cúng. Các tổ chức cộng đồng thường xuyên tổ chức các sự kiện văn hóa,
            lễ hội, giúp mọi người kết nối và hỗ trợ lẫn nhau trong cuộc sống.
          </p>

          <h2 className="text-text-main font-bold text-xl font-display">
            4. Vì sao Georgia phù hợp với lao động EB3?
          </h2>
          <p>
            Georgia là một trung tâm kinh tế đang phát triển mạnh mẽ, với nhiều
            cơ hội việc làm trong các ngành công nghiệp như sản xuất, dịch vụ, và
            nông nghiệp. Điều này tạo điều kiện thuận lợi cho lao động theo diện
            visa EB-3. Mức lương cạnh tranh cùng với chi phí sinh hoạt thấp giúp
            người lao động có thể tích lũy và xây dựng một tương lai vững chắc
            cho gia đình.
          </p>

          <h2 className="text-text-main font-bold text-xl font-display">
            5. Job EB3 – Chuỗi cửa hàng thức ăn nhanh tại Georgia
          </h2>
          <p>
            Chúng tôi hiện đang có nhiều cơ hội việc làm tại các chuỗi cửa hàng
            thức ăn nhanh hàng đầu tại Georgia. Công việc ổn định, môi trường làm
            việc chuyên nghiệp và cơ hội thăng tiến rõ ràng. Đây là một bước khởi
            đầu tuyệt vời cho những ai muốn bắt đầu cuộc sống mới tại Mỹ thông
            qua chương trình EB-3.
          </p>

          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-text-main text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity no-underline font-display mt-8">
            <span className="truncate">Tìm hiểu thêm</span>
          </button>
        </article>

        {/* Share Section */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center font-semibold text-text-main mb-4 font-display">
            Share this article
          </p>
          <div className="flex justify-center gap-4">
            {["facebook", "twitter", "linkedin"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-full text-primary hover:bg-primary hover:text-text-main transition-colors"
              >
                <img
                  src={
                    platform === "facebook"
                      ? "https://lh3.googleusercontent.com/aida-public/AB6AXuCnGI7dYElvGuBVbDNCt_nsQbDYNG4QSZkCTiDrfql1fPghLSQvh2yFeRmoil6JDnZWh3AN64TPk_tu-OI2ZYTehyFBqYmwGmDA7RWF0fkm1NShiV_YIO9adLfCKmn3opvZyGwfP3mrMLwIO6f5i555JnHVy0st8OP4Vum242l8C08FNGAnXmqL7gzaJxfgsucl5T6mgylDZKVodk41_YGAW2HbImeBNL6MfQcOWYQR94y31thmHOMsfLiegwohy-HWF9fp3G0xMBkP"
                      : platform === "twitter"
                      ? "https://lh3.googleusercontent.com/aida-public/AB6AXuC5Gsy6hPUy9dNk-BgfdpCUfRnmM6jSPYeGuVPvKMB0wNP3bI2FIMevjxRfx3intzgc3fMWi2yKHT4J-2VOPZSiqyNnl6MvuNzfgrbkTA76BR1PMfzDOqB28OiYrEv3Qgctwgs2qUJK9wpZbAOYM4gY7nIhVbrH6cvNgQzlNSS8sHbzMiQOXaZ543fxSMp6HRDbIjt1aG2_XneU_9QIcqh-w-lq_92GikhNqZ6z2gZ4LusYvOrWTCg9h5lFrivPEFsYQ3ps014uGAro"
                      : "https://lh3.googleusercontent.com/aida-public/AB6AXuA10qieU7QtLfayanFjQUhkUY4ZrczvLS6mb0pOJmw38gRUXOXNbGcRaElSg1rmR30In5hm3LOoxi2rNLEG1K0gF2bSSQGsWzM5Srx_19hWZBc9zIqbu3vH_aM4bWfJ2wpv8cC3cRp4PMQuvaO-MEp_Fh2r4Hux8gOy62dqsVQSsipaEKir6XafGrmqv9S4XrkW8V1gizHHcK9ZxguPg3JSVhFVV-_0UhX8CcZO-spaMUotjg4141YlFR_-SzoOS0DxV3x3HCuM-gKJ"
                  }
                  alt={platform}
                  className="w-5 h-5 object-contain opacity-70 hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
