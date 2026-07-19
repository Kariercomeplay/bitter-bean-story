import stepPlanting from "@/assets/step-planting.jpg";
import stepHarvest from "@/assets/step-harvest.jpg";
import stepProcess from "@/assets/step-process.jpg";
import stepTransport from "@/assets/step-transport.jpg";
import stepRoast from "@/assets/step-roast.jpg";
import stepBrew from "@/assets/step-brew.jpg";

export const NAV = [
  { id: "hero", label: "KHỞI ĐẦU" },
  { id: "hanghoa", label: "HÀNG HÓA" },
  { id: "laodong", label: "LAO ĐỘNG" },
  { id: "giatri", label: "GIÁ TRỊ" },
  { id: "suclaodong", label: "SỨC LAO ĐỘNG" },
  { id: "giacagiatri", label: "GIÁ CẢ" },
  { id: "loiich", label: "LỢI ÍCH" },
  { id: "hoinhap", label: "HỘI NHẬP" },
  { id: "quiz", label: "TRẮC NGHIỆM" },
];

export const LABOR_STEPS = [
  {
    key: "gieo",
    num: "01",
    title: "Gieo trồng",
    worker: "Người nông dân gieo trồng",
    image: stepPlanting,
    desc: "Người nông dân chuẩn bị đất, chăm sóc cây và bảo vệ mùa vụ.",
    addedValue: "Tạo nên mầm sống, sức khỏe và điều kiện sinh trưởng tối ưu cho hạt cà phê.",
  },
  {
    key: "thu",
    num: "02",
    title: "Thu hoạch",
    worker: "Người lao động thu hoạch",
    image: stepHarvest,
    desc: "Quả cà phê được lựa chọn và thu hái vào thời điểm phù hợp.",
    addedValue: "Lựa chọn quả chín mộng, bảo toàn hàm lượng đường và vị ngọt tự nhiên.",
  },
  {
    key: "so",
    num: "03",
    title: "Sơ chế",
    worker: "Công nhân sơ chế",
    image: stepProcess,
    desc: "Quả được tách vỏ, lên men, rửa và phơi để hình thành cà phê nhân.",
    addedValue: "Tách vỏ thịt, định hình độ ẩm tiêu chuẩn và chuẩn hóa hương vị hạt nhân.",
  },
  {
    key: "van",
    num: "04",
    title: "Vận chuyển",
    worker: "Tài xế & Nhân viên vận chuyển",
    image: stepTransport,
    desc: "Hàng hóa được đưa từ vùng sản xuất đến cơ sở chế biến và thị trường.",
    addedValue: "Kết nối không gian, mang cà phê từ nông trại đến các điểm tiêu thụ.",
  },
  {
    key: "rang",
    num: "05",
    title: "Rang xay",
    worker: "Kỹ thuật viên rang xay",
    image: stepRoast,
    desc: "Kỹ thuật rang biến đổi hương vị, mùi thơm và đặc tính của hạt cà phê.",
    addedValue: "Biến đổi hóa học trong hạt, giải phóng hương thơm thanh khiết và vị đắng tinh tế.",
  },
  {
    key: "pha",
    num: "06",
    title: "Pha chế",
    worker: "Barista pha chế",
    image: stepBrew,
    desc: "Nhân viên pha chế biến nguyên liệu thành sản phẩm có thể được sử dụng trực tiếp.",
    addedValue: "Trích xuất tinh túy cà phê, tạo nên đồ uống sẵn sàng phục vụ người thưởng thức.",
  },
];

export const PRICE_FACTORS = [
  { key: "nguyenlieu", label: "Nguyên liệu", note: "Hạt cà phê nhân, nước tinh khiết, sữa, đường và các vật tư tiêu hao trực tiếp." },
  { key: "luong", label: "Tiền lương", note: "Chi trả cho lao động sống của barista, nhân viên phục vụ, quản lý cửa hàng." },
  { key: "maymoc", label: "Máy móc & khấu hao", note: "Khấu hao máy pha espresso, máy xay hạt, hệ thống lọc nước và làm mát." },
  { key: "matbang", label: "Mặt bằng", note: "Chi phí thuê địa điểm, chi phí điện nước và duy trì không gian phục vụ." },
  { key: "vanchuyen", label: "Vận chuyển", note: "Chi phí logistics đưa nguyên liệu từ xưởng rang về đến cửa hàng." },
  { key: "thue", label: "Thuế & quản lý", note: "Nghĩa vụ thuế giá trị gia tăng, thuế doanh nghiệp và chi phí quản lý." },
  { key: "cungcau", label: "Cung – cầu", note: "Tương quan sức mua và nguồn cung trên thị trường tại từng thời điểm." },
  { key: "vitri", label: "Vị trí cửa hàng", note: "Sự thuận tiện của địa điểm mang lại giá trị gia tăng cho trải nghiệm người dùng." },
  { key: "thuonghieu", label: "Thương hiệu", note: "Giá trị uy tín, định vị cảm xúc và cam kết chất lượng của thương hiệu." },
  { key: "canhtranh", label: "Mức độ cạnh tranh", note: "Áp lực từ giá bán và trải nghiệm của các cửa hàng cà phê đối thủ." },
];

