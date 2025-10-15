import s from './connectZaloStyle.module.scss';
import Image from 'next/image';
import imgZalo from '@/assets/images/zalo.png';
import Link from 'next/link';
import { gaEvent } from '@/src/service/tracking';

export default function ConnectZalo() {
  return (
    <div className={s.wrapper} onClick={() => gaEvent({ eventName: 'connect_zalo' })}>
      <div className={s.container}>
        <div className={s.circle}></div>
        <div className={s.circleFill}></div>
        <div className={s.imgCircle}>
          <Link href="https://zalo.me/0964701333" target="_blank">
            <Image src={imgZalo} alt="Kết nối Zalo" />
          </Link>
        </div>
      </div>
    </div>
  )
}