import Image from 'next/image';
import s from './suaMayBomNuocStyle.module.scss';
import suaMayBomNuoc from '@/assets/images/dienNuoc/sua_may_bom_nuoc.jpg';

export default function SuaMayBomNuoc() {

  return (
    <div className={s.wrapper}>
      <h1 className={s.titleH1}>Sửa chữa máy bơm nước giá rẻ, uy tín tại Hà Nội</h1>
      <p className={s.italic}>
        Máy bơm nước là vật dụng không thể thiếu của mỗi gia đình vì vậy khi xảy ra sự cố sẽ ảnh hưởng rất nhiều đến việc sinh hoạt chung.
        <br />
        Dưới đây là các vấn đề  thường xuyên gặp phải và cần phải gọi thợ sửa chữa mới trị được
      </p>

      <div className={s.imgRepair}>
        <Image src={suaMayBomNuoc} alt="Sửa chữa máy bơm nước tại Hà Nội" />
      </div>

      <h2 className={s.titleH2}>6 Dấu Hiệu Nhận Biết Nên Sửa Máy Bơm Nước Ngay!</h2>
      <ul style={{ listStyle: 'auto' }}>
        <li>Máy bơm nước  không chạy dù đã cắm điện vào</li>
        <li>Máy bơm bị rò ri nước khi chạy</li>
        <li>Máy bơm bị cháy, có mùi khét</li>
        <li>Đang dùng thì kêu to bất thường và có mùi khét</li>
        <li>Bị cháy cánh quạt, gãy phốt</li>
        <li> Máy bị hỏng phao điện, hỏng tụ</li>
      </ul>

      <p className={s.titleH2}>Vì Sao Nên Lựa Chọn Dịch Vụ Sửa Chữa Máy Bơm Nước Của Chúng Tôi</p>
      <p>Với hàng chục cửa hàng trên toàn thành phố Hà Nội và đội ngũ nhân viên 12 năm kinh nghiệm, chúng tôi là thương hiệu hàng đầu trong ngành sửa chữa máy bơm nước</p>
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