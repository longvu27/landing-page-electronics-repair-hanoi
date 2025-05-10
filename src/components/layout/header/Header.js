'use client'
import s from './headerStyle.module.scss';
import logo from '@/assets/images/logo.png';
import location from '@/assets/images/icons/location.svg';
import phone from '@/assets/images/icons/phone.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <div className={s.header}>
      <div className={`width-container ${s.container}`}>
        <div className={s.left}>
          <div className={s.logo} onClick={() => router.push('/')}>
            <Image src={logo} alt='logo' />
          </div>
          <div className={s.text}>
            <div className={s.title}>Doãn Anh</div>
            <div className={s.desc}>Sửa Chữa Điện Nước - Điện Lạnh Chuyên Nghiệp</div>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.item}>
            <Image src={location} alt='location' />
            <p>Thiệu Hoá, Thanh Hoá</p>
          </div>
          <div className={s.item}>
            <Image src={phone} alt='phone number' />
            <p><a href="tel:0964701333">0964 701 333</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}