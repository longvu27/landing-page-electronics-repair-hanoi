import Image from 'next/image';
import s from './veSinhMayGiatStyle.module.scss';
import imgRepair from '@/assets/images/dien_lanh.jpg';
import imgVeSinhMayGiat from '@/assets/images/dienNuoc/ve_sinh_may_giat.jpeg';

export default function VeSinhMayGiat() {
  return (
    <div className={s.wrapper}>
      {/* <div className={s.imgBanner}>
        <Image src={imgRepair} alt="Sửa chữa điện nước điện lạnh tại Hà Nội" />
      </div> */}
      <h1 className={s.titleH1}>Vệ sinh máy giặt tại Hà Nội</h1>

      <p>Vệ sinh máy giặt giúp loại bỏ cặn bẩn và chất cặn tích tụ giảm tình trạng hao mòn và hư hỏng của các bộ phận trong máy. Theo dõi bài viết dưới để tìm hiểu về đơn vị cung cấp dịch vụ vệ sinh máy giặt Hà Nội uy tín.</p>

      <h2 className={s.titleH3}>Tầm quan trọng của vệ sinh máy giặt định kỳ</h2>
      <p>Vệ sinh máy giặt định kỳ có tầm quan trọng rất lớn đối với sức khỏe của gia đình bạn. Cụ thể: </p>
      <ul>
        <li>Máy giặt không được vệ sinh đúng cách có thể trở thành môi trường lý tưởng cho vi khuẩn, nấm mốc và các chất cặn tích tụ. Khi quần áo bẩn được giặt trong môi trường không hợp vệ sinh, vi khuẩn và nấm mốc có thể lưu trữ trên quần áo và có thể gây kích ứng da, dị ứng hoặc các vấn đề sức khỏe khác. Bằng cách vệ sinh máy giặt thường xuyên, bạn có thể loại bỏ vi khuẩn và nấm mốc, giữ cho quần áo và gia đình của bạn luôn sạch sẽ và an toàn.</li>
        <li>Máy giặt không được vệ sinh có thể gặp vấn đề về hiệu suất hoạt động. Cặn bẩn, cặn bã và chất cặn tích tụ có thể làm tắc ống nước, lọc nước, van và các bộ phận khác trong máy giặt. Điều này có thể làm giảm hiệu suất giặt, kéo dài thời gian giặt và tăng tiêu thụ nước và điện. Bằng cách vệ sinh máy giặt định kỳ, bạn giữ cho máy hoạt động ở hiệu suất tối đa, tiết kiệm thời gian, năng lượng và nước.</li>
        <li>Vệ sinh định kỳ giúp kéo dài tuổi thọ của máy giặt gia đình bạn. Khi máy giặt không được vệ sinh, các cặn bẩn và chất cặn tích tụ có thể gây hư hỏng hoặc hao mòn các bộ phận quan trọng trong máy. Bằng cách vệ sinh máy giặt thường xuyên, bạn giảm nguy cơ sự cố và sửa chữa, giúp máy giặt hoạt động lâu hơn và tiết kiệm chi phí.</li>
        <li>Máy giặt bẩn và không được vệ sinh có thể gây nguy hiểm cho gia đình bạn. Nước thừa không được xả hết hoặc các bộ phận bị tắc có thể gây rò rỉ nước hoặc gây nguy hiểm rò điện. Bằng cách vệ sinh máy giặt định kỳ, bạn đảm bảo an toàn cho gia đình và tránh các tình huống nguy hiểm không mong muốn.</li>
      </ul>
      <p>Việc vệ sinh máy giặt định kỳ có tầm quan trọng lớn đối với sức khỏe, hiệu suất, tuổi thọ và an toàn. Điều này đảm bảo rằng máy giặt hoạt động tốt nhất có thể và giữ cho quần áo và gia đình của bạn luôn sạch sẽ và an toàn.</p>

      <div className={s.imgRepair}>
        <Image src={imgVeSinhMayGiat} alt="Sửa chữa máy giặt tại Hà Nội" />
      </div>

      <div className={s.stepContainer}>
        <p className={s.titleH3}>Hướng dẫn vệ sinh máy giặt cửa ngang</p>
        <p><span>Bước 1:</span> Tháo lồng giặt ra khỏi máy giặt để tiến hành vệ sinh.</p>
        <p><span>Bước 2:</span> Tháo gỡ lồng giặt của máy giặt cửa ngang</p>
        <p>Tháo phần bảo vệ để lấy lồng giặt ra bên ngoài</p>
        <p><span>Bước 3:</span> Vệ sinh phần bảo vệ lồng giặt máy giặt</p>
        <p>Vệ sinh, rửa bỏ các chất nhớt và cặn bám lại trong thời gian sử dụng máy giặt</p>
        <p><span>Bước 4:</span> Vệ sinh lồng giặt máy giặt</p>
        <ul>
          <li>Vệ sinh ron bảo vệ, trục treo lồng máy giặt</li>
          <li>Vệ sinh chén lọc rác, thanh đun nước nóng của máy giặt</li>
          <li>Sử dụng máy xịt áp lực cao và các dụng cụ hỗ trợ để vệ sinh lồng giặt</li>
        </ul>
        <p><span>Bước 5:</span> Lắp lại máy giặt và chạy thử kiểm tra</p>
      </div>

      <div className={s.stepContainer}>
        <p className={s.titleH3}>Hướng dẫn vệ sinh máy giặt cửa trên</p>
        <p><span>Bước 1:</span> Tháo vỏ máy giặt cửa trên để lấy lồng giặt ra ngoài</p>
        <p><span>Bước 2:</span> Tiến hành tháo lồng giặt để cọ rửa</p>
        <p><span>Bước 3:</span> Vệ sinh lồng giặt</p>
        <ul>
          <li>Vệ sinh bộ lọc, phễu thoát nước, đường ống xả nước thải</li>
          <li>Xịt nước vệ sinh lồng giặt</li>
        </ul>
        <p><span>Bước 4:</span> Lắp lại lồng giặt và các phụ kiện vào máy giặt, thực hiện chạy thử.</p>
        <p><span>Lưu ý:</span> Trước khi thực hiện bất kỳ quy trình vệ sinh máy giặt, bạn cần tắt nguồn điện và ngắt kết nối nước cho máy giặt để đảm bảo an toàn và hiệu quả vệ sinh.</p>
      </div>

      <p className={s.titleH2}>Tại sao nên lựa chọn dịch vụ vệ sinh máy giặt tại <span>Doãn Anh</span>?</p>
      <p>Dịch vụ vệ sinh máy giặt là một dịch vụ giúp bạn vệ sinh và bảo dưỡng các thiết bị gia đình, mang lại sự tiện lợi và tăng tuổi thọ của thiết bị. Điện lạnh Doãn Anh  tự hào là đơn vị cung cấp dịch vụ bảo dưỡng, vệ sinh máy giặt uy tín tại Hà Nội giá rẻ. Đến với chúng tôi, khách hàng nhận về các lợi ích:</p>

      <ul>
        <li>Đội ngũ nhân viên giàu kinh nghiệm, có nhiều cơ sở khắp Hà Nội</li>
        <li>Khách hàng nhận được bảng báo giá dịch vụ trước khi sửa chữa</li>
        <li>Chi phí sửa chữa hợp lý, báo đúng giá</li>
        <li>Linh kiện sửa chữa thay thế chính hãng, bảo hành dài hạn</li>
        <li>Có nhiều cơ sở phủ rộng khắp Hà Nội, quá trình vệ sinh bảo dưỡng diễn ra nhanh hơn</li>
        <li>Dịch vụ sửa chữa, vệ sinh – bảo dưỡng uy tín hàng đầu Hà Nội</li>
      </ul>

    </div>
  )
}