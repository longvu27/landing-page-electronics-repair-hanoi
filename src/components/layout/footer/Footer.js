import s from './footerStyle.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={`width-container ${s.container}`}>
        <div className={s.item}>
          <div className={s.logo}>
            <Image src={logo} alt='logo' />
          </div>
          <div className={s.text}>
            <div className={s.title}>Doãn Anh</div>
            <p>Dịch vụ sửa chữa điện nước điện lạnh tại Hà Nội – Chuyên sửa chữa, lắp đặt điện dân dụng, bảo trì điều hòa, tủ lạnh và các thiết bị điện lạnh nhanh chóng, uy tín. Hỗ trợ 24/7, có mặt sau 30 phút, cam kết giá cả minh bạch.</p>
          </div>

        </div>
        <div className={s.item}>
          <div className={s.title}>Dịch Vụ</div>
          <p>Sửa chữa điện nước: máy lọc nước, bình nóng lạnh,...</p>
          <p>Sửa chữa điện lạnh: điều hoà, tủ lạnh,... </p>
        </div>
        <div className={s.item}>
          <div className={s.title}>Liên Hệ</div>
          <p>Địa chỉ: Thôn 2, Thiệu Lý, Thiệu Hoá, Thanh Hoá</p>
          <p>Điện thoại: <a href="tel:0964701333">0964 701 333</a></p>

        </div>
      </div>
      <div className={s.footerText}>
        {/* <p>© 2023 Doãn Anh. All rights reserved.</p> */}
      </div>
    </div>
  )
}