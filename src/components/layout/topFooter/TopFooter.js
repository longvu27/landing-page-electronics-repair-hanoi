import Image from 'next/image';
import s from './topFooterStyle.module.scss';
import shield from '@/assets/images/icons/shield.svg';
import headphone from '@/assets/images/icons/headphone.svg';
import time247 from '@/assets/images/icons/time247.svg';

export default function TopFooter() {
  const data = [
    {
      icon: shield,
      title: "Uy Tín Hàng Đầu",
      desc: "Sửa dứt điểm vấn đề hoặc bảo hành đảm bảo lên đến 24 tháng",
    },
    {
      icon: headphone,
      title: "Miễn Phí Tư Vấn",
      desc: "Khảo sát tư vấn mọi vấn đề tận tình hỗ trợ và đề xuất các giải pháp tốt nhất cho khách hàng. Báo giá trước khi làm.",
    },
    {
      icon: time247,
      title: "Hỗ Trợ 24/7",
      desc: "Luôn sẵn sàng phục vụ 24/7, kể cả ngày lễ và cuối tuần, đảm bảo xử lý nhanh chóng mọi sự cố điện nước khi bạn cần.",
    },
  ];

  return (
    <div className={s.wrapper}>
      <div className={`width-container ${s.container}`}>
        {data.map((item, index) => (
          <div className={s.card} key={index}>
            <div className={s.image}>
              <Image src={item.icon} alt='icon card' />
            </div>
            <div className={s.title}>{item.title}</div>
            <div className={s.desc}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}