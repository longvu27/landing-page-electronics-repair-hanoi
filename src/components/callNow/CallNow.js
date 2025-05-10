import s from './callNowStyle.module.scss';
import Image from 'next/image';
import imgZalo from '@/assets/images/zalo.png';
import Link from 'next/link';
import phone from '@/assets/images/icons/phone.svg';

export default function CallNow() {

  return (
    <div className={s.wrapper}>
      <Link href="tel:0964701333" target="_blank">
        <div className={s.container}>
          <div className={s.circle}></div>
          <div className={s.circleFill}></div>
          <div className={s.imgCircle}>
            <Image src={phone} alt="call" />
          </div>
        </div>
        <div className={s.label}>0964 701 333</div>
      </Link>
    </div>
  )
}