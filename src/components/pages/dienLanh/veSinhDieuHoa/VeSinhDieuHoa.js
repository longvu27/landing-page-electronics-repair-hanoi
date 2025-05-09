import Image from 'next/image';
import s from './veSinhDieuHoaStyle.module.scss';
import imgRepair from '@/assets/images/dien_lanh.jpg';
import imgVeSinhDieuHoa from '@/assets/images/dienLanh/ve_sinh_dieu_hoa.jpg';

export default function VeSinhDieuHoa() {
  return (
    <div className={s.wrapper}>
      <div className={s.imgBanner}>
        <Image src={imgRepair} alt="Sửa chữa điện nước điện lạnh tại Thanh Hoá" />
      </div>
      <h1 className={s.titleH1}>Vệ sinh điều hòa tại Thanh Hóa</h1>
      <p>Điều hòa là một sản phẩm sử dụng theo mùa nên cần được bảo dưỡng, vệ sinh định kỳ để đảm bảo hiệu quả hoạt động cũng như tuổi thọ sản phẩm. Dịch vụ vệ sinh điều hòa Doãn là lựa chọn hàng đầu khi khách hàng tại Doãn Anh có nhu cầu vệ sinh, bảo dưỡng điều hòa.</p>

      <p className={s.titleH3}>Việc vệ sinh điều hòa định kỳ là rất quan trọng để đảm bảo chất lượng không khí trong nhà. Dưới đây là hướng dẫn về tần suất vệ sinh điều hòa:</p>
      <ul>
        <li><span>Vệ sinh hàng ngày:</span> Có một số nhiệm vụ vệ sinh cần thực hiện hàng ngày hoặc định kỳ sau mỗi lần sử dụng điều hòa. Bạn nên kiểm tra và làm sạch bộ lọc không khí nếu cần thiết. Bộ lọc không khí bẩn có thể ảnh hưởng đến hiệu suất và chất lượng không khí của điều hòa.</li>
        <li><span>Vệ sinh hàng tháng:</span> Mỗi tháng, nên kiểm tra và làm sạch cánh quạt của điều hòa. Cánh quạt có thể tích tụ bụi và chất cặn, gây ồn và giảm hiệu suất hoạt động.</li>
        <li><span>Vệ sinh hàng quý:</span> Mỗi quý, nên làm sạch và vệ sinh bộ lọc không khí. Đối với các điều hòa có bộ lọc tái sử dụng, hãy làm sạch theo hướng dẫn của nhà sản xuất. Đối với các điều hòa có bộ lọc dùng một lần, hãy thay thế bộ lọc mới.</li>
        <li><span>Vệ sinh hàng năm:</span> Mỗi năm, nên thực hiện vệ sinh tổng thể và bảo dưỡng điều hòa. Điều này bao gồm vệ sinh và kiểm tra các bộ phận như cánh quạt, ống dẫn, hệ thống dẫn gió và đơn vị làm lạnh. Nếu cần thiết, hãy gọi các chuyên gia hoặc kỹ thuật viên chuyên nghiệp để kiểm tra và bảo dưỡng toàn bộ hệ thống.</li>
      </ul>

      <p className={s.titleH3}>Ngoài ra, bạn cũng có thể thực hiện vệ sinh điều hòa theo kế hoạch vệ sinh bên ngoài tại nhà.</p>
      <ul>
        <li><span>Vệ sinh bộ lọc:</span> Bạn nên kiểm tra và làm sạch hoặc thay thế bộ lọc của điều hòa hàng tháng hoặc theo hướng dẫn của nhà sản xuất. Bộ lọc bẩn có thể gây tắc nghẽn và giảm lưu lượng không khí, cũng như làm giảm hiệu suất làm lạnh của điều hòa. Nếu bạn sử dụng điều hòa thường xuyên hoặc trong môi trường bụi bẩn, bạn có thể cần làm sạch bộ lọc thường xuyên hơn.</li>
        <li><span>Vệ sinh bề mặt bên ngoài:</span> Bạn có thể lau sạch bề mặt bên ngoài của điều hòa bằng một khăn ẩm hoặc khăn mềm để loại bỏ bụi và các chất bẩn. Đảm bảo rằng điều hòa đã được tắt nguồn trước khi vệ sinh bề mặt.</li>
        <li><span>Kiểm tra và làm sạch cánh quạt:</span> Cánh quạt trong điều hòa có thể bám đầy bụi và bẩn theo thời gian. Bạn nên kiểm tra cánh quạt và làm sạch chúng nếu cần. Tắt nguồn điện và sử dụng một khăn ẩm hoặc chổi mềm để vệ sinh cánh quạt.</li>
        <li><span>Kiểm tra và làm sạch hệ thống dẫn nước:</span> Nếu điều hòa của bạn có hệ thống dẫn nước, hãy kiểm tra xem có dấu hiệu của chảy nước hoặc tắc nghẽn. Nếu cần, làm sạch hoặc xử lý vấn đề này để đảm bảo hệ thống dẫn nước hoạt động tốt.</li>
        <li><span>Vệ sinh hệ thống dẫn gió:</span> Nếu bạn có hệ thống dẫn gió riêng biệt, hãy kiểm tra và làm sạch nó định kỳ. Bạn có thể sử dụng một cây chổi mềm hoặc hút bụi để loại bỏ bụi và chất cặn trong hệ thống dẫn gió.</li>
      </ul>
      <p>Bạn nên lên kế hoạch bảo dưỡng định kỳ bởi một kỹ thuật viên chuyên nghiệp để họ có thể thực hiện các công việc kiểm tra, làm sạch và bảo dưỡng chi tiết hơn trên các thành phần nội bộ của điều hòa để đảm bảo hoạt động tối ưu.</p>

      <div className={s.imgRepair}>
        <Image src={imgVeSinhDieuHoa} alt="Sửa chữa điều hoà tại Thanh Hoá" />
      </div>

      <p className={s.titleH2}>Dịch vụ vệ sinh điều hòa Doãn Anh uy tín – chuyên nghiệp – giá rẻ</p>
      <p>Để đảm bảo chất lượng và hiệu quả hoạt động của điều hòa, bạn có thể tìm tới Điện nước - điện lạnh Doãn Anh để chúng tôi hỗ trợ vệ sinh điều hòa tại nhà.</p>
      <ul>
        <li>Đội ngũ công nhân kỹ thuật cao, nhiều năm kinh nghiệm sửa chữa vệ sinh điều hòa</li>
        <li>Vệ sinh điều hòa tại nhà, không cần tốn thời gian đưa điều hòa về xưởng, tránh các hỏng hóc khi vận chuyển điều hòa đi vệ sinh bảo dưỡng.</li>
        <li>Quy trình thực hiện vệ sinh điều hòa Thanh Hóa qua mỗi khâu đều chuyên nghiệp, đạt chuẩn kỹ thuật.</li>
        <li>Phục vụ khách hàng nhanh chóng, chỉ cần khách hàng có nhu cầu 15 – 30 phút chúng tôi có mặt.</li>
        <li>Giá cả hợp lý, báo giá trước khi làm.</li>
        <li>Ngoài vệ sinh điều hòa Thanh Hóa, Điện nước - điện lạnh Doãn Anh còn cung cấp dịch vụ sửa chữa điều hòa trên địa bàn Thanh Hóa khi khách hàng có yêu cầu.</li>
        <li>Điện nước - điện lạnh Doãn Anh với đa dạng các dịch vụ điện lạnh như bơm ga, sửa chữa, bảo trì,… cho toàn bộ những thiết bị điện lạnh (Tủ lạnh, máy giặt, máy nước nóng lạnh, máy lọc nước,…) không chỉ riêng vệ sinh điều hòa.</li>
        <li>Trang thiết bị và dụng cụ luôn được Điện nước - điện lạnh Doãn Anh đầu tư đầy đủ, hiện đại và tân tiến.</li>
        <li>Cam kết hoàn tiền 100% nếu khách hàng không hài lòng về dịch vụ của chúng tôi.</li>
      </ul>
      <p>Nếu bạn đang có nhu cầu vệ sinh điều hòa Thanh Hóa, liên hệ ngay tới hotline <span>0964 701 333</span> để Điện nước - điện lạnh Doãn Anh có thể hỗ trợ bạn ngay.</p>
    </div>
  )
}