import s from './feedBackStyle.module.scss';

import img_person_joined_2 from '@/assets/images/home/img_person_joined_2.jpg';
import img_person_joined_3 from '@/assets/images/home/img_person_joined_3.jpg';
import img_person_joined_4 from '@/assets/images/home/img_person_joined_4.jpg';
import img_person_joined_5 from '@/assets/images/home/img_person_joined_5.jpg';
import img_person_joined_6 from '@/assets/images/home/img_person_joined_6.jpg';
import Image from 'next/image';

export default function FeedBack() {
  const dataReview = [
    {
      content: 'Thợ đến đúng giờ, làm việc chuyên nghiệp và nhiệt tình. Sau khi sửa xong, thiết bị hoạt động ổn định, giá cả hợp lý.',
      name: 'Phạm Thu Thảo',
      img: img_person_joined_2,
      location: 'Phường Nhật Tân, Quận Tây Hồ',
    },
    {
      content: 'Máy giặt nhà mình bị kêu to, thợ đến kiểm tra rất nhanh, sửa gọn gàng. Sau khi sửa chạy êm như mới. Kỹ thuật viên không chỉ sửa mà còn hướng dẫn cách vệ sinh lồng giặt định kỳ, giúp máy bền hơn.',
      name: 'Trần Thị Hồng Nhung',
      img: img_person_joined_4,
      location: 'Phường Bách Khoa, Quận Hai Bà Trưng',
    },
    {
      content: 'Điều hoà không mát, gọi thợ tới trong ngày, kiểm tra và nạp gas xong chạy êm ru, mát lạnh như mới.',
      name: 'Lê Văn Khánh',
      img: img_person_joined_3,
      location: 'Phố Đinh Tiên Hoàng, quận Hoàn Kiếm',
    },
    {
      content: 'Đã từng gọi nhiều chỗ nhưng đây là nơi khiến mình yên tâm nhất. Hẹn giờ chuẩn, không phát sinh chi phí.',
      name: 'Phạm Thu Trang',
      img: img_person_joined_6,
      location: 'Phường Yên Nghĩa, Quận Hà Đông',
    },
    {
      content: 'Giá dịch vụ phải chăng, linh kiện thay thế rõ nguồn gốc. Sửa xong chạy êm, đến nay chưa gặp lỗi lại.',
      name: 'Đặng Quốc Huy',
      img: img_person_joined_5,
      location: 'Phường Nghĩa Tân, Quận Cầu Giấy',
    },
  ]

  return (
    <div className={s.wrapper}>
      <div className={`width-container ${s.customerReview}`} >
        <div className={s.head}>Đánh giá của khách hàng</div>
        <div className={s.body}>
          {dataReview.map((item, index) => (
            <div className={s.item} key={index}>
              <div className={s.avt}>
                <Image src={item.img} alt='avt' />
              </div>
              <div className={s.text}>
                <div className={s.title}>
                  {item.name}
                  <br />
                  <span>{item.location}</span>
                </div>
                <div className={s.content}>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}