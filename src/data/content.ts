import stepPlanting from "@/assets/step-planting.jpg";
import stepHarvest from "@/assets/step-harvest.jpg";
import stepProcess from "@/assets/step-process.jpg";
import stepTransport from "@/assets/step-transport.jpg";
import stepRoast from "@/assets/step-roast.jpg";
import stepBrew from "@/assets/step-brew.jpg";

export const NAV = [
  { id: "hero", label: "Khởi đầu" },
  { id: "hanghoa", label: "Hàng hóa" },
  { id: "laodong", label: "Lao động" },
  { id: "giatri", label: "Giá trị" },
  { id: "loiich", label: "Lợi ích" },
  { id: "hoinhap", label: "Hội nhập" },
  { id: "quiz", label: "Trắc nghiệm" },
];

export const LABOR_STEPS = [
  {
    key: "gieo",
    title: "Gieo trồng",
    image: stepPlanting,
    desc: "Người nông dân chọn giống, chuẩn bị đất, gieo trồng và chăm sóc cây cà phê qua nhiều mùa trước khi có vụ thu hoạch đầu tiên.",
  },
  {
    key: "thu",
    title: "Thu hoạch",
    image: stepHarvest,
    desc: "Những quả cà phê chín được hái thủ công theo từng đợt. Đây là công đoạn đòi hỏi nhiều lao động sống và sự tỉ mỉ.",
  },
  {
    key: "so",
    title: "Sơ chế",
    image: stepProcess,
    desc: "Quả cà phê được rửa, tách vỏ, lên men và phơi. Quá trình này quyết định phần lớn chất lượng hạt nhân.",
  },
  {
    key: "van",
    title: "Vận chuyển",
    image: stepTransport,
    desc: "Hạt cà phê nhân được đóng bao, vận chuyển từ vùng nguyên liệu đến nhà máy, cảng và các thị trường khác nhau.",
  },
  {
    key: "rang",
    title: "Rang xay",
    image: stepRoast,
    desc: "Nhà rang xay lựa chọn công thức, kiểm soát nhiệt độ và thời gian để hạt cà phê phát triển hương vị.",
  },
  {
    key: "pha",
    title: "Pha chế",
    image: stepBrew,
    desc: "Barista pha chế theo phương pháp phù hợp, hoàn thiện ly cà phê trước khi đến tay người thưởng thức.",
  },
];

export const PRICE_FACTORS = [
  { key: "nguyenlieu", label: "Nguyên liệu", note: "Hạt cà phê, sữa, đường và các nguyên liệu đầu vào khác được tiêu hao trong quá trình pha chế." },
  { key: "luong", label: "Tiền lương", note: "Chi trả cho lao động sống của barista, phục vụ, nhân sự vận hành." },
  { key: "maymoc", label: "Máy móc", note: "Khấu hao thiết bị pha chế, làm mát, thanh toán, vệ sinh." },
  { key: "matbang", label: "Mặt bằng", note: "Chi phí thuê không gian, điện nước, duy trì cửa hàng." },
  { key: "vanchuyen", label: "Vận chuyển", note: "Chi phí đưa nguyên liệu từ vùng sản xuất tới cửa hàng." },
  { key: "thue", label: "Thuế", note: "Các nghĩa vụ thuế theo quy định pháp luật." },
  { key: "cungcau", label: "Cung – cầu", note: "Quan hệ cung cầu trên thị trường tác động tới giá cả." },
  { key: "thuonghieu", label: "Thương hiệu", note: "Giá trị thương hiệu, trải nghiệm và định vị của cửa hàng." },
  { key: "canhtranh", label: "Cạnh tranh", note: "Áp lực từ các đối thủ cùng phân khúc trên thị trường." },
];