export const INTEREST_CHOICES = [
  {
    key: "A",
    label: "A. Tự động hóa ngay lập tức",
    perspectives: {
      worker: "Một số công việc thủ công bị cắt giảm. Người lao động chịu áp lực mất việc hoặc phải nhanh chóng học kỹ năng mới.",
      firm: "Tăng mạnh năng suất, giảm chi phí vận hành dài hạn nhưng chịu rủi ro vốn đầu tư ban đầu lớn.",
      state: "Cần tăng cường hỗ trợ an sinh xã hội, giải quyết bài toán trợ cấp thất nghiệp và hỗ trợ chuyển đổi nghề.",
    },
  },
  {
    key: "B",
    label: "B. Không thay đổi công nghệ",
    perspectives: {
      worker: "Việc làm thủ công ngắn hạn được giữ nguyên, nhưng thu nhập có nguy cơ giậm chân tại chỗ.",
      firm: "Tiết kiệm chi phí đầu tư máy móc mới nhưng đối mặt với nguy cơ tụt hậu cạnh tranh trên thị trường.",
      state: "Áp lực an sinh xã hội ngắn hạn thấp, nhưng tốc độ hiện đại hóa nền kinh tế bị chậm lại.",
    },
  },
  {
    key: "C",
    label: "C. Tự động hóa kết hợp đào tạo lại người lao động",
    perspectives: {
      worker: "Được đào tạo nâng cao tay nghề, chuyển sang vận hành máy móc hiện đại với mức lương và vị thế tốt hơn.",
      firm: "Nâng cao năng suất đồng thời giữ chân được lực lượng lao động am hiểu sản phẩm và gắn bó.",
      state: "Mô hình phát triển bền vững, hài hòa giữa tăng trưởng kinh tế và nâng cao chất lượng nguồn nhân lực.",
    },
  },
];

export const QUIZ = [
  {
    q: "Khi hạt cà phê được sản xuất nhằm mục đích trao đổi trên thị trường, nó trở thành:",
    options: [
      "A. Tư liệu lao động.",
      "B. Hàng hóa.",
      "C. Tiền tệ.",
      "D. Vốn cố định.",
    ],
    answer: 1,
    explain: "Sản phẩm trở thành hàng hóa khi được tạo ra nhằm đáp ứng nhu cầu của người khác thông qua trao đổi hoặc mua bán.",
  },
  {
    q: "Lao động cụ thể tạo ra:",
    options: [
      "A. Giá trị sử dụng.",
      "B. Tiền lương.",
      "C. Giá cả thị trường.",
      "D. Lợi nhuận.",
    ],
    answer: 0,
    explain: "Lao động cụ thể tạo ra giá trị sử dụng; lao động trừu tượng tạo ra giá trị của hàng hóa.",
  },
  {
    q: "Lượng giá trị hàng hóa chủ yếu được đo bằng:",
    options: [
      "A. Thời gian lao động cá biệt.",
      "B. Số người tham gia sản xuất.",
      "C. Thời gian lao động xã hội cần thiết.",
      "D. Giá bán cuối cùng.",
    ],
    answer: 2,
    explain: "Lượng giá trị được xác định bởi thời gian lao động xã hội cần thiết, tức thời gian trong điều kiện sản xuất phổ biến của xã hội.",
  },
  {
    q: "Tiền lương trong lý luận Kinh tế Chính trị Mác–Lênin là hình thức biểu hiện bằng tiền của:",
    options: [
      "A. Toàn bộ giá trị do người lao động tạo ra.",
      "B. Giá cả hàng hóa sức lao động.",
      "C. Toàn bộ lợi nhuận.",
      "D. Giá trị máy móc.",
    ],
    answer: 1,
    explain: "Tiền lương là hình thức biểu hiện bằng tiền của giá cả hàng hóa sức lao động.",
  },
  {
    q: "Nhận định nào chính xác nhất?",
    options: [
      "A. Giá trị luôn bằng giá bán.",
      "B. Lợi nhuận luôn bằng giá trị thặng dư.",
      "C. Giá cả có thể dao động quanh giá trị dưới tác động của thị trường.",
      "D. Làm lâu hơn luôn tạo ra hàng hóa có giá trị cao hơn.",
    ],
    answer: 2,
    explain: "Giá trị được hình thành trên cơ sở lao động xã hội cần thiết. Giá cả là biểu hiện bằng tiền của giá trị và dao động quanh giá trị dưới tác động của cung – cầu, cạnh tranh, thương hiệu…",
  },
];

export interface TeamMember {
  name: string;
  code?: string;
  isLeader?: boolean;
}

export const TEAM: TeamMember[] = [
  { name: "Khúc Ngọc Tuấn", code: "HE163753", isLeader: false },
  { name: "Nguyễn Khánh Toàn", code: "HE180269", isLeader: false },
  { name: "Vũ Trường Giang", code: "HE170669", isLeader: false },
  { name: "Lương Trọng Nghĩa", code: "HE181385", isLeader: true },
  { name: "Lương Trung Kiên", code: "HE150577", isLeader: false },
  { name: "Võ Trọng Hải", code: "HE181414", isLeader: false },
  { name: "Dương Ngọc Tú", code: "", isLeader: false },
  { name: "Phan Khắc Hoàn", code: "HE151144", isLeader: false },
  { name: "Ngô Chí Cường", code: "HE160282", isLeader: false },
];

export const REFERENCES = [
  "Giáo trình Kinh tế Chính trị Mác – Lênin (Bộ Giáo dục và Đào tạo dành cho bậc đại học không chuyên lý luận chính trị).",
  "Tài liệu bài giảng và hướng dẫn thảo luận môn học MLN122.",
  "Các tư liệu nghiên cứu về chuỗi giá trị cà phê Việt Nam và thị trường nông sản quốc tế.",
];

export const DISCLAIMER = "Website là sản phẩm học tập của sinh viên, được xây dựng nhằm minh họa kiến thức Kinh tế Chính trị Mác–Lênin. Các tình huống, thời gian và con số được sử dụng trong infographic chỉ mang tính minh họa, không đại diện cho hoạt động của một doanh nghiệp cụ thể và không phải mô hình dự báo kinh tế.";
