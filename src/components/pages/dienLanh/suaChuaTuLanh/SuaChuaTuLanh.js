import Image from 'next/image';
import s from './suaChuaTuLanhStyle.module.scss';
import imgRepair from '@/assets/images/dien_lanh.jpg';
import imgSuaChuaTuLanh from '@/assets/images/dienLanh/sua_chua_tu_lanh.jpg';

export default function SuaChuaTuLanh() {
  return (
    <div className={s.wrapper}>
      <div className={s.imgBanner}>
        <Image src={imgRepair} alt="Sửa chữa điện nước điện lạnh tại Thanh Hoá" />
      </div>
      <h1 className={s.titleH1}>Sửa tủ lạnh không vào điện tại Thanh Hoá</h1>
      <p>Tủ lạnh của gia đình bạn sẽ không thể vận hành và làm lạnh được nếu tủ không được cấp nguồn điện hoặc không có điện. Đây là lỗi khá phổ biến trong quá trình sử dụng thiết bị. Nếu chẳng may gặp phải tình huống này, trước hết bạn cần kiểm tra và tìm ra nguyên nhân chính xác rồi chọn phương án sửa chữa thích hợp nhất để tủ lại được hoạt động bình thường.</p>
      <p>Tủ lạnh không vào điện có thể nhận biết qua một số dấu hiệu như tủ lạnh ko sáng đèn, không có hơi lạnh, tủ lạnh không chạy. Trường hợp tủ lạnh không vào điện thường do 4 nguyên nhân cơ bản đó là: nguồn dây điện bị hở, phích cắm lỏng, nguồn điện không ổn định hoặc linh kiện bên trong tủ bị hư hỏng.</p>

      <h2 className={s.titleH2}>Dây dẫn nguồn điện bị hở</h2>
      <p>Nhiều người thường có thói quen rút tủ ra khỏi ổ điện nếu vắng nhà trong khoảng vài ngày. Tuy nhiên, việc làm này đã tạo môi trường thuận lợi cho những côn trùng như chuột, gián có thể chui vào cắn đứt vỏ điện và các bộ phận khác bên trong tủ. Do đó, khi cắm điện cho tủ, nguồn điện không được truyền qua khiến tủ lạnh không chạy.</p>
      <p>Để sửa chữa, trước hết bạn cần kiểm tra và tìm ra nguồn điện đang bị hở ở chỗ nào, sau đó nối lại và lấy băng keo dán chặt chỗ bị đứt. Còn nếu chỗ đứt quá nặng, không thể xử lý tạm, hãy thay bằng dây điện mới để được an toàn.</p>
      <p>Bạn cũng cần lưu ý, tủ lạnh luôn phải được cắm điện để đảm bảo hoạt động, tránh sự tấn công của các loại côn trùng, chuột, gián có khả năng chui vào trong làm tổ, gây hư hại cho board mạch và các bộ phận khác.</p>

      <p className={s.titleH2}>Phích cắm của tủ bị lỏng</p>
      <p>Phích cắm điện chưa được cắm chặt vào ổ điện cũng khiến cho nguồn điện không được cấp vào tủ và gây ra hiện tượng tủ lạnh không vào điện. Hoặc nếu đầu dây cắm của nguồn điện lúc cắm vào ổ điện chặt nhưng bị hư hỏng cũng làm cho nguồn điện không thể truyền qua tủ.</p>
      <p>Để giải quyết, hãy kiểm tra lại đầu cắm tủ lạnh xem chúng đã khớp chưa đồng thời chỉnh lại cho thích hợp. Ngoài ra, bạn cũng nên dùng một ổ cắm điện khác, trực tiếp cắm vào và xem nguồn điện có đi qua không để đảm bảo chắc chắn.</p>
      <p>Nếu đã thử kiểm tra nhưng không thể cải thiện tình hình, bạn nên gọi cho thợ sửa chữa tủ lạnh chuyên nghiệp để được kiểm tra và khắc phục hiệu quả hơn.</p>


      <div className={s.imgRepair}>
        <Image src={imgSuaChuaTuLanh} alt="Sửa chữa tủ lạnh tại Thanh Hoá" />
      </div>

      <p className={s.titleH2}>Nguồn điện của gia đình không ổn định</p>
      <p>Để có thể duy trì hoạt động tủ lạnh cần được cung cấp đủ nguồn điện. Chính vì thế nếu hệ thống điện trong gia đình bạn không ổn định cũng có thể dẫn tới hiện tượng tủ không vào điện. Trong trường hợp này, bạn cần tiến hành xử lý kịp thời, tránh để kéo dài khiến tủ bị gặp vấn đề nặng hơn thậm chí là không hoạt động.</p>
      <p>Để sửa hãy kiểm tra lại nguồn điện có bị hở chỗ nào không, các nút Cb tổng có tự cắt không. Nếu không thấy có vấn đề gì thì nhiều khả năng là tủ bị hư hỏng bộ phận nào đó. Lúc này, bạn nên liên hệ với thợ sửa chữa tủ lạnh để được giúp đỡ.</p>

      <p className={s.titleH2}>Bộ phận linh kiện bên trong tủ có vấn đề</p>
      <p>Nhiều người thường có thói quen đóng mở cửa tủ liên tục hoặc mở cửa tủ lạnh quá lâu dẫn đến bộ phận rơle cảm biến nhiệt đóng ngắt liên tiếp. Nếu tình trạng này lặp lại nhiều lần sẽ khiến cho một số linh kiện hoạt động bên trong tủ bị chập cháy.</p>
      <p>Tuy nhiên, đây là vấn đề khá phức tạp và rất khó để tự sửa nếu bạn không rành về chuyên môn. Vì thế, tốt hơn hết hãy gọi cho thợ chuyên nghiệp để được kiểm tra và giúp đỡ.</p>
      <p>Tủ lạnh không vào điện nếu không được xử lý kịp thời có thể gây ra nhiều hư hỏng nặng hơn. Chính vì thế ngay khi phát hiện tủ có những vấn đề lạ bạn cần nhanh chóng kiểm tra kịp thời và liên hệ với thợ sửa chữa chuyên nghiệp để được khắc phục.</p>

      <p>Nếu bạn đang có nhu cầu sửa chữa tủ lạnh, liên hệ ngay tới hotline <span>0964 701 333</span> để Điện nước - điện lạnh Doãn Anh có thể hỗ trợ bạn ngay.</p>
    </div>
  )
}