export const INTEREST_CHOICES = [
  {
    key: "auto",
    label: "Tự động hóa ngay",
    perspectives: {
      worker: "Một số lao động có nguy cơ mất việc hoặc phải chuyển đổi công việc trong thời gian ngắn.",
      firm: "Năng suất và độ đồng đều tăng, nhưng doanh nghiệp chịu chi phí đầu tư và rủi ro chuyển đổi.",
      state: "Nhà nước cần chính sách an sinh và đào tạo lại để giảm tác động xã hội.",
    },
  },
  {
    key: "keep",
    label: "Không thay đổi",
    perspectives: {
      worker: "Việc làm hiện tại được giữ, nhưng thu nhập có thể chịu áp lực khi thị trường thay đổi.",
      firm: "Doanh nghiệp tránh chi phí đầu tư nhưng có thể mất lợi thế cạnh tranh dài hạn.",
      state: "Cơ cấu ngành ít biến động ngắn hạn nhưng có thể chậm hiện đại hóa.",
    },
  },
  {
    key: "mix",
    label: "Tự động hóa kết hợp đào tạo lại",
    perspectives: {
      worker: "Người lao động có cơ hội chuyển sang công việc kỹ năng cao hơn, giảm nguy cơ mất việc đột ngột.",
      firm: "Doanh nghiệp nâng năng suất đồng thời giữ được kinh nghiệm và cam kết của người lao động.",
      state: "Cách tiếp cận hài hòa với các chính sách phát triển nguồn nhân lực và điều hòa lợi ích.",
    },
  },
];

export const QUIZ = [
  {
    q: "Theo Mác, sản phẩm trở thành hàng hóa khi:",
    options: [
      "Được tạo ra để phục vụ nhu cầu bản thân người sản xuất.",
      "Được tạo ra nhằm mục đích trao đổi trên thị trường.",
      "Có hình thức đẹp và được đóng gói.",
      "Được sản xuất bằng máy móc hiện đại.",
    ],
    answer: 1,
    explain: "Hàng hóa là sản phẩm của lao động, có thể thỏa mãn nhu cầu nào đó của con người, và được sản xuất ra nhằm mục đích trao đổi.",
  },
  {
    q: "Lao động cụ thể tạo ra:",
    options: [
      "Giá trị của hàng hóa.",
      "Giá trị trao đổi.",
      "Giá trị sử dụng của hàng hóa.",
      "Giá cả thị trường.",
    ],
    answer: 2,
    explain: "Lao động cụ thể tạo ra giá trị sử dụng; lao động trừu tượng tạo ra giá trị của hàng hóa.",
  },
  {
    q: "Lượng giá trị của hàng hóa được đo bằng:",
    options: [
      "Thời gian lao động cá biệt của người sản xuất.",
      "Thời gian lao động xã hội cần thiết.",
      "Giá bán trên hóa đơn.",
      "Số lượng máy móc sử dụng.",
    ],
    answer: 1,
    explain: "Lượng giá trị được xác định bởi thời gian lao động xã hội cần thiết, tức thời gian trong điều kiện sản xuất phổ biến của xã hội.",
  },
  {
    q: "Tiền lương của người lao động là:",
    options: [
      "Toàn bộ giá trị mà người lao động tạo ra.",
      "Hình thức biểu hiện bằng tiền của giá cả hàng hóa sức lao động.",
      "Phần lợi nhuận doanh nghiệp chia lại.",
      "Khoản thưởng theo doanh thu.",
    ],
    answer: 1,
    explain: "Tiền lương là hình thức biểu hiện bằng tiền của giá cả hàng hóa sức lao động.",
  },
  {
    q: "Về quan hệ giữa giá trị và giá cả:",
    options: [
      "Giá cả luôn bằng giá trị.",
      "Giá trị và giá cả là hai khái niệm hoàn toàn tách rời.",
      "Giá cả là biểu hiện bằng tiền của giá trị và có thể dao động dưới tác động của thị trường.",
      "Giá cả quyết định giá trị.",
    ],
    answer: 2,
    explain: "Giá trị được hình thành trên cơ sở lao động xã hội cần thiết. Giá cả là biểu hiện bằng tiền của giá trị và dao động quanh giá trị dưới tác động của cung – cầu, cạnh tranh, thương hiệu…",
  },
];

export const TEAM = [
  { name: "Thành viên 1", role: "Nghiên cứu nội dung" },
  { name: "Thành viên 2", role: "Nghiên cứu nội dung" },
  { name: "Thành viên 3", role: "Thiết kế trải nghiệm" },
  { name: "Thành viên 4", role: "Phát triển web" },
  { name: "Thành viên 5", role: "Biên tập & phản biện" },
];

export const REFERENCES = [
  "Bộ Giáo dục và Đào tạo. Giáo trình Kinh tế Chính trị Mác – Lênin (dành cho bậc đại học không chuyên lý luận chính trị).",
  "C. Mác. Tư bản, Quyển I. Nhà xuất bản Chính trị Quốc gia Sự thật.",
  "V.I. Lênin. Toàn tập – các tác phẩm liên quan đến kinh tế chính trị.",
];
