import s from './sieuAmRoRiNuocStyle.module.scss'
import sieu_am_ro_ri_nuoc from '@/assets/images/dienNuoc/sieu_am_ro_ri_nuoc.png';
import sieu_am_ro_ri_nuoc_1 from '@/assets/images/dienNuoc/sieu_am_ro_ri_nuoc_1.png';
import sieu_am_ro_ri_nuoc_2 from '@/assets/images/dienNuoc/sieu_am_ro_ri_nuoc_2.png';
import sieu_am_ro_ri_nuoc_3 from '@/assets/images/dienNuoc/sieu_am_ro_ri_nuoc_3.png';
import Image from 'next/image';

export default function SieuAmRoRiNuoc() {
  return (
    <div className={s.wrapper}>
      <section className={s.content}>
        <div className={s.singleImg}>
          <video width={400} height={600} controls autoPlay loop muted>
            <source
              src="/videos/do_tim_duong_ong_nuoc_ro_ri.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <p>Video: Thợ siêu âm dò tìm rò rỉ nước tại Hà Nội</p>
        </div>

        <h1 className={s.titleH2}>Siêu Âm Dò Tìm Rò Rỉ Ống Nước Tại Hà Nội – Phát Hiện Nhanh, Chính Xác, Không Đục Phá</h1>
        <p>Doãn Anh chuyên cung cấp <span>dịch vụ dò tìm rò rỉ nước tại hà nội</span>. Kiểm tra đường ống nước bị bể ngầm và sửa chữa đường ống nước bể (vỡ) ngầm gây thất thoát nước cho hộ gia đình</p>

        <p>👉 Nếu không xử lý kịp thời, rò rỉ nước có thể gây <span>hư hỏng kết cấu công trình, nấm mốc, hỏng sàn gỗ, thấm tường</span>, thậm chí làm giảm tuổi thọ của cả ngôi nhà.</p>

        <p>Thay vì phải <span>đục phá tường, sàn nhà</span> để tìm chỗ rò rỉ, hiện nay công nghệ <span>Siêu Âm Dò Tìm Rò Rỉ Ống Nước Tại Hà Nội</span> giúp phát hiện vị trí rò rỉ chính xác đến từng centimet mà không cần phá dỡ công trình.</p>

        <p>Chỉ sau <span>30 – 60 phút</span> kiểm tra, kỹ thuật viên có thể xác định vị trí rò rỉ và đưa ra phương án sửa chữa nhanh chóng, tiết kiệm chi phí tối đa cho khách hàng.</p>

        <p>📍 Đừng lo! Điện Nước Doãn Anh – với 15+ năm kinh nghiệm, chuyên cung cấp <span>dịch vụ dò tìm rò rỉ nước tại hà nội</span> hà nội bằng công nghệ siêu âm hiện đại, không đục phá, chính xác đến từng cm!</p>
      </section>
      <div className={s.singleImg}>
        <Image width={400} height={500} src={sieu_am_ro_ri_nuoc} alt='Thợ siêu âm tìm rò rỉ nước tại Hà Nội' />
        <p>Hình ảnh: Thợ siêu âm tìm rò rỉ nước tại Hà Nội</p>

      </div>
      <div className={s.content}>
        <h2 className={s.titleH2}>Dấu hiệu của việc đường nước bị rò rỉ</h2>
        <p>Sau đây là 3 cách phát hiện, kiểm tra đơn giản, không cần hiểu biết chuyên môn, khách hàng nào cũng có thể thực hiện được để xem liệu đường ống nước trong nhà mình có bị rò rỉ hay không:</p>
        <ul>
          <li>Hóa đơn tiền nước tăng đột ngột</li>
          <li>Đồng hồ nước vẫn quay mặc dù bạn đã khóa hết tất cả các thiết bị sử dụng nước trong nhà</li>
          <li>Bồn chứa cạn nước vào buổi sáng, mặc dù không sử dụng nước vào tối hôm trước hoặc máy bơm nước hoạt động liên tục dù nhu cầu sử dụng nước ít hoặc không dùng.</li>
        </ul>
        <p>Theo quy định thì đường ống nước trong nhà (phía sau đồng hồ nước) do khách hàng tự quản lý, không thuộc trách nhiệm của công ty cấp nước. Do đó nếu xảy ra tình trạng thất thoát nước ở phần đường ống này thì khách hàng vẫn phải trả tiền nước thất thoát.</p>
        <p>Khi nghi ngờ đường ống nước trong nhà bị rò rỉ, bạn cần nhanh chóng gọi ngay cho thợ sửa chữa rò rỉ nước chuyên nghiệp đến kiểm tra và xử lý kịp thời, để không phải “mất tiền oan” vì lượng nước thất thoát.</p>
      </div>

      <div className={s.singleImg}>
        <Image width={400} height={500} src={sieu_am_ro_ri_nuoc_2} alt='sieu am ro ri nuoc tai hoang mai' />
        <p>Hình ảnh: Siêu âm dò tìm rò rỉ ống nước tại Hoàng Mai</p>
      </div>

      <div className={s.content}>
        <h2 className={s.titleH2}>Chuyên gia dò tìm rò rỉ nước chuyên nghiệp tại Hà Nội</h2>
        <p>Điện nước Doãn Anh là một đơn vị dẫn đầu ngành về phát hiện rò rỉ nước chính xác, hạn chế đục phá tại Hà Nội. Chúng tôi cung cấp dịch vụ dò tìm phát hiện rò rỉ trong đường ống dẫn nước tại nhà hoặc doanh nghiệp.</p>
        <p>Không giống như các thảm họa hệ thống ống nước lớn, sự cố rò rỉ có thể xảy ra kín đáo hơn nhiều. Tuy nhiên, nếu không được xử lý đúng cách và kịp thời, chúng có thể gây ra những thiệt hại nghiêm trọng về tài sản và sức khỏe của gia đình bạn.</p>
        <p>Tại điện nước Doãn Anh, thợ sửa ống nước ở Hà Nội của chúng tôi có các kỹ năng và công cụ để tìm ra nguyên nhân rò rỉ nước và có thể tạo ra các giải pháp tối ưu để giải quyết vấn đề.</p>
      </div>

      <div className={s.singleImg}>
        <Image width={400} height={500} src={sieu_am_ro_ri_nuoc_1} alt='sieu am ro ri nuoc tai cau giay' />
        <p>Hình ảnh: Siêu âm dò tìm rò rỉ ống nước tại Cầu Giấy</p>
      </div>

      <div className={s.content}>
        <h2 className={s.titleH2}>Lý do khác tại sao khách hàng tin tưởng dịch vụ siêu âm đường nước</h2>
        <ul>
          <li>Chúng tôi luôn đến đúng giờ.</li>
          <li>Chúng tôi hoàn thành các dự án trong khung thời gian nhất định.</li>
          <li>Chúng tôi đảm bảo sự gọn gàng, sạch sẽ khu vực thi công sửa chữa sau khi rời đi.</li>
          <li>Chúng tôi đối xử với khách hàng và tài sản của họ với sự tôn trọng tuyệt vời.</li>
          <li>Chúng tôi có máy phát hiện rò rỉ nước hiện đại nên không cần đục phá nhiều làm hỏng kết cấu ngôi nhà của bạn</li>
        </ul>
      </div>








    </div>
  )
}