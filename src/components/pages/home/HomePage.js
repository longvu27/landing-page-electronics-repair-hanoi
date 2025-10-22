'use client'
import Image from 'next/image';
import s from './homePageStyle.module.scss';
import Link from 'next/link';
import sua_binh_nong_lanh from '@/assets/images/home/sua_binh_nong_lanh.jpg';
import suaMayGiat from '@/assets/images/home/sua_may_giat.png';
import suaMayLocNuoc from '@/assets/images/home/sua_may_loc_nuoc.png';
import img_card_ve_sinh_may_giat from '@/assets/images/dienNuoc/ve_sinh_may_giat.jpeg';
import img_card_sua_may_loc_nuoc from '@/assets/images/dienNuoc/sua_may_loc_nuoc.jpg';
import img_card_sua_binh_nong_lanh from '@/assets/images/dienNuoc/sua_binh_nong_lanh.jpg';
import suaChuaDienNuoc from '@/assets/images/dienNuoc/sua_chua_dien_nuoc_a_z.jpg';
import suaDuongOngNuoc from '@/assets/images/dienNuoc/sua_duong_ong_nuoc.jpg';
import suaMayBomNuoc from '@/assets/images/dienNuoc/sua_may_bom_nuoc.jpg';
import sua_chua_dien from '@/assets/images/dienNuoc/sua_chua_dien.jpg';
import sua_dien_hn from '@/assets/images/dienNuoc/sua_dien_hn.png';
import sua_dien from '@/assets/images/dienNuoc/sua_dien.png';
import sua_dien_ha_noi_1 from '@/assets/images/home/sua_dien_ha_noi_1.jpg';
import sua_dien_nuoc_ha_noi_1 from '@/assets/images/home/sua_dien_nuoc_ha_noi_1.jpg';
import sua_dien_nuoc_ha_noi_2 from '@/assets/images/home/sua_dien_nuoc_ha_noi_2.jpg';
import sua_dien_nuoc_ha_noi_3 from '@/assets/images/home/sua_dien_nuoc_ha_noi_3.jpg';
import sua_dien_nuoc_tai_ha_noi from '@/assets/images/home/sua_dien_nuoc_tai_ha_noi.jpg';

import about_us from '@/assets/images/home/about_us.png';
import { trackingCallNow } from '@/src/service/tracking';

