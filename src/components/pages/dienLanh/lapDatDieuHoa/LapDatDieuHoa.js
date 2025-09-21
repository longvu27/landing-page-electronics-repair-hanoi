import s from './lapDatDieuHoaStyle.module.scss';
import imgRepair from '@/assets/images/dien_lanh.jpg';
import imgLapDatDieuHoa from '@/assets/images/dienLanh/lap_dat_dieu_hoa.jpg';
import Image from 'next/image';

export default function LapDatDieuHoa() {
  return (
    <div className={s.wrapper}>
      {/* <div className={s.imgBanner}>
        <Image src={imgRepair} alt="Sửa chữa điện nước điện lạnh tại Hà Nội" />
      </div> */}
      <h1 className={s.titleH1}>Lắp đặt điều hòa tại Hà Nội</h1>
      <p>Khi bạn muốn chuyển, lắp đặt điều hòa tại Hà Nội mà bạn chưa biết đơn vị nào ở Hà Nội cung cấp dịch vụ, vui lòng nhấc máy gọi cho chúng tôi. Mọi vấn đề về  dịch vụ lắp đặt điều hòa tại Hà Nội của quý khách sẽ được giải quyết một cách nhanh chóng.</p>
      <p>Chúng tôi cung cấp dịch vụ rộng khắp trong khu vực tỉnh Hà Nội để phục vụ quý khách một cách tốt nhất, để giúp quý khách trải nghiệm dịch vụ của thợ sửa Hà Nội một cách hoàn hảo nhất</p>

      <p className={s.titleH2}>Vì sao quý khách lại chọn dịch vụ lắp đặt điều hòa tại Hà Nội của chúng tôi:</p>
      <ul>
        <li>Tư vấn viên làm việc 24/7 trong tất cả ngày kể cả ngày lể</li>
        <li>Nhân viên kỹ thuật am hiểu về nhiều loại dòng máy</li>
        <li>Tháo, lắp điều hòa nhanh chóng - thao tác chuyên nghiệp</li>
        <li>Đảm bảo thu hồi gas máy trước khi tháo</li>
        <li>Tư vấn khách hàng nơi chọn vị trí đặt cục nóng, cục lạnh tốt cho sức khỏe của quý khách</li>
        <li>Đúng giờ với quý khách hàng, để quý khách không phải tốn thời gian</li>
        <li>Các loại vật tư liên quan đến lắp, đặt có nguồn gốc rõ ràng, đạt tiêu chuẩn quy định của nhà máy</li>
        <li>Lắp đặt trong mọi địa thế vào đảm bảo an toàn lao động</li>
        <li>Giá vật tư lắp đặt rẻ nhất tại thị trường Hà Nội và cạnh tranh</li>
        <li>Quý khách tháo lắp sẽ được nhân viên kiểm tra,bảo dưỡng miễn phí</li>
        <li>Thao tác lắp đặt, vận chuyển nhẹ nhàng</li>
      </ul>
      <div className={s.imgRepair}>
        <Image src={imgLapDatDieuHoa} alt="Lắp đặt điều hoà tại Hà Nội" />
      </div>
      <p className={s.titleH2}>Quy trình làm việc tháo lắp điều tại Hà Nội của chúng tôi:</p>
      <p className={s.titleH3}>I. QUY TRINH THÁO ĐIỀU HÒA</p>
      <p>1. Bật máy kiểm tra hoạt động của thiết bị</p>
      <p>2. Tiến hành thu hồi gas cho điều hòa</p>
      <p>3. Ngắt nguồn điện, tháo rời nguồn điện, ống đồng cục nóng</p>
      <p>4. Tiến hành tháo dàn nóng, dàn lạnh, vào các thiết bị đi kèm</p>
      <p>5. Cuốn gọn ống đồng tránh tình trạng di chuyển gãy gập ống đồng</p>
      <p className={s.titleH3}>II. QUY TRÌNH LẮP ĐẶT ĐIỀU HÒA</p>
      <p>1. Bão dưỡng, vệ sinh trước khi lắp</p>
      <p>2. Tham khảo, tư vấn vị trí lắp đặt điều hòa tiện lợi nhất</p>
      <p>3. Tiến hành đo đạc, cân bằng lắp giá, treo mặt lạnh</p>
      <p>4. Tiến hành treo cục nóng</p>
      <p>5. Kết nối dây nguồn, ống đồng dàn lạnh với dàn nóng</p>
      <p>6. Hút chân không trước khi mở gas, cuốn lại băng trắng cho ống đồng</p>
      <p>7. Kiểm tra lại, vệ sinh khu vực chúng tôi làm việc</p>
      <p>8. Bật máy kiểm tra và bàn giao cho khách hàng nghiệm thu</p>

      <p>Quý khách có nhu cầu cung cấp dịch vụ xin vui lòng liên hệ hotline <span><a href="tel:0964701333">0964 701 333</a></span> với chúng tôi cam kết 100% hài lòng sau dịch vụ của chúng tôi</p>
    </div>
  )
}