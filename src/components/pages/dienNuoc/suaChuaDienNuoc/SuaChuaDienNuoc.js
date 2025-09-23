import s from './suaChuaDienNuocStyle.module.scss';
import Image from 'next/image';
import suaChuaDienNuoc from '@/assets/images/dienNuoc/sua_chua_dien_nuoc.jpg';

export default function SuaChuaDienNuoc() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.titleH1}>Dịch Vụ Sửa Chữa Điện Nước Từ A - Z tại Hà Nội</h1>
      <p className={s.italic}>
        Sau 1 thời gian sử dụng, căn nhà của bạn chắc chắn không tránh khỏi việc hư hỏng về điện nước, hiểu được tâm lý đó, chúng tôi đã và đang cung cấp các gói dịch vụ sửa chữa bảo dưỡng điện nước từ A - Z mang tới sự tiện lợi và hài lòng cho khách hàng
      </p>

      <div className={s.imgRepair}>
        <Image src={suaChuaDienNuoc} alt="Sửa chữa điện nước tại Hà Nội" />
      </div>

      <h2 className={s.titleH2}>Dưới đây là các dịch vụ mà khách hàng thường xuyên gặp phải và cần gọi thợ sửa chữa mới trị được</h2>
      <ul>
        <li><span>Sửa máy bơm nước</span>: sửa máy bơm không lên, bị cháy, quấn lại máy bơm hỏng, sửa máy bơm bị vỡ ống nước, không lên nước, lắp đặt máy bơm nước mới</li>
        <li><span>Đường ống nước: </span>sửa đường ống nước sinh hoạt, ống nước âm tường…</li>
        <li><span>Sửa máy lọc nước</span>: máy không vào điện, không ra nước, thay lõi lọc, máy bị khét, rỉ nước ra ngoài</li>
        <li><span>Nhà tắm:</span> sửa vòi nước từ chậu rửa mặt, chậu rửa bát bị tắc, rò rỉ nước, bị bốc mùi…</li>
        <li><span>Thông tắc cống:</span> thông tắc chậu rửa mặt, bồn cầu, thông tắc chậu rửa bát…</li>
      </ul>


      <p className={s.titleH2}>Vì Sao Nên Lựa Chọn Dịch Vụ Sửa Chữa Điện Nước Của Chúng Tôi</p>
      <p>Với hàng chục cửa hàng trên toàn thành phố Hà Nội và đội ngũ nhân viên 12 năm kinh nghiệm, chúng tôi là thương hiệu hàng đầu trong ngành sửa chữa điện nước</p>
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

      <p>Nếu có bất kỳ vấn đề gì về các thiết bị điện nước trong gia đình bạn, hãy gọi cho chúng tôi theo Hotline: <span><a href="tel:0964701333">0964 701 333</a></span> bất kể khi nào bạn cần. Hoặc nhấn vào nút gọi / chat zalo ngay trên trang web</p>
      <p>Liên hệ ngay với chúng tôi qua số điện thoại  để được hỗ trợ tốt nhất.</p>
    </div>
  )
}