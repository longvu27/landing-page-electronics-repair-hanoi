import Image from 'next/image';
import s from './homePageStyle.module.scss';
import imgRepair from '@/assets/images/dien_lanh.jpg';
import Link from 'next/link';

export default function HomePage() {

  return (
    <div className={s.wrapper}>
      <h1>Dịch vụ Điện Nước Điện Lạnh Tại Thanh Hoá</h1>
      <p>Dịch vụ sửa máy lạnh, tủ lạnh, máy lọc nước...</p>

      <Image src={imgRepair} alt="Sửa chữa điện nước điện lạnh tại Thanh Hoá" width={800} height={600} />

      <div >
        <h2>Dịch vụ của chúng tôi tại Thanh Hoá</h2>
        <h3>Dịch Vụ Điện Nước: sửa chữa máy lọc nước</h3>
        <h3>Sửa Điều Hoà Tại Nhà Thanh Hoá</h3>
        <h4>Sửa chữa Máy lạnh, bảo trì máy lạnh tại Thanh Hoá</h4>
        <h5>Sửa chữa Tủ lạnh, máy giặt tại Thanh Hoá</h5>
        <h6>Sửa chữa máy lọc nước tại Thanh Hoá</h6>
        <p>Tư vấn miễn phí, báo giá nhanh chóng </p>
      </div>

      <div>
        <p>
          Ngoài sửa điều hòa, chúng tôi còn cung cấp dịch vụ{' '}
          <Link href="/dien-nuoc">
            Sửa chữa điện nước Thanh Hóa
          </Link>
          {' '}với giá tốt nhất.
        </p>

        <p>
          Nếu bạn đang cần{' '}
          <Link href="/dien-lanh">
            Sửa chữa điện lạnh tại Thanh Hóa
          </Link>
          , chúng tôi luôn sẵn sàng phục vụ nhanh chóng.
        </p>
      </div>

      <div >
        <h2 >Liên hệ ngay</h2>
        <p>Hotline: <span >0901 234 567</span></p>
      </div>

      <div>
        <p>Dịch vụ Điện Nước Điện Lạnh Tại Thanh Hoá – Chuyên nghiệp, Uy tín và Giá cả Hợp lý</p>

        <p>Chúng tôi cung cấp dịch vụ sửa chữa điện nước điện lạnh chất lượng cao, với đội ngũ kỹ thuật viên có nhiều năm kinh nghiệm trong ngành. Các dịch vụ của chúng tôi bao gồm sửa chữa tủ lạnh, máy lạnh, máy giặt, tivi, lò vi sóng, máy điều hòa và các thiết bị điện lạnh khác. Dù bạn gặp vấn đề với thiết bị gia đình hay cần sửa chữa cho doanh nghiệp của mình, chúng tôi luôn sẵn sàng hỗ trợ nhanh chóng và hiệu quả.</p>

        <p>Chúng tôi cam kết mang lại cho bạn dịch vụ sửa chữa điện lạnh chất lượng nhất, với đội ngũ thợ sửa chữa lành nghề. Đặc biệt, chúng tôi cung cấp dịch vụ sửa chữa tại nhà, giúp bạn tiết kiệm thời gian và công sức. Dù bạn ở Quận 1, Quận 2, Quận 3, TP.HCM hay bất kỳ khu vực nào tại TP.HCM, chúng tôi sẽ đến tận nơi để kiểm tra và sửa chữa thiết bị điện lạnh của bạn.</p>

        <p>Dịch vụ sửa chữa điện lạnh của chúng tôi bao gồm:</p>

        <p>Sửa chữa tủ lạnh, từ việc không làm lạnh cho đến các lỗi nặng như tủ lạnh không xả tuyết, hỏng block.</p>

        <p>Sửa chữa máy lạnh, bao gồm các vấn đề như máy lạnh không mát, máy lạnh bị chảy nước, và các sự cố khác.</p>

        <p>Sửa chữa máy giặt, từ lỗi không vắt, không xả nước, đến các lỗi về động cơ.</p>

        <p> Sửa chữa thiết bị điện nước khác như tivi, lò vi sóng, quạt điện...</p>

        <p>Lý do chọn [Tên Công Ty]:
          Thợ kỹ thuật chuyên nghiệp: Chúng tôi có đội ngũ kỹ thuật viên giàu kinh nghiệm, luôn cập nhật kỹ thuật mới nhất trong ngành điện lạnh.</p>

        <p>Sửa chữa tận nhà: Tiết kiệm thời gian, không phải mang thiết bị đi xa.</p>

        <p>Phục vụ nhanh chóng: Chúng tôi cam kết có mặt tại nhà bạn chỉ trong vòng 30 phút sau khi nhận được yêu cầu.</p>

        <p>Giá cả hợp lý: Chúng tôi cung cấp dịch vụ sửa chữa chất lượng với giá cả cạnh tranh, không phát sinh chi phí bất ngờ.</p>

        <p>Bảo hành dài hạn: Mọi dịch vụ sửa chữa đều được bảo hành lên đến 12 tháng, giúp bạn yên tâm sử dụng.</p>

        <p>Cam kết của chúng tôi:
          An toàn và chất lượng: Mọi công việc sửa chữa đều được thực hiện theo đúng quy trình kỹ thuật, đảm bảo an toàn cho thiết bị và người sử dụng.</p>

        <p>Tiết kiệm chi phí: Chúng tôi luôn đưa ra giải pháp sửa chữa tối ưu, giúp bạn tiết kiệm chi phí sửa chữa, thay vì phải thay mới các linh kiện.</p>

        <p>Chất lượng dịch vụ vượt trội: Chúng tôi luôn nỗ lực để mang lại dịch vụ sửa chữa tốt nhất, đáp ứng mọi nhu cầu của khách hàng.</p>

        <p>Nếu bạn đang gặp sự cố với các thiết bị điện nước điện lạnh tại nhà hoặc văn phòng, đừng ngần ngại liên hệ ngay với chúng tôi. Gọi ngay để được tư vấn và nhận dịch vụ sửa chữa nhanh chóng, uy tín.</p>

        <p>Tại sao lựa chọn dịch vụ sửa chữa điện lạnh tại [Tên Công Ty]?</p>
        <p>Giải pháp tối ưu cho mọi sự cố điện lạnh: Với kiến thức chuyên sâu và kinh nghiệm lâu năm, chúng tôi tự tin cung cấp các giải pháp sửa chữa nhanh chóng và hiệu quả nhất cho mọi loại thiết bị điện lạnh.</p>

        <p>Dịch vụ sửa chữa tại nhà tiện lợi: Bạn không cần phải lo lắng về việc mang thiết bị đi sửa chữa. Chúng tôi sẽ đến tận nơi để kiểm tra và sửa chữa nhanh chóng.</p>

        <p>Giá cả phải chăng, bảo hành dài hạn: Với mức giá hợp lý, chúng tôi cam kết không phát sinh thêm chi phí, đồng thời bảo hành dài hạn cho mọi dịch vụ.</p>

        <p>Liên hệ ngay với chúng tôi qua số điện thoại [Số điện thoại] hoặc truy cập website của chúng tôi tại [URL website] để được hỗ trợ tốt nhất.</p>
      </div>
    </div>
  );
}