export default function HomePage() {

  const dataCardBlog = [
    {
      title: 'Sửa chữa điện nước từ A-Z',
      img: suaChuaDienNuoc,
      link: '/dien-nuoc/sua-chua-dien-nuoc',
    },
    {
      title: 'Vệ sinh máy giặt',
      img: img_card_ve_sinh_may_giat,
      link: '/dien-nuoc/ve-sinh-may-giat',
    },
    {
      title: 'Sửa máy lọc nước',
      img: img_card_sua_may_loc_nuoc,
      link: '/dien-nuoc/sua-may-loc-nuoc',
    },
    {
      title: 'Sửa bình nóng lạnh',
      img: img_card_sua_binh_nong_lanh,
      link: '/dien-nuoc/sua-binh-nong-lanh',
    },
    {
      title: 'Sửa máy bơm nước',
      img: suaMayBomNuoc,
      link: '/dien-nuoc/sua-may-bom-nuoc',
    },
    {
      title: 'Sửa Chữa Vỡ Đường Ống Nước',
      img: suaDuongOngNuoc,
      link: '/dien-nuoc/sua-duong-ong-nuoc',
    },
  ]

  return (
    <div className={s.wrapper}>
      {/* <div className={s.aboutMe}>
        <div className={s.head}>
          Về chúng tôi
          <span>&nbsp;</span>
        </div>
        <div className={s.body}>
          <div className={s.text}>
            Sửa chữa điện nước <span>Doãn Anh</span> là một trong những đơn vị hàng đầu tại khu vực Hà Nội trong lĩnh vực: Sửa chữa điện nước, sửa chữa bình nóng lạnh, sửa chữa máy bơm, sửa chữa máy giặt, vòi sen nước, sửa chữa đường ống nước… Chúng tôi hoạt động 24/7 tại các khu vực nội thành khu vực Hà Nội. Bạn đang bị sự cố về điện và nước trong gia đình, hãy gọi cho chúng tôi để được giải quyết một cách nhanh chóng và hiệu quả nhất !
            <br />
            <div>
              Chúng tôi luôn xem mỗi khách hàng là một ân nhân, phục vụ tận tâm, nhanh chóng và chất lượng.
            </div>
          </div>
          <div className={s.img}>
           
          </div>
        </div>
      </div> */}

      <div className={s.singleImg}>
        <Image
          src={about_us}
          alt='about_us'
          style={{ maxWidth: '250px', height: 'fit-content' }}
          priority
          fetchPriority="high"
          // placeholder="blur"
          quality={80}
        />
      </div>

      <div className={s.content}>
        <h1 className={s.titleH1}>Thợ sửa điện nước tại nhà Hà Nội hỗ trợ nhanh 24/7</h1>
        <p>Nếu bạn đang gặp sự cố với các thiết bị điện nước tại nhà hoặc văn phòng, đừng ngần ngại liên hệ ngay với chúng tôi. Gọi ngay để được tư vấn và nhận dịch vụ sửa chữa nhanh chóng, uy tín.</p>

        <p>Tại sao lựa chọn dịch vụ sửa chữa điện nước tại <span>Doãn Anh</span>?</p>
        <p>Giải pháp tối ưu cho mọi sự cố điện nước: Với kiến thức chuyên sâu và kinh nghiệm lâu năm, chúng tôi tự tin cung cấp các giải pháp sửa chữa nhanh chóng và hiệu quả nhất cho mọi loại thiết bị điện nước.</p>

        <p>Dịch vụ sửa chữa tại nhà tiện lợi: Bạn không cần phải lo lắng về việc mang thiết bị đi sửa chữa. Chúng tôi sẽ đến tận nơi để kiểm tra và sửa chữa nhanh chóng.</p>

        <p>Giá cả phải chăng, bảo hành dài hạn: Với mức giá hợp lý, chúng tôi cam kết không phát sinh thêm chi phí, đồng thời bảo hành dài hạn cho mọi dịch vụ.</p>
      </div>

      <div className={s.listImg}>
        <div className={s.img}>
          <Image src={sua_chua_dien} alt='sửa chữa điện tại hà nội' />
        </div>
        <div className={s.img}>
          <Image src={sua_dien} alt='sửa chữa điện nước' />
        </div>
        <div className={s.img}>
          <Image src={sua_dien_hn} alt='sửa chữa điện nước hà nội' />
        </div>
      </div>

      <h2 className={s.titleH2}>Dịch vụ Điện Nước Tại Hà Nội – Chuyên nghiệp, Uy tín và Giá cả Hợp lý</h2>

      <p>Chúng tôi cung cấp dịch vụ sửa chữa điện nước chất lượng cao, với đội ngũ kỹ thuật viên có nhiều năm kinh nghiệm trong ngành. Các dịch vụ của chúng tôi bao gồm sửa chữa máy giặt, máy lọc nước, máy bơm và các thiết bị khác. Dù bạn gặp vấn đề với thiết bị gia đình hay cần sửa chữa cho doanh nghiệp của mình, chúng tôi luôn sẵn sàng hỗ trợ nhanh chóng và hiệu quả.</p>

      <p>Chúng tôi cam kết mang lại cho bạn dịch vụ sửa chữa điện nước chất lượng nhất, với đội ngũ thợ sửa chữa lành nghề. Đặc biệt, chúng tôi cung cấp dịch vụ sửa chữa tại nhà, giúp bạn tiết kiệm thời gian và công sức. Dù bạn ở bất kỳ khu vực nào tại Hà Nội, chúng tôi sẽ đến tận nơi để kiểm tra và sửa chữa thiết bị điện nước của bạn.</p>

      <div className={s.listImg}>
        <div className={s.img}>
          <Image src={sua_binh_nong_lanh} alt='sửa chữa bình nóng lạnh' />
        </div>
        <div className={s.img}>
          <Image src={suaMayGiat} alt='sửa chữa máy giặt' />
        </div>
        <div className={s.img}>
          <Image src={suaMayLocNuoc} alt='sửa chữa máy lọc nước' />
        </div>
      </div>

      <h3 className={s.titleH2}>Dịch vụ sửa chữa điện nước của chúng tôi bao gồm:</h3>

      <ul>
        <li>Sửa chữa thiết bị điện nước như: máy bơm, máy lọc nước, bình nóng lạnh...</li>
        <li>Sữa chữa điện chập cháy: thi công lắp đặt điện dò tìm đường nước....</li>
        <li>Khắc phục tình trạng chập cháy điện, mất điện cục bộ, nhảy aptomat...</li>
        <li>Sửa chữa tủ điện, đường dây điện, đồng hồ điện</li>
        <li>Lắp đặt, sửa chữa và bảo dưỡng máy bơm nước, bình nóng lạnh</li>
        <li>Thay thế đường ống nước bị hỏng, bục vỡ, thay thế vòi nước, van nước...</li>
        <li>Khắc phục tình trạng rò rỉ nước, nước yếu, mất nước</li>
        <li>Lắp đặt thiết bị nhà tắm, nhà vệ sinh, bồn rửa bát, máy giặt...</li>
        <li>Thi công hệ thống điện nước âm tường, điện nước nổi</li>
        <li>Bảo dưỡng hệ thống điện nước định kỳ...</li>
        <li>Sửa chữa tận nhà: Tiết kiệm thời gian, không phải mang thiết bị đi xa.</li>
      </ul>

      <div className={s.singleImg}>
        <Image width={400} height={500} src={sua_dien_ha_noi_1} alt='sua dien nuoc ha noi' />
      </div>

      <p className={s.titleH2}>
        Vì sao khách hàng tin tưởng lựa chọn dịch vụ sửa điện nước tại Hà Nội của chúng tôi?
      </p>
      <p>
        Trên địa bàn Hà Nội hiện nay có rất nhiều đơn vị cung cấp dịch vụ sửa điện nước tại nhà. Tuy nhiên không phải đơn vị nào cũng đảm bảo uy tín, chuyên nghiệp. Chọn lựa đơn vị sửa chữa tin cậy, chất lượng là vô cùng quan trọng để đảm bảo hệ thống điện nước nhà bạn được khắc phục đúng sự cố, hoạt động ổn định và an toàn sau khi sửa chữa.
      </p>
      <p>
        Công ty chúng tôi là một trong những đơn vị uy tín nhất trong lĩnh vực sửa chữa điện nước. Hoạt động hơn 10 năm trong nghề, <span>Doãn Anh</span> được khách hàng tin tưởng, đánh giá cao bởi chất lượng dịch vụ tốt cùng thái độ phục vụ chu đáo, tận tâm.
      </p>
      <p>
        Thế mạnh của <span>Doãn Anh</span> là thâm niên hoạt động lâu năm, đã tích lũy được rất nhiều kinh nghiệm sửa chữa, khắc phục các sự cố điện nước từ quy mô nhỏ đến lớn. Cùng với đó là đội ngũ kỹ thuật viên, thợ sửa chữa điện nước lành nghề, được đào tạo bài bản về nghề sửa chữa điện nước, am hiểu sâu hệ thống điện nước hiện nay.
      </p>

      <div className={s.singleImg}>
        <Image width={400} height={500} src={sua_dien_nuoc_ha_noi_1} alt='sua dien nuoc ha noi' />
      </div>

      <h4 className={s.titleH2}>Những ưu điểm khi lựa chọn thợ sửa điện nước tại nhà của chúng tôi:</h4>
      <ul>
        <li>Phục vụ 24/7, có mặt nhanh chóng chỉ sau 15 phút để giúp bạn giải quyết các tình huống khẩn cấp.</li>
        <li>Mạng lưới hoạt động rộng khắp, thợ luôn có mặt ở khắp các quận huyện tại Hà Nội để hỗ trợ bạn nhanh chóng nhất.</li>
        <li>Cam kết xử lý, khắc phục tất cả các sự cố về điện nước một cách chuẩn xác, an toàn, nhanh chóng.</li>
        <li>Đáp ứng mọi nhu cầu sửa chữa điện nước từ đơn giản đến phức tạp.</li>
        <li>Trong trường hợp cần thay thế linh kiện, thiết bị, chúng tôi cam kết sử dụng sản phẩm chính hãng, chất lượng cao.</li>
        <li>Luôn đặt chất lượng dịch vụ và lợi ích khách hàng lên hàng đầu, thợ sửa chữa chu đáo, tận tâm trong công việc.</li>
        <li>Báo giá dịch vụ sửa điện nước tại nhà công khai, minh bạch với chi phí hợp lý và cạnh tranh nhất thị trường.</li>
        <li>Bảo hành uy tín và lâu dài, sẵn sàng hỗ trợ khách hàng 24/24</li>
        <li>
          <p><span>Cam kết của chúng tôi: </span>
            <br />
            An toàn và chất lượng: Mọi công việc sửa chữa đều được thực hiện theo đúng quy trình kỹ thuật, đảm bảo an toàn cho thiết bị và người sử dụng.</p>
        </li>
      </ul>

      <div className={s.singleImg}>
        <Image width={400} height={500} src={sua_dien_nuoc_ha_noi_2} alt='sua dien nuoc ha noi' />
      </div>

      <h5 className={s.titleH2}>Quy trình sửa chữa điện nước chuyên nghiệp</h5>
      <p>Sửa chữa điện nước là công việc đòi hỏi người thợ phải có tay nghề và chuyên môn cao. Ngoài ra chúng tôi cũng phải xây dựng quy trình sửa chữa chuyên nghiệp để đảm bảo hiệu quả, tiết kiệm thời gian và chi phí cho khách hàng.</p>
      <p>Theo đó Điện Nước <span>Doãn Anh</span> sẽ thực hiện sửa chữa theo quy trình sau đây:</p>
      <ul>
        <li><span>Bước 1:</span> Khách hàng liên hệ với chúng tôi và thông báo sự cố mà hệ thống điện nước đang gặp phải hoặc yêu cầu kiểm tra, lắp đặt điện nước.</li>
        <li><span>Bước 2:</span> Thông qua mô tả của khách hàng, chúng tôi đã phần nào nắm được sự cố đang diễn ra. Nếu sự cố đơn giản, chúng tôi sẽ hướng dẫn khách hàng cách tự khắc phục để tiết kiệm thời gian và chủ động hơn khi gặp tình huống tương tự.</li>
        <li><span>Bước 3:</span> Trường hợp sự cố xảy ra nghiêm trọng hoặc khách hàng không thể tự khắc phục thì công ty chúng tôi sẽ cử kỹ thuật viên, thợ sửa điện nước ở gần nhất đến kiểm tra, xử lý.</li>
        <li><span>Bước 4:</span> Thợ sửa chữa kiểm tra sự cố, xác định lỗi hư hỏng và thông báo cách khắc phục với khách hàng cũng như chi phí sửa chữa chi tiết.</li>
        <li><span>Bước 5:</span> Sau khi thống nhất phương án sửa chữa và báo giá dịch vụ, thợ sửa điện nước sẽ thực hiện sửa chữa, khắc phục sự cố, tuân thủ các nguyên tắc an toàn.</li>
        <li><span>Bước 6:</span> Sau khi hoàn tất sửa chữa, thợ sẽ kiểm tra tổng quát đảm bảo hệ thống điện nước đã hoạt động ổn định bình thường. Sau đó thông báo cho khách hàng nghiệm thu và thanh toán dịch vụ.</li>
      </ul>

      <div className={s.singleImg}>
        <Image width={400} height={500} src={sua_dien_nuoc_tai_ha_noi} alt='sua dien nuoc ha noi' />
      </div>

      <h6 className={s.titleH2}>Chi phí sửa điện nước giá rẻ, dễ tiếp cận</h6>
      <p>Giá dịch vụ sửa điện nước tại nhà bao nhiêu là điều được nhiều khách hàng quan tâm. Theo đó các sự cố về điện nước hiện nay rất đa dạng từ đơn giản đến phức tạp nên chi phí sửa chữa cũng sẽ khác nhau.</p>
      <p>Để đảm bảo tính chính xác, <span>Doãn Anh</span> sẽ kiểm tra chi tiết miễn phí, xác định sự cố và hướng khắc phục rồi mới thông báo giá chi tiết cho khách hàng. Trường hợp bạn đã nắm rõ sự cố đang gặp phải thì có thể thông báo với chúng tôi qua hotline để được báo giá sơ bộ ban đầu.</p>
      <p>Chúng tôi luôn đảm bảo cung cấp dịch vụ giá tốt, chất lượng cao, minh bạch về chi phí và bảo hành lâu dài. Vì vậy mà các bạn hãy hoàn toàn yên tâm tin tưởng vào chúng tôi.</p>
      <div className={s.singleImg}>
        <Image width={400} height={500} src={sua_dien_nuoc_ha_noi_3} alt='sua dien nuoc ha noi' />
      </div>
      <p>Với phương châm Nhanh chóng - An toàn - Tin cậy, Điện Nước <span>Doãn Anh</span> chính là lựa chọn hàng đầu dành cho bạn khi hệ thống điện nước không may gặp sự cố. Hãy liên hệ với dịch vụ sửa chữa điện nước tại Hà Nội của chúng tôi để được tư vấn và phục vụ chu đáo, đảm bảo hệ thống điện nước nhà bạn luôn hoạt động bình thường, ổn định, an toàn, tiết kiệm.</p>
      <div>
        <p>
          Chúng tôi cung cấp dịch vụ{' '}
          <Link href="/dien-nuoc">
            Sửa chữa điện nước Hà Nội
          </Link>
          {' '}với giá tốt nhất.
        </p>
      </div>
      <p>Liên hệ ngay với chúng tôi qua số điện thoại <span><a href="tel:0964701333" onClick={trackingCallNow}>0964 701 333</a></span> hoặc <span><a onClick={trackingCallNow} href="tel:0866885445">0866 885 445</a></span> để được hỗ trợ tốt nhất.</p>

      <div className={s.titleH1} style={{ margin: '20px auto' }}>Dịch vụ nổi bật của chúng tôi</div>
      <div className={s.listCard}>
        {dataCardBlog.map((item, index) => (
          <Link href={item.link} className={s.cardItem} key={index}>
            <div className={s.image}>
              <Image src={item.img} alt='card-item' />
            </div>
            <div className={s.title}>{item.title}</div>
            <div className={s.btn}>Chi tiết</div>
          </Link>
        ))}
      </div>
    </div>
  );
}