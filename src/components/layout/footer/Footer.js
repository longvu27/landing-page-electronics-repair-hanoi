import s from './footerStyle.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
export default function Footer() {

  const data1 = [
    {
      title: 'Quận Cầu Giấy',
      desc: ['138 phố Hoa Bằng, Phường Yên Hòa', '45 Dương Quảng Hàm, Phường Quan Hoa']
    },
    {
      title: 'Quận Thanh Xuân',
      desc: ['Số 32 Nguyễn Ngọc Nại, Phường Khương Mai', 'Số 121 Vương Thừa Vũ, Phường Khương Trung']
    },
    {
      title: 'Quận Tây Hồ',
      desc: ['Số 28 Nghĩa Đô, Phường Xuân La', 'Số 24 Âu Cơ, Phường Tứ Liên']
    },
    {
      title: 'Quận Hà Đông',
      desc: [' 110 Đường Trần Phú, Phường Mộ Lao', 'Tổ 12, Phường Phú Lương']
    },
    {
      title: 'Quận Hoàng Mai',
      desc: ['Số 220 Lĩnh Nam, Phường Trần Phú', 'Số 145 Phố ĐỊnh Công Hạ, Tổ 3, Phường Định Công']
    },
  ]

  const data2 = [
    {
      title: 'Huyện Thạch Thất',
      desc: ['Thôn 3, Xã Canh Nậu', 'Đội 3, thôn Hương Lam, Xã Đại Đồng']
    },
    {
      title: 'Huyện Đông Anh',
      desc: ['34 Đa Lộc, Thôn Bầu, Xã Kim Chung', 'Thôn Thọ Đa, Xã Kim Nỗ']
    },
    {
      title: 'Huyện Gia Lâm',
      desc: ['489 Hà Huy Tập, Thị trấn Yên Viên', 'Thôn Viên Ngoại, xã Đặng Xá']
    },
    {
      title: 'Huyện Hoài Đức',
      desc: ['Thôn Thắng Lợi, Xã La Phù', 'Thôn Trung Kỳ, Xã Đắc Sở']
    },
    {
      title: 'Thị xã Sơn Tây',
      desc: ['Thôn Đông Sàng, Xã Đường Lâm', 'Thôn Thiên Mã, Xã Cổ Đông']
    },
  ]
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
          <div className={s.title}>Khu vực nội thành</div>
          {data1.map((item, index) => (
            <div key={index}>
              <div style={{ textDecoration: 'underline', marginBottom: '5px' }}>{item.title}</div>
              <ul>
                {item.desc.map((itemD, indexD) => (
                  <li key={indexD}>{itemD}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={s.item}>
          <div className={s.title}>Khu vực ngoại thành</div>
          {data2.map((item, index) => (
            <div key={index}>
              <div style={{ textDecoration: 'underline', marginBottom: '5px' }}>{item.title}</div>
              <ul>
                {item.desc.map((itemD, indexD) => (
                  <li key={indexD}>{itemD}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={s.footerText}>
        {/* <p>© 2023 Doãn Anh. All rights reserved.</p> */}
      </div>
    </div>
  )
}