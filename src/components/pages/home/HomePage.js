import Image from 'next/image';
import s from './homePageStyle.module.scss';
import imgRepair from '@/assets/images/dien_lanh.jpg';
import Link from 'next/link';
import suaDieuHoa from '@/assets/images/home/sua_dieu_hoa.png';
import suaMayGiat from '@/assets/images/home/sua_may_giat.png';
import suaMayLocNuoc from '@/assets/images/home/sua_may_loc_nuoc.png';
import img_card_ve_sinh_may_giat from '@/assets/images/dienNuoc/ve_sinh_may_giat.jpeg';
import img_card_sua_may_loc_nuoc from '@/assets/images/dienNuoc/sua_may_loc_nuoc.jpg';
import img_card_sua_binh_nong_lanh from '@/assets/images/dienNuoc/sua_binh_nong_lanh.jpg';
import img_card_lap_dat_dieu_hoa from '@/assets/images/dienLanh/lap_dat_dieu_hoa.jpg';
import img_card_sua_chua_tu_lanh from '@/assets/images/dienLanh/sua_chua_tu_lanh.jpg';
import img_card_ve_sinh_dieu_hoa from '@/assets/images/dienLanh/ve_sinh_dieu_hoa.jpg';

import img_binh_nong_lanh from '@/assets/images/home/binh_nong_lanh.jpg';
import img_dieu_hoa from '@/assets/images/home/dieu_hoa.webp';
import img_may_giat from '@/assets/images/home/may_giat.webp';
import img_may_loc_nuoc from '@/assets/images/home/may_loc_nuoc.webp';
import img_may_phat_dien from '@/assets/images/home/may_phat_dien.jpg';
import img_tu_lanh from '@/assets/images/home/tu_lanh.webp';

export default function HomePage() {

  const dataCardBlog = [
    {
      title: 'Vệ sinh máy giặt',
      img: img_card_ve_sinh_may_giat,
      link: '/dien-nuoc/ve-sinh-may-giat',
    },
    {
      title: 'Sửa máy lọc nước',
      img: img_card_sua_may_loc_nuoc,
      link: '/dien-nuoc/sua-may-loc-nuoc',
    },
    {
      title: 'Sửa bình nóng lạnh',
      img: img_card_sua_binh_nong_lanh,
      link: '/dien-nuoc/sua-binh-nong-lanh',
    },
    {
      title: 'Lắp đặt điều hoà',
      img: img_card_lap_dat_dieu_hoa,
      link: '/dien-lanh/lap-dat-dieu-hoa',
    },
    {
      title: 'Sửa chữa tủ lạnh',
      img: img_card_sua_chua_tu_lanh,
      link: '/dien-lanh/sua-chua-tu-lanh',
    },
    {
      title: 'Vệ sinh điều hoà',
      img: img_card_ve_sinh_dieu_hoa,
      link: '/dien-lanh/ve-sinh-dieu-hoa',
    },
  ]

  const dataProduct = [
    {
      title: 'Bình nóng lạnh',
      img: img_binh_nong_lanh,
    },
    {
      title: 'Điều hoà',
      img: img_dieu_hoa,
    },
    {
      title: 'Máy giặt',
      img: img_may_giat,
    },
    {
      title: 'Máy lọc nước',
      img: img_may_loc_nuoc,
    },
    {
      title: 'Tủ lạnh',
      img: img_tu_lanh,
    },
    {
      title: 'Máy phát điện',
      img: img_may_phat_dien,
    },
  ]

  return (
    <div className={s.wrapper}>
      <div className={s.imgBanner}>
        <Image
          src={imgRepair}
          alt="Sửa chữa điện nước điện lạnh tại Thanh Hoá"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>
      <h1 className={s.titleH1}>Dịch vụ Điện Nước Điện Lạnh Tại Thanh Hoá</h1>
      <div className={s.service}>
        <h2>Dịch vụ của chúng tôi tại Thanh Hoá</h2>
        <ul>
          <li><h3>Dịch Vụ Điện Nước: sửa chữa máy bơm, máy lọc nước</h3></li>
          <li><h3>Dịch Vụ Điện Lạnh: sửa Điều Hoà Tại Nhà Thanh Hoá</h3></li>
          <li><h4>Sửa chữa Máy lạnh, bảo trì máy lạnh tại Thanh Hoá</h4></li>
          <li><h5>Sửa chữa Tủ lạnh, máy giặt tại Thanh Hoá</h5></li>
          <li><h6>Tư vấn miễn phí, báo giá nhanh chóng </h6></li>
        </ul>
      </div>

      <div className={s.content}>
        <p className={s.titleH2}>Dịch vụ Điện Nước Điện Lạnh Tại Thanh Hoá – Chuyên nghiệp, Uy tín và Giá cả Hợp lý</p>

        <p>Chúng tôi cung cấp dịch vụ sửa chữa điện nước điện lạnh chất lượng cao, với đội ngũ kỹ thuật viên có nhiều năm kinh nghiệm trong ngành. Các dịch vụ của chúng tôi bao gồm sửa chữa tủ lạnh, máy lạnh, máy giặt, tivi, lò vi sóng, máy điều hòa và các thiết bị điện lạnh khác. Dù bạn gặp vấn đề với thiết bị gia đình hay cần sửa chữa cho doanh nghiệp của mình, chúng tôi luôn sẵn sàng hỗ trợ nhanh chóng và hiệu quả.</p>

        <p>Chúng tôi cam kết mang lại cho bạn dịch vụ sửa chữa điện lạnh chất lượng nhất, với đội ngũ thợ sửa chữa lành nghề. Đặc biệt, chúng tôi cung cấp dịch vụ sửa chữa tại nhà, giúp bạn tiết kiệm thời gian và công sức. Dù bạn ở bất kỳ khu vực nào tại Thanh Hoá, chúng tôi sẽ đến tận nơi để kiểm tra và sửa chữa thiết bị điện lạnh của bạn.</p>

        <div className={s.listImg}>
          <div className={s.img}>
            <Image src={suaDieuHoa} alt='sửa chữa điều hoà' />
          </div>
          <div className={s.img}>
            <Image src={suaMayGiat} alt='sửa chữa máy giặt' />
          </div>
          <div className={s.img}>
            <Image src={suaMayLocNuoc} alt='sửa chữa máy lọc nước' />
          </div>
        </div>

        <p className={s.titleH3}>Dịch vụ sửa chữa điện lạnh của chúng tôi bao gồm:</p>

        <ul>
          <li>
            <p><span>Sửa chữa tủ lạnh:</span> từ việc không làm lạnh cho đến các lỗi nặng như tủ lạnh không xả tuyết, hỏng block.</p>
          </li>
          <li>
            <p><span>Sửa chữa máy lạnh:</span> bao gồm các vấn đề như máy lạnh không mát, máy lạnh bị chảy nước, và các sự cố khác.</p>
          </li>
          <li>
            <p><span>Sửa chữa máy giặt:</span> từ lỗi không vắt, không xả nước, đến các lỗi về động cơ.</p>
          </li>
          <li><p><span>Sửa chữa thiết bị điện nước khác như:</span> tivi, lò vi sóng, quạt điện...</p></li>
          <li>
            <p><span>Sửa chữa tận nhà:</span> Tiết kiệm thời gian, không phải mang thiết bị đi xa.</p>
          </li>
          <li>
            <p><span>Phục vụ nhanh chóng:</span> Chúng tôi cam kết có mặt tại nhà bạn chỉ trong vòng 30 phút sau khi nhận được yêu cầu.</p>
          </li>
          <li>
            <p><span>Giá cả hợp lý:</span> Chúng tôi cung cấp dịch vụ sửa chữa chất lượng với giá cả cạnh tranh, không phát sinh chi phí bất ngờ.</p>
          </li>
          <li><p><span>Bảo hành dài hạn:</span> Mọi dịch vụ sửa chữa đều được bảo hành lên đến 12 tháng, giúp bạn yên tâm sử dụng.</p></li>
          <li>
            <p><span>Cam kết của chúng tôi: </span>
              <br />
              An toàn và chất lượng: Mọi công việc sửa chữa đều được thực hiện theo đúng quy trình kỹ thuật, đảm bảo an toàn cho thiết bị và người sử dụng.</p>
          </li>
          <li>
            <p><span>Tiết kiệm chi phí:</span> Chúng tôi luôn đưa ra giải pháp sửa chữa tối ưu, giúp bạn tiết kiệm chi phí sửa chữa, thay vì phải thay mới các linh kiện.</p>
          </li>
          <li>
            <p><span>Chất lượng dịch vụ vượt trội:</span> Chúng tôi luôn nỗ lực để mang lại dịch vụ sửa chữa tốt nhất, đáp ứng mọi nhu cầu của khách hàng.</p>
          </li>
        </ul>

        <div className={s.titleH1} style={{ margin: '20px auto' }}>Dịch vụ nổi bật của chúng tôi</div>
        <div className={s.listCard}>
          {dataCardBlog.map((item, index) => (
            <div className={s.cardItem} key={index}>
              <div className={s.image}>
                <Image src={item.img} alt='card-item' />
              </div>
              <div className={s.title}>{item.title}</div>
              <Link href={item.link} className={s.btn}>Chi tiết</Link>
            </div>
          ))}
        </div>

        <p>Nếu bạn đang gặp sự cố với các thiết bị điện nước điện lạnh tại nhà hoặc văn phòng, đừng ngần ngại liên hệ ngay với chúng tôi. Gọi ngay để được tư vấn và nhận dịch vụ sửa chữa nhanh chóng, uy tín.</p>

        <p>Tại sao lựa chọn dịch vụ sửa chữa điện lạnh tại <span>Doãn Anh</span>?</p>
        <p>Giải pháp tối ưu cho mọi sự cố điện lạnh: Với kiến thức chuyên sâu và kinh nghiệm lâu năm, chúng tôi tự tin cung cấp các giải pháp sửa chữa nhanh chóng và hiệu quả nhất cho mọi loại thiết bị điện lạnh.</p>

        <p>Dịch vụ sửa chữa tại nhà tiện lợi: Bạn không cần phải lo lắng về việc mang thiết bị đi sửa chữa. Chúng tôi sẽ đến tận nơi để kiểm tra và sửa chữa nhanh chóng.</p>

        <p>Giá cả phải chăng, bảo hành dài hạn: Với mức giá hợp lý, chúng tôi cam kết không phát sinh thêm chi phí, đồng thời bảo hành dài hạn cho mọi dịch vụ.</p>

        <p>Liên hệ ngay với chúng tôi qua số điện thoại <span><a href="tel:0964701333">0964 701 333</a></span> để được hỗ trợ tốt nhất.</p>
      </div>

      <div className={s.titleH1} style={{ margin: '20px auto' }}>Các sản phẩm của chúng tôi</div>
      <p>Chúng tôi luôn có sẵn nhiều mẫu mã đa dạng, hàng mới, hàng thanh lý giá rẻ – cập nhật thường xuyên. Hãy liên hệ trực tiếp để được tư vấn mẫu mã và giá cụ thể phù hợp với nhu cầu của bạn.</p>
      <div className={s.listCard}>
        {dataProduct.map((item, index) => (
          <div className={s.cardItem} key={index}>
            <div className={`${s.image} ${s.image_product}`}>
              <Image src={item.img} alt='card-item' />
            </div>
            <div className={s.title}>{item.title}</div>
            <Link href="tel:0964701333" target="_blank" className={s.btn}>Liên hệ ngay</Link>
          </div>
        ))}
      </div>

      <div>
        <p>
          Chúng tôi cung cấp dịch vụ{' '}
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
      <p>Liên hệ ngay với chúng tôi qua số điện thoại <span><a href="tel:0964701333">0964 701 333</a></span> để được hỗ trợ tốt nhất.</p>

    </div>
  );
}