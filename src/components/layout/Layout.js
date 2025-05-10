import s from './layoutStyle.module.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import TopFooter from './topFooter/TopFooter';
import ConnectZalo from '../connectZalo/ConnectZalo';
import CallNow from '../callNow/CallNow';

export default function Layout({ children }) {
  return (
    <div className={s.wrapper}>
      {/* <ConnectZalo /> */}
      <CallNow />
      <Header />
      <div className={`width-container ${s.main}`}>
        {children}
      </div>
      <TopFooter />
      <Footer />
    </div>
  )
}