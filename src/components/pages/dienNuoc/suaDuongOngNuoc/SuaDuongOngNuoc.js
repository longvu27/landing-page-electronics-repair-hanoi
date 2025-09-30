'use client'

import Image from 'next/image';
import s from './suaDuongOngNuocStyle.module.scss';
import suaDuongOngNuoc from '@/assets/images/dienNuoc/sua_duong_ong_nuoc.jpg';
import { trackingCallNow } from '@/src/service/tracking';

export default function SuaDuongOngNuoc() {

  return (
    <div className={s.wrapper}>
      <h1 className={s.titleH1}>Dịch Vụ Sửa Chữa Vỡ Đường Ống Nước</h1>
      <p className={s.italic}>
        Vỡ đường uống nước là sự cố rất dễ xảy ra trong nhà nếu không biết cách sửa chữa sẽ gây ra rất nhiều phiền toái cho gia đình bạn.
        <br />
        Dưới đây là các vấn đề thường xuyên gặp phải và cần gọi thợ sửa chữa mới trị được
      </p>

      <div className={s.imgRepair}>
        <Image src={suaDuongOngNuoc} alt="Sửa chữa đường ống nước tại Hà Nội" />
      </div>

      <h2 className={s.titleH2}>Nguyên Nhân Vỡ Đường Ống Nước</h2>
      <ul style={{ listStyle: 'auto' }}>
        <li>Do việc đục khoan, đóng đinh hoặc tác động một lực mạnh lên tường đúng vào đoạn đường ống nước</li>
        <li>Do các đoạn ren lâu ngày bị rỉ, méo và không chịu được áp lực của nước</li>
        <li>Đường ống nước bị oxy hóa dẫn tới nứt, vỡ</li>
        <li>Các chất kim loại rắn sau 1 thời gian dài tích tụ dẫn tới việc ăn mòn đường ống nước</li>
      </ul>

      <p className={s.titleH2}>Vì Sao Nên Lựa Chọn Dịch Vụ Sửa Chữa Vỡ Đường Ống Nước Của Chúng Tôi</p>
      <p>Với hàng chục cửa hàng trên toàn thành phố Hà Nội và đội ngũ nhân viên 12 năm kinh nghiệm, chúng tôi là thương hiệu hàng đầu trong ngành sửa chữa ống nước</p>
      <ul>
        <li>Đến ngay sau 15 phút, hỗ trợ 24/7</li>
        <li>Bảo hành 12 tháng kể từ ngày sửa chữa</li>
        <li>Linh kiện thay thế chính hãng 100%</li>
        <li>Giá cả cạnh tranh và luôn là rẻ nhất so với thị trường</li>
        <li>Chỉ lấy tiền khi khách hàng nghiệm thu xong</li>
      </ul>

      <p className={s.titleH2}>Quy trình sửa chữa máy bơm nước của chúng tôi</p>
      <ul style={{ listStyle: 'auto' }}>
        <li>Tiếp nhận yêu cầu của khách hàng</li>
        <li>Đến nhà kiểm tra tình trạng máy bơm nước, đưa ra phương án và chi phí sửa chữa</li>
        <li>Nếu khách hàng đồng ý thì mới bắt đầu sửa</li>
        <li>Nghiệm thu và tiến hành chạy thử</li>
        <li>Thanh toán và viết giấy bảo hành</li>
      </ul>

      <p>Nếu có bất kỳ vấn đề gì về các thiết bị điện nước trong gia đình bạn, hãy gọi cho chúng tôi theo Hotline: <span><a href="tel:0964701333" onClick={trackingCallNow}>0964 701 333</a></span> bất kể khi nào bạn cần. Hoặc nhấn vào nút gọi / chat zalo ngay trên trang web</p>
      <p>Liên hệ ngay với chúng tôi qua số điện thoại  để được hỗ trợ tốt nhất.</p>
    </div>
  )
}