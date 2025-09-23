'use client'

import s from './layoutStyle.module.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import TopFooter from './topFooter/TopFooter';
import ConnectZalo from '../connectZalo/ConnectZalo';
import CallNow from '../callNow/CallNow';
import { usePathname } from 'next/navigation';
import FeedBack from './feedBack/FeedBack';

export default function Layout({ children }) {
  const pathName = usePathname();
  console.log('pathName', pathName)

  return (
    <div className={s.wrapper}>
      {/* <ConnectZalo /> */}
      <CallNow />
      <Header />
      <div className={`width-container ${s.main}`}>
        {children}
      </div>
      <FeedBack />
      <TopFooter />
      <Footer />
    </div>
  )
}