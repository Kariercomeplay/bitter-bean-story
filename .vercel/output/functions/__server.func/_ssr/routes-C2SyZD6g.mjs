import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C2SyZD6g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var step_planting_default = "/assets/step-planting-D_L-R8mQ.jpg";
var step_harvest_default = "/assets/step-harvest-10EOwiUo.jpg";
var step_process_default = "/assets/step-process-gI4RApOS.jpg";
var step_transport_default = "/assets/step-transport-CnGSL-mb.jpg";
var step_roast_default = "/assets/step-roast-hM-Zdw-v.jpg";
var step_brew_default = "/assets/step-brew-XLwlV0a9.jpg";
var NAV = [
	{
		id: "hero",
		label: "KHỞI ĐẦU"
	},
	{
		id: "hanghoa",
		label: "HÀNG HÓA"
	},
	{
		id: "laodong",
		label: "LAO ĐỘNG"
	},
	{
		id: "giatri",
		label: "GIÁ TRỊ"
	},
	{
		id: "suclaodong",
		label: "SỨC LAO ĐỘNG"
	},
	{
		id: "giacagiatri",
		label: "GIÁ CẢ"
	},
	{
		id: "loiich",
		label: "LỢI ÍCH"
	},
	{
		id: "hoinhap",
		label: "HỘI NHẬP"
	},
	{
		id: "quiz",
		label: "TRẮC NGHIỆM"
	}
];
var LABOR_STEPS = [
	{
		key: "gieo",
		num: "01",
		title: "Gieo trồng",
		worker: "Người nông dân gieo trồng",
		image: step_planting_default,
		desc: "Người nông dân chuẩn bị đất, chăm sóc cây và bảo vệ mùa vụ.",
		addedValue: "Tạo nên mầm sống, sức khỏe và điều kiện sinh trưởng tối ưu cho hạt cà phê."
	},
	{
		key: "thu",
		num: "02",
		title: "Thu hoạch",
		worker: "Người lao động thu hoạch",
		image: step_harvest_default,
		desc: "Quả cà phê được lựa chọn và thu hái vào thời điểm phù hợp.",
		addedValue: "Lựa chọn quả chín mộng, bảo toàn hàm lượng đường và vị ngọt tự nhiên."
	},
	{
		key: "so",
		num: "03",
		title: "Sơ chế",
		worker: "Công nhân sơ chế",
		image: step_process_default,
		desc: "Quả được tách vỏ, lên men, rửa và phơi để hình thành cà phê nhân.",
		addedValue: "Tách vỏ thịt, định hình độ ẩm tiêu chuẩn và chuẩn hóa hương vị hạt nhân."
	},
	{
		key: "van",
		num: "04",
		title: "Vận chuyển",
		worker: "Tài xế & Nhân viên vận chuyển",
		image: step_transport_default,
		desc: "Hàng hóa được đưa từ vùng sản xuất đến cơ sở chế biến và thị trường.",
		addedValue: "Kết nối không gian, mang cà phê từ nông trại đến các điểm tiêu thụ."
	},
	{
		key: "rang",
		num: "05",
		title: "Rang xay",
		worker: "Kỹ thuật viên rang xay",
		image: step_roast_default,
		desc: "Kỹ thuật rang biến đổi hương vị, mùi thơm và đặc tính của hạt cà phê.",
		addedValue: "Biến đổi hóa học trong hạt, giải phóng hương thơm thanh khiết và vị đắng tinh tế."
	},
	{
		key: "pha",
		num: "06",
		title: "Pha chế",
		worker: "Barista pha chế",
		image: step_brew_default,
		desc: "Nhân viên pha chế biến nguyên liệu thành sản phẩm có thể được sử dụng trực tiếp.",
		addedValue: "Trích xuất tinh túy cà phê, tạo nên đồ uống sẵn sàng phục vụ người thưởng thức."
	}
];
var PRICE_FACTORS = [
	{
		key: "nguyenlieu",
		label: "Nguyên liệu",
		note: "Hạt cà phê nhân, nước tinh khiết, sữa, đường và các vật tư tiêu hao trực tiếp."
	},
	{
		key: "luong",
		label: "Tiền lương",
		note: "Chi trả cho lao động sống của barista, nhân viên phục vụ, quản lý cửa hàng."
	},
	{
		key: "maymoc",
		label: "Máy móc & khấu hao",
		note: "Khấu hao máy pha espresso, máy xay hạt, hệ thống lọc nước và làm mát."
	},
	{
		key: "matbang",
		label: "Mặt bằng",
		note: "Chi phí thuê địa điểm, chi phí điện nước và duy trì không gian phục vụ."
	},
	{
		key: "vanchuyen",
		label: "Vận chuyển",
		note: "Chi phí logistics đưa nguyên liệu từ xưởng rang về đến cửa hàng."
	},
	{
		key: "thue",
		label: "Thuế & quản lý",
		note: "Nghĩa vụ thuế giá trị gia tăng, thuế doanh nghiệp và chi phí quản lý."
	},
	{
		key: "cungcau",
		label: "Cung – cầu",
		note: "Tương quan sức mua và nguồn cung trên thị trường tại từng thời điểm."
	},
	{
		key: "vitri",
		label: "Vị trí cửa hàng",
		note: "Sự thuận tiện của địa điểm mang lại giá trị gia tăng cho trải nghiệm người dùng."
	},
	{
		key: "thuonghieu",
		label: "Thương hiệu",
		note: "Giá trị uy tín, định vị cảm xúc và cam kết chất lượng của thương hiệu."
	},
	{
		key: "canhtranh",
		label: "Mức độ cạnh tranh",
		note: "Áp lực từ giá bán và trải nghiệm của các cửa hàng cà phê đối thủ."
	}
];
var INTEREST_CHOICES = [
	{
		key: "A",
		label: "A. Tự động hóa ngay lập tức",
		perspectives: {
			worker: "Một số công việc thủ công bị cắt giảm. Người lao động chịu áp lực mất việc hoặc phải nhanh chóng học kỹ năng mới.",
			firm: "Tăng mạnh năng suất, giảm chi phí vận hành dài hạn nhưng chịu rủi ro vốn đầu tư ban đầu lớn.",
			state: "Cần tăng cường hỗ trợ an sinh xã hội, giải quyết bài toán trợ cấp thất nghiệp và hỗ trợ chuyển đổi nghề."
		}
	},
	{
		key: "B",
		label: "B. Không thay đổi công nghệ",
		perspectives: {
			worker: "Việc làm thủ công ngắn hạn được giữ nguyên, nhưng thu nhập có nguy cơ giậm chân tại chỗ.",
			firm: "Tiết kiệm chi phí đầu tư máy móc mới nhưng đối mặt với nguy cơ tụt hậu cạnh tranh trên thị trường.",
			state: "Áp lực an sinh xã hội ngắn hạn thấp, nhưng tốc độ hiện đại hóa nền kinh tế bị chậm lại."
		}
	},
	{
		key: "C",
		label: "C. Tự động hóa kết hợp đào tạo lại người lao động",
		perspectives: {
			worker: "Được đào tạo nâng cao tay nghề, chuyển sang vận hành máy móc hiện đại với mức lương và vị thế tốt hơn.",
			firm: "Nâng cao năng suất đồng thời giữ chân được lực lượng lao động am hiểu sản phẩm và gắn bó.",
			state: "Mô hình phát triển bền vững, hài hòa giữa tăng trưởng kinh tế và nâng cao chất lượng nguồn nhân lực."
		}
	}
];
var QUIZ = [
	{
		q: "Khi hạt cà phê được sản xuất nhằm mục đích trao đổi trên thị trường, nó trở thành:",
		options: [
			"A. Tư liệu lao động.",
			"B. Hàng hóa.",
			"C. Tiền tệ.",
			"D. Vốn cố định."
		],
		answer: 1,
		explain: "Sản phẩm trở thành hàng hóa khi được tạo ra nhằm đáp ứng nhu cầu của người khác thông qua trao đổi hoặc mua bán."
	},
	{
		q: "Lao động cụ thể tạo ra:",
		options: [
			"A. Giá trị sử dụng.",
			"B. Tiền lương.",
			"C. Giá cả thị trường.",
			"D. Lợi nhuận."
		],
		answer: 0,
		explain: "Lao động cụ thể tạo ra giá trị sử dụng; lao động trừu tượng tạo ra giá trị của hàng hóa."
	},
	{
		q: "Lượng giá trị hàng hóa chủ yếu được đo bằng:",
		options: [
			"A. Thời gian lao động cá biệt.",
			"B. Số người tham gia sản xuất.",
			"C. Thời gian lao động xã hội cần thiết.",
			"D. Giá bán cuối cùng."
		],
		answer: 2,
		explain: "Lượng giá trị được xác định bởi thời gian lao động xã hội cần thiết, tức thời gian trong điều kiện sản xuất phổ biến của xã hội."
	},
	{
		q: "Tiền lương trong lý luận Kinh tế Chính trị Mác–Lênin là hình thức biểu hiện bằng tiền của:",
		options: [
			"A. Toàn bộ giá trị do người lao động tạo ra.",
			"B. Giá cả hàng hóa sức lao động.",
			"C. Toàn bộ lợi nhuận.",
			"D. Giá trị máy móc."
		],
		answer: 1,
		explain: "Tiền lương là hình thức biểu hiện bằng tiền của giá cả hàng hóa sức lao động."
	},
	{
		q: "Nhận định nào chính xác nhất?",
		options: [
			"A. Giá trị luôn bằng giá bán.",
			"B. Lợi nhuận luôn bằng giá trị thặng dư.",
			"C. Giá cả có thể dao động quanh giá trị dưới tác động của thị trường.",
			"D. Làm lâu hơn luôn tạo ra hàng hóa có giá trị cao hơn."
		],
		answer: 2,
		explain: "Giá trị được hình thành trên cơ sở lao động xã hội cần thiết. Giá cả là biểu hiện bằng tiền của giá trị và dao động quanh giá trị dưới tác động của cung – cầu, cạnh tranh, thương hiệu…"
	}
];
var TEAM = [
	{
		name: "Nguyễn Văn A",
		role: "Nghiên cứu nội dung MLN122"
	},
	{
		name: "Trần Văn B",
		role: "Kịch bản và biên tập nội dung"
	},
	{
		name: "Lê Văn C",
		role: "Thiết kế UI/UX"
	},
	{
		name: "Phạm Văn D",
		role: "Phát triển website"
	},
	{
		name: "Hoàng Văn E",
		role: "Kiểm thử và thuyết trình"
	}
];
var REFERENCES = [
	"Giáo trình Kinh tế Chính trị Mác – Lênin (Bộ Giáo dục và Đào tạo dành cho bậc đại học không chuyên lý luận chính trị).",
	"Tài liệu bài giảng và hướng dẫn thảo luận môn học MLN122.",
	"Các tư liệu nghiên cứu về chuỗi giá trị cà phê Việt Nam và thị trường nông sản quốc tế."
];
var DISCLAIMER = "Website là sản phẩm học tập của sinh viên, được xây dựng nhằm minh họa kiến thức Kinh tế Chính trị Mác–Lênin. Các tình huống, thời gian và con số được sử dụng trong infographic chỉ mang tính minh họa, không đại diện cho hoạt động của một doanh nghiệp cụ thể và không phải mô hình dự báo kinh tế.";
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const y = window.scrollY;
			setScrolled(y > 50);
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(docHeight > 0 ? Math.min(100, Math.max(0, y / docHeight * 100)) : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const go = (id) => {
		setOpen(false);
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-paper/90 backdrop-blur-md border-b border-ink/10 shadow-sm py-3" : "bg-transparent py-5"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => go("hero"),
						className: "text-left group flex items-center gap-3 transition-opacity hover:opacity-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `font-display text-xl md:text-2xl tracking-tight transition-colors ${scrolled ? "text-ink" : "text-ivory"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-semibold",
								children: "Sau Vị Đắng"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `hidden sm:inline-block text-[11px] font-sans tracking-[0.2em] uppercase transition-colors border-l pl-3 ${scrolled ? "border-ink/20 text-roast/80" : "border-ivory/30 text-ivory/80"}`,
							children: "MLN122 · Sản phẩm sáng tạo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden lg:flex items-center gap-6",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go(n.id),
							className: `text-xs font-sans font-medium tracking-wider uppercase transition-colors ${scrolled ? "text-ink/75 hover:text-earth" : "text-ivory/80 hover:text-sun"}`,
							children: n.label
						}, n.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden sm:flex items-center gap-2 text-[11px] font-sans tracking-wider text-ink/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: scrolled ? "text-ink/60" : "text-ivory/70",
								children: [Math.round(progress), "%"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-1.5 w-16 rounded-full overflow-hidden ${scrolled ? "bg-ink/10" : "bg-ivory/20"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-sun transition-all duration-150",
									style: { width: `${progress}%` }
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `lg:hidden text-xs font-medium uppercase tracking-widest px-3 py-1.5 rounded border ${scrolled ? "border-ink/20 text-ink bg-paper/50" : "border-ivory/30 text-ivory bg-ink/30"}`,
							onClick: () => setOpen((o) => !o),
							"aria-label": "Toggle Navigation",
							children: open ? "Đóng" : "Menu"
						})]
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:hidden border-t border-ink/10 bg-paper/98 backdrop-blur-xl animate-fade-in shadow-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 py-6 flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-earth mb-1",
						children: "Điều hướng chương"
					}), NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go(n.id),
						className: "text-left text-sm font-medium text-ink hover:text-earth py-2 border-b border-ink/5",
						children: n.label
					}, n.id))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-[2px] w-full bg-transparent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-earth transition-all duration-150",
					style: { width: `${progress}%` }
				})
			})
		]
	});
}
function Hero() {
	const [scrollY, setScrollY] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const scrollNext = () => {
		document.getElementById("hanghoa")?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		className: "relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/assets/hero-coffee-hills-CCaEurx6.png",
				alt: "Người lao động trên nông trại cà phê vào buổi sáng sớm.",
				width: 1920,
				height: 1280,
				className: "absolute inset-0 h-[120%] w-full object-cover will-change-transform",
				style: { transform: `translate3d(0, ${scrollY * .28}px, 0)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/75 to-ink" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(196,154,88,0.15),transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-sun tracking-[0.3em]",
						children: "MLN122 · KINH TẾ CHÍNH TRỊ MÁC–LÊNIN"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 max-w-4xl font-display text-4xl leading-[1.1] text-ivory md:text-6xl lg:text-7xl",
						children: [
							"Sau vị đắng là cả một hành trình của",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic font-normal text-sun",
								children: "lao động và giá trị"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-ivory/85 md:text-lg",
						children: "Một ly cà phê chỉ mất vài phút để thưởng thức. Nhưng để có được nó, rất nhiều con người, công đoạn và quan hệ kinh tế đã cùng tham gia."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: scrollNext,
							className: "group inline-flex items-center gap-3 rounded-full bg-earth px-7 py-3.5 text-sm font-medium tracking-wide text-ivory shadow-lg shadow-earth/25 transition-all hover:bg-sun hover:text-ink hover:shadow-sun/30",
							children: ["KHÁM PHÁ HÀNH TRÌNH", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "transition-transform duration-200 group-hover:translate-x-1",
								children: "→"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: scrollNext,
							className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ivory/70 hover:text-ivory transition-colors",
							children: ["CUỘN XUỐNG", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "h-4 w-4 animate-bounce text-sun",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M19 14l-7 7m0 0l-7-7m7 7V3"
								})
							})]
						})]
					})
				]
			})
		]
	});
}
function SectionCommodity() {
	const [choice, setChoice] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hanghoa",
		className: "relative bg-paper py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-md shadow-2xl shadow-ink/15 border border-ink/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/assets/hands-harvest-KNiw9ufz.png",
							alt: "Một bàn tay đang hái quả cà phê chín đỏ trên nền lá xanh tự nhiên",
							width: 1400,
							height: 1600,
							loading: "lazy",
							className: "h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[600px]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-sun",
								children: "Hình ảnh tư liệu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-sm italic text-ivory/90",
								children: "Bàn tay thu hái quả cà phê chín mộng tại nông trại"
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-roast tracking-[0.25em]",
							children: "CHƯƠNG 01 · HÀNG HÓA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-3xl leading-tight text-ink md:text-5xl",
							children: [
								"Không phải mọi sản phẩm đều tự nhiên trở thành",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-earth",
									children: "hàng hóa"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base leading-relaxed text-ink/80 md:text-lg",
							children: "Hạt cà phê có công dụng đối với con người. Nhưng chỉ khi nó được sản xuất để trao đổi hoặc mua bán trên thị trường, nó mới trở thành hàng hóa."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 rounded-lg border border-ink/15 bg-ivory p-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest font-semibold text-roast mb-4",
									children: "Tình huống thực tế — Chọn một trường hợp:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setChoice("A"),
										className: `rounded-md border p-4 text-left transition-all ${choice === "A" ? "border-earth bg-earth/10 text-earth font-medium shadow-inner" : "border-ink/20 text-ink/80 hover:border-earth/50 hover:bg-paper"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs uppercase tracking-wider text-earth font-semibold mb-1",
											children: "Trường hợp A"
										}), "Trồng để gia đình sử dụng"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setChoice("B"),
										className: `rounded-md border p-4 text-left transition-all ${choice === "B" ? "border-earth bg-earth/10 text-earth font-medium shadow-inner" : "border-ink/20 text-ink/80 hover:border-earth/50 hover:bg-paper"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs uppercase tracking-wider text-earth font-semibold mb-1",
											children: "Trường hợp B"
										}), "Trồng để bán trên thị trường"]
									})]
								}),
								choice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 rounded-md border-l-4 border-earth bg-paper p-4 text-sm leading-relaxed text-ink/90 animate-fade-in",
									children: choice === "A" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-earth",
										children: "Kết quả:"
									}), " Đây là một sản phẩm phục vụ nhu cầu trực tiếp, chưa phải hàng hóa."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-earth",
										children: "Kết quả:"
									}), " Sản phẩm được tạo ra nhằm mục đích trao đổi, vì vậy nó mang hình thái hàng hóa."] })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 border-t border-ink/10 pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-roast mb-4",
									children: "Hai thuộc tính và hình thức biểu hiện"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-md border border-ink/10 bg-ivory p-5 transition-shadow hover:shadow-md",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs uppercase tracking-wider text-roast font-semibold block",
													children: "01"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-lg italic text-earth mt-1",
													children: "Giá trị sử dụng"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-xs leading-relaxed text-ink/75",
													children: "Công dụng của sản phẩm có khả năng đáp ứng một nhu cầu nhất định của con người."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-md border border-ink/10 bg-ivory p-5 transition-shadow hover:shadow-md",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs uppercase tracking-wider text-roast font-semibold block",
													children: "02"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-lg italic text-earth mt-1",
													children: "Giá trị"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-xs leading-relaxed text-ink/75",
													children: "Lao động xã hội của người sản xuất hàng hóa được kết tinh trong hàng hóa."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-md border border-ink/10 bg-ivory p-5 transition-shadow hover:shadow-md",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs uppercase tracking-wider text-roast font-semibold block",
													children: "03"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-lg italic text-earth mt-1",
													children: "Giá trị trao đổi"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-xs leading-relaxed text-ink/75",
													children: "Hình thức biểu hiện của giá trị thông qua quan hệ trao đổi giữa các hàng hóa."
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 rounded-md bg-ink/5 p-4 border border-ink/10 text-xs leading-relaxed text-ink/80",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-earth uppercase tracking-wider",
											children: "Lưu ý học thuật:"
										}),
										" ",
										"Giá trị sử dụng và giá trị là hai thuộc tính của hàng hóa. Giá trị trao đổi là hình thức biểu hiện của giá trị, không nên đồng nhất ba khái niệm này."
									] })
								})
							]
						})
					]
				})]
			})
		})
	});
}
function SectionLabor() {
	const [activeIdx, setActiveIdx] = (0, import_react.useState)(0);
	const step = LABOR_STEPS[activeIdx];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "laodong",
		className: "relative bg-ivory py-24 md:py-32 border-t border-ink/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-roast tracking-[0.25em]",
							children: "CHƯƠNG 02 · LAO ĐỘNG"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-3xl leading-tight text-ink md:text-5xl",
							children: [
								"Một ly cà phê không được tạo nên bởi",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-earth",
									children: "một người duy nhất"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-ink/80 md:text-lg",
							children: "Từ nông trại đến quầy phục vụ, rất nhiều dạng lao động cụ thể đã cùng tạo ra công dụng cuối cùng của sản phẩm."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-ink/10 bg-paper p-6 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-roast mb-6",
								children: "Hành trình 6 công đoạn lao động"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "relative border-l-2 border-sun/40 space-y-4",
								children: LABOR_STEPS.map((s, i) => {
									const isActive = i === activeIdx;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "pl-6 relative",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setActiveIdx(i),
											className: `group flex w-full flex-col text-left transition-all ${isActive ? "opacity-100" : "opacity-60 hover:opacity-90"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 transition-all ${isActive ? "border-earth bg-earth scale-110 shadow-sm" : "border-roast bg-ivory group-hover:border-earth"}` }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[11px] font-sans font-semibold tracking-widest uppercase text-earth",
													children: ["Công đoạn ", s.num]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `font-display text-xl ${isActive ? "text-ink font-semibold" : "text-ink/70"}`,
													children: s.title
												})
											]
										})
									}, s.key);
								})
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-ink/15 bg-paper p-6 shadow-lg animate-fade-in",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-md h-[320px] md:h-[400px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: step.image,
									alt: step.title,
									width: 1200,
									height: 800,
									loading: "lazy",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-4 left-4 bg-ink/80 backdrop-blur px-3 py-1.5 rounded text-xs text-sun font-sans tracking-widest uppercase",
									children: [
										"Công đoạn ",
										step.num,
										" / 06"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow text-roast block",
										children: "Chủ thể lao động"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl text-ink font-semibold mt-1",
										children: step.worker
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-ink/10 pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow text-roast block mb-1",
											children: "Công việc thực hiện"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-base text-ink/85 leading-relaxed",
											children: step.desc
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-md border-l-4 border-leaf bg-ivory p-4 border border-ink/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow text-leaf block mb-1",
											children: "Giá trị sử dụng được tạo thêm"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-ink/90 italic font-display",
											children: [
												"“",
												step.addedValue,
												"”"
											]
										})]
									})
								]
							})]
						}, step.key)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 border-t border-ink/15 pt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-ink/15 bg-paper p-8 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-leaf tracking-widest",
									children: "Khái niệm 01"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-2xl text-ink",
									children: "Lao động cụ thể"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink/80",
									children: [
										"Lao động dưới một hình thức nghề nghiệp cụ thể như trồng trọt, vận chuyển, rang xay hoặc pha chế. Lao động cụ thể tạo ra ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "keyword",
											children: "giá trị sử dụng"
										}),
										"."
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-ink/20 bg-ink text-ivory p-8 shadow-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-sun tracking-widest",
									children: "Khái niệm 02"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-2xl text-ivory",
									children: "Lao động trừu tượng"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm leading-relaxed text-ivory/85",
									children: [
										"Sự hao phí sức lao động của con người nói chung, không xét đến hình thức nghề nghiệp cụ thể. Lao động trừu tượng tạo ra ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "keyword text-sun",
											children: "giá trị của hàng hóa"
										}),
										"."
									]
								})
							]
						})]
					})
				})
			]
		})
	});
}
function SectionSNLT() {
	const [choice, setChoice] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "giatri",
		className: "relative bg-paper py-24 md:py-32 border-t border-ink/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-roast tracking-[0.25em]",
							children: "CHƯƠNG 03 · LƯỢNG GIÁ TRỊ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-3xl leading-tight text-ink md:text-5xl",
							children: [
								"Làm lâu hơn chưa chắc làm hàng hóa có",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-earth",
									children: "giá trị lớn hơn"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-ink/80 md:text-lg",
							children: "Đây là câu hỏi cốt lõi để tránh hiểu sai về lượng giá trị của một hàng hóa khi được sản xuất ở các điều kiện kỹ thuật khác nhau."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-ink/15 bg-ivory p-8 shadow-sm flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-earth",
									children: "Cơ sở A"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs bg-earth/10 text-earth px-2.5 py-1 rounded font-mono font-medium",
									children: "Cá biệt A"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-5xl text-ink font-semibold",
								children: "10 giờ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-ink/70",
								children: "để xử lý một lô cà phê nhân"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded bg-paper p-3 text-xs text-ink/80 border border-ink/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Đặc điểm:" }), " Thiết bị cũ, quy trình thủ công, kém hiệu quả hơn mặt bằng chung."]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 h-3 w-full rounded-full bg-ink/10 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full rounded-full bg-earth w-full" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-ink/15 bg-ivory p-8 shadow-sm flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-leaf",
									children: "Cơ sở B"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs bg-leaf/10 text-leaf px-2.5 py-1 rounded font-mono font-medium",
									children: "Mức phổ biến"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-5xl text-ink font-semibold",
								children: "6 giờ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-ink/70",
								children: "để xử lý một lô cà phê nhân"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded bg-paper p-3 text-xs text-ink/80 border border-ink/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Đặc điểm:" }), " Điều kiện sản xuất phổ biến trên thị trường, công nghệ đạt mức trung bình xã hội."]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 h-3 w-full rounded-full bg-ink/10 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full rounded-full bg-leaf w-[60%]" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 rounded-lg overflow-hidden border border-ink/10 max-h-[280px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/facility-compare-C5XvUWcK.png",
						alt: "So sánh hai cơ sở sản xuất có mức độ công nghệ khác nhau",
						className: "w-full h-full object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-lg border border-ink/15 bg-ivory p-6 md:p-8 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-wider text-roast mb-4",
							children: "Câu hỏi thảo luận: Lượng giá trị nên được tính theo 10 giờ hay 6 giờ?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setChoice("A"),
									className: `rounded-md border px-5 py-3 text-sm font-medium transition-all ${choice === "A" ? "border-earth bg-earth text-ivory shadow" : "border-ink/20 text-ink/80 hover:border-earth/60 hover:bg-paper"}`,
									children: "10 giờ (Cơ sở A)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setChoice("B"),
									className: `rounded-md border px-5 py-3 text-sm font-medium transition-all ${choice === "B" ? "border-earth bg-earth text-ivory shadow" : "border-ink/20 text-ink/80 hover:border-earth/60 hover:bg-paper"}`,
									children: "6 giờ (Cơ sở B)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setChoice("social"),
									className: `rounded-md border px-5 py-3 text-sm font-medium transition-all ${choice === "social" ? "border-earth bg-earth text-ivory shadow" : "border-ink/20 text-ink/80 hover:border-earth/60 hover:bg-paper"}`,
									children: "Thời gian lao động xã hội cần thiết"
								})
							]
						}),
						choice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-md border-l-4 border-earth bg-paper p-6 animate-fade-in",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-earth font-bold tracking-widest block mb-1",
									children: "THỜI GIAN LAO ĐỘNG XÃ HỘI CẦN THIẾT"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base text-ink font-medium leading-relaxed",
									children: "Lượng giá trị hàng hóa không do thời gian cá biệt của một người sản xuất quyết định. Nó được đo bằng thời gian lao động xã hội cần thiết trong điều kiện sản xuất bình thường của xã hội."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-ink/10 pt-3 text-xs leading-relaxed text-ink/80 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "· Một cơ sở làm việc chậm hơn mức phổ biến không thể tự động bán sản phẩm với giá cao hơn chỉ vì đã sử dụng nhiều thời gian hơn." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "· Năng suất lao động tăng có thể làm giảm lượng thời gian cần thiết để tạo ra một đơn vị hàng hóa, từ đó giảm lượng giá trị của một đơn vị hàng hóa đó." })]
							})]
						})
					]
				})
			]
		})
	});
}
var labor_power_default = "/assets/labor-power-DBbCnk84.png";
function SectionLaborPower() {
	const [hoveredPart, setHoveredPart] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "suclaodong",
		className: "relative bg-ink text-ivory py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-sun tracking-[0.25em]",
						children: "CHƯƠNG 04 · SỨC LAO ĐỘNG"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-3xl leading-tight md:text-5xl",
						children: [
							"Người lao động không bán chính bản thân mình. Họ bán",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-sun",
								children: "khả năng lao động"
							}),
							" trong một khoảng thời gian nhất định."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-10 lg:grid-cols-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-md border border-ivory/15 shadow-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: labor_power_default,
								alt: "Nhân viên rang xay và chế biến cà phê trong xưởng sản xuất",
								width: 1200,
								height: 900,
								loading: "lazy",
								className: "h-[360px] w-full object-cover md:h-[420px]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-sun",
									children: "Hàng hóa sức lao động"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-ivory/80 italic mt-1 font-display",
									children: "Sức lao động trở thành hàng hóa khi người lao động được tự do về thân thể và không có tư liệu sản xuất."
								})]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-ivory/15 bg-roast/30 p-6 md:p-8 shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-sun mb-2",
									children: "Infographic phân chia ngày lao động (8 giờ minh họa)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs font-mono text-ivory/60 mb-2 px-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "08:00" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "12:00" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "16:00" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-16 w-full overflow-hidden rounded border border-ivory/20 shadow-inner",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onMouseEnter: () => setHoveredPart("necessary"),
										onMouseLeave: () => setHoveredPart(null),
										onClick: () => setHoveredPart("necessary"),
										className: `w-1/2 flex flex-col items-center justify-center transition-all px-2 ${hoveredPart === "necessary" ? "bg-leaf text-ivory scale-[1.02] z-10 shadow-lg" : "bg-leaf/80 text-ivory/90 hover:bg-leaf"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold uppercase tracking-wider",
											children: "Lao động cần thiết"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] opacity-80",
											children: "(08:00 – 12:00)"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onMouseEnter: () => setHoveredPart("surplus"),
										onMouseLeave: () => setHoveredPart(null),
										onClick: () => setHoveredPart("surplus"),
										className: `w-1/2 flex flex-col items-center justify-center transition-all px-2 ${hoveredPart === "surplus" ? "bg-earth text-ivory scale-[1.02] z-10 shadow-lg" : "bg-earth/80 text-ivory/90 hover:bg-earth"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold uppercase tracking-wider",
											children: "Lao động thặng dư"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] opacity-80",
											children: "(12:00 – 16:00)"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 rounded border border-ivory/10 bg-ink/60 p-4 text-xs leading-relaxed text-ivory/90 min-h-[80px]",
									children: [
										hoveredPart === "necessary" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "animate-fade-in",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-sun block text-sm mb-1",
												children: "Thời gian lao động cần thiết:"
											}), "Khoảng thời gian người lao động tạo ra lượng giá trị tương ứng với giá trị sức lao động của mình (tương ứng giá trị tư liệu sinh hoạt cần thiết)."]
										}),
										hoveredPart === "surplus" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "animate-fade-in",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-earth block text-sm mb-1",
												children: "Thời gian lao động thặng dư:"
											}), "Khoảng thời gian người lao động tiếp tục tạo ra giá trị vượt quá giá trị sức lao động, là nguồn gốc hình thành giá trị thặng dư."]
										}),
										!hoveredPart && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-ivory/60 italic",
											children: "Rê chuột hoặc nhấn vào từng khoảng thời gian 4h để xem định nghĩa chi tiết."
										})
									]
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 rounded-lg border border-sun/30 bg-roast/40 p-6 md:p-8 shadow-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-sun animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "eyebrow text-sun text-sm font-semibold tracking-wider",
								children: "LƯU Ý HỌC THUẬT BẮT BUỘC"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-ivory font-medium",
							children: "Đây là mô hình minh họa lý luận. Không thể lấy trực tiếp giá bán một ly cà phê trừ tiền lương để kết luận phần còn lại là giá trị thặng dư."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-xs leading-relaxed text-ivory/80 border-t border-ivory/10 pt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sun",
										children: "1."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tiền lương là hình thức biểu hiện bằng tiền của giá cả hàng hóa sức lao động." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sun",
										children: "2."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Giá trị thặng dư không đồng nhất hoàn toàn với lợi nhuận kế toán của doanh nghiệp." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sun",
										children: "3."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Giá bán thực tế còn chịu ảnh hưởng của chi phí nguyên vật liệu, khấu hao máy móc, mặt bằng, cung cầu, cạnh tranh, thuế, thương hiệu và điều kiện thị trường." })]
								})
							]
						})
					]
				})
			]
		})
	});
}
function SectionValuePrice() {
	const [selectedFactors, setSelectedFactors] = (0, import_react.useState)(["nguyenlieu", "luong"]);
	const toggleFactor = (key) => {
		setSelectedFactors((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "giacagiatri",
		className: "relative bg-paper py-24 md:py-32 border-t border-ink/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-roast tracking-[0.25em]",
						children: "CHƯƠNG 05 · GIÁ TRỊ VÀ GIÁ CẢ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-3xl leading-tight text-ink md:text-5xl",
						children: [
							"Con số trên hóa đơn chưa kể hết",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-earth",
								children: "câu chuyện"
							}),
							" của một ly cà phê."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative flex h-[340px] w-full max-w-sm items-center justify-center rounded-2xl bg-ivory p-8 border border-ink/10 shadow-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative flex flex-col items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "h-56 w-56 rounded-full border-[12px] border-ink bg-gradient-to-br from-roast via-ink to-[#1a110d] shadow-2xl flex items-center justify-center relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-32 w-32 rounded-full bg-roast/60 border border-sun/20 backdrop-blur" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-0 flex flex-col items-center justify-center text-center p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "eyebrow text-sun text-[10px] tracking-widest uppercase",
												children: "GIÁ BÁN MINH HỌA"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-4xl text-ivory font-bold mt-1",
												children: "50.000 VNĐ"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-ivory/70 italic mt-1 font-sans",
												children: "(Con số mang tính minh họa)"
											})
										]
									})]
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center text-xs text-ink/60 italic max-w-xs",
							children: "Con số 50.000 VNĐ trên hóa đơn là biểu hiện bằng tiền của giá cả, không đồng nhất với giá trị thuần túy."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-wider text-roast mb-3",
								children: "Nhấn vào các thành phần tác động tới cấu thành giá cả thực tế:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: PRICE_FACTORS.map((f) => {
									const active = selectedFactors.includes(f.key);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => toggleFactor(f.key),
										className: `rounded-full border px-4 py-2 text-xs font-medium transition-all ${active ? "border-earth bg-earth text-ivory shadow-sm scale-105" : "border-ink/20 text-ink/75 bg-ivory hover:border-earth/50"}`,
										children: [
											f.label,
											" ",
											active ? "✓" : "+"
										]
									}, f.key);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-2 max-h-[220px] overflow-y-auto pr-2",
								children: selectedFactors.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-ink/50 italic p-3 bg-ivory rounded border border-ink/10",
									children: "Hãy nhấn vào các yếu tố trên để xem giải thích."
								}) : PRICE_FACTORS.filter((f) => selectedFactors.includes(f.key)).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-md border-l-3 border-earth bg-ivory p-3.5 text-xs text-ink/85 border border-ink/10 animate-fade-in",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
										className: "text-earth font-semibold block mb-0.5",
										children: [f.label, ":"]
									}), f.note]
								}, f.key))
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 border-t border-ink/10 pt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-ink/15 bg-ivory p-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-earth font-bold",
									children: "Thuộc tính bản chất"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-ink mt-1",
									children: "Giá trị"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink/80",
									children: [
										"Được hình thành trên cơ sở ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "keyword",
											children: "lao động xã hội cần thiết"
										}),
										" kết tinh trong hàng hóa."
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-ink/20 bg-ink text-ivory p-6 shadow-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-sun font-bold",
									children: "Biểu hiện thị trường"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-ivory mt-1",
									children: "Giá cả"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ivory/85",
									children: "Là biểu hiện bằng tiền của giá trị và có thể dao động do cung cầu, cạnh tranh cùng nhiều điều kiện thị trường khác."
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 rounded-lg bg-earth/10 border border-earth/20 p-5 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg italic text-earth font-medium",
							children: "“Giá cả có thể cao hơn hoặc thấp hơn giá trị trong từng điều kiện cụ thể. Vì vậy, không nên đồng nhất giá bán với giá trị hàng hóa.”"
						})
					})]
				})
			]
		})
	});
}
function SectionInterest() {
	const [selectedKey, setSelectedKey] = (0, import_react.useState)("C");
	const activeChoice = INTEREST_CHOICES.find((c) => c.key === selectedKey);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "loiich",
		className: "relative bg-ivory py-24 md:py-32 border-t border-ink/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-roast tracking-[0.25em]",
						children: "CHƯƠNG 06 · QUAN HỆ LỢI ÍCH"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-3xl leading-tight text-ink md:text-5xl",
						children: [
							"Một quyết định kinh tế có thể tạo",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-earth",
								children: "cơ hội"
							}),
							" cho người này và",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-earth",
								children: "áp lực"
							}),
							" cho người khác."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-lg border border-ink/15 bg-paper p-6 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-earth font-bold block mb-1",
						children: "Tình huống quyết định"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-ink/85 font-sans",
						children: "Một doanh nghiệp chế biến cà phê dự định đưa hệ thống phân loại tự động vào sản xuất. Máy móc mới có thể tăng năng suất nhưng một số công việc thủ công sẽ không còn cần thiết."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: INTEREST_CHOICES.map((c) => {
						const isSelected = c.key === selectedKey;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedKey(c.key),
							className: `rounded-lg border p-6 text-left transition-all ${isSelected ? "border-earth bg-earth/10 shadow-md ring-1 ring-earth" : "border-ink/15 bg-paper hover:border-earth/50"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `font-display text-lg ${isSelected ? "text-earth font-semibold" : "text-ink"}`,
								children: c.label
							})
						}, c.key);
					})
				}),
				activeChoice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3 animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-ink/10 border-l-4 border-l-earth bg-paper p-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-earth font-bold block",
									children: "01 · Người lao động"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink/85",
									children: activeChoice.perspectives.worker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 border-t border-ink/10 pt-3 text-[11px] text-ink/60 space-y-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "· Yếu tố tác động: Việc làm, Thu nhập, Yêu cầu kỹ năng, Cơ hội đào tạo." })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-ink/10 border-l-4 border-l-sun bg-paper p-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-sun font-bold block",
									children: "02 · Doanh nghiệp"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink/85",
									children: activeChoice.perspectives.firm
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 border-t border-ink/10 pt-3 text-[11px] text-ink/60 space-y-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "· Yếu tố tác động: Năng suất, Chi phí, Khả năng cạnh tranh, Hiệu quả dài hạn." })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-ink/10 border-l-4 border-l-leaf bg-paper p-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-leaf font-bold block",
									children: "03 · Nhà nước và xã hội"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink/85",
									children: activeChoice.perspectives.state
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 border-t border-ink/10 pt-3 text-[11px] text-ink/60 space-y-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "· Yếu tố tác động: Chất lượng nguồn nhân lực, An sinh xã hội, Năng lực sản xuất, Chính sách hỗ trợ chuyển đổi nghề." })
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 rounded-lg bg-ink text-ivory p-6 md:p-8 shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-sun block mb-2",
						children: "Kết luận lý luận"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg leading-relaxed text-ivory/90 font-medium",
						children: "Trong nền kinh tế tồn tại nhiều nhóm lợi ích khác nhau. Vai trò của chính sách không chỉ là lựa chọn một bên, mà còn là nhận diện, điều hòa và tạo điều kiện để các lợi ích chính đáng được thực hiện."
					})]
				})
			]
		})
	});
}
var NODES = [
	{
		id: 1,
		label: "Nông trại",
		sub: "Trồng trọt & Thu hoạch"
	},
	{
		id: 2,
		label: "Cơ sở sơ chế",
		sub: "Phơi sấy & Nhân cà phê"
	},
	{
		id: 3,
		label: "Nhà máy",
		sub: "Phân loại & Đóng gói"
	},
	{
		id: 4,
		label: "Cảng",
		sub: "Xuất khẩu logistics"
	},
	{
		id: 5,
		label: "Nhà rang xay",
		sub: "Chế biến & Định vị vị"
	},
	{
		id: 6,
		label: "Cửa hàng",
		sub: "Phân phối & Pha chế"
	},
	{
		id: 7,
		label: "Người tiêu dùng",
		sub: "Thưởng thức & Trải nghiệm"
	}
];
function SectionIntegration() {
	const [activeNode, setActiveNode] = (0, import_react.useState)(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hoinhap",
		className: "relative bg-ink text-ivory py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-sun tracking-[0.25em]",
						children: "CHƯƠNG 07 · HỘI NHẬP"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-3xl leading-tight md:text-5xl",
						children: [
							"Một hạt cà phê có thể đi qua nhiều",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-sun",
								children: "quốc gia"
							}),
							" trước khi đến tay người tiêu dùng."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 rounded-lg border border-ivory/15 bg-roast/20 p-6 md:p-10 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-sun mb-4",
						children: "Sơ đồ tuyến đường chuỗi giá trị toàn cầu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative py-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 700 80",
							className: "w-full h-auto overflow-visible",
							role: "img",
							"aria-label": "Vector chuỗi cung ứng",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M 20 40 Q 120 15 220 40 T 420 40 T 620 40 T 680 40",
								fill: "none",
								stroke: "#C49A58",
								strokeWidth: "2",
								strokeDasharray: "4 4",
								className: "opacity-60"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 -mt-16 relative z-10",
							children: NODES.map((n) => {
								const isActive = n.id === activeNode;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveNode(n.id),
									className: `flex flex-col items-center text-center p-3 rounded-lg border transition-all ${isActive ? "border-sun bg-sun/20 shadow-lg scale-105" : "border-ivory/10 bg-ink/60 hover:border-sun/40"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-4 w-4 rounded-full border-2 mb-2 transition-colors ${isActive ? "border-sun bg-earth animate-pulse" : "border-ivory/40 bg-ink"}` }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] font-mono text-sun uppercase tracking-wider",
											children: ["Bước 0", n.id]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `font-display text-sm font-semibold mt-1 ${isActive ? "text-sun" : "text-ivory"}`,
											children: n.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-ivory/60 mt-0.5",
											children: n.sub
										})
									]
								}, n.id);
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-ivory/15 bg-roast/30 p-6 md:p-8 shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-sun font-bold block mb-3",
							children: "Cơ hội"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-xs leading-relaxed text-ivory/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sun",
										children: "✓"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mở rộng thị trường tiêu thụ nông sản ra toàn thế giới." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sun",
										children: "✓"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tiếp cận công nghệ chế biến, bảo quản và máy móc hiện đại." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sun",
										children: "✓"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Thu hút nguồn vốn đầu tư quốc tế và tạo thêm nhiều việc làm." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sun",
										children: "✓"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tham gia sâu hơn vào chuỗi giá trị nông sản quốc tế." })]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-ivory/15 bg-roast/30 p-6 md:p-8 shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-earth font-bold block mb-3",
							children: "Thách thức"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-xs leading-relaxed text-ivory/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-earth",
										children: "!"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Áp lực cạnh tranh gay gắt từ các thương hiệu quốc tế lớn." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-earth",
										children: "!"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nguy cơ phụ thuộc vào sự biến động của thị trường bên ngoài." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-earth",
										children: "!"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Giá trị gia tăng có thể bị tập trung phần lớn ở các công đoạn thương hiệu và phân phối." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-earth",
										children: "!"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Yêu cầu ngày càng khắt khe về chất lượng, nguồn gốc và bảo vệ môi trường." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-earth",
										children: "!"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cần không ngừng nâng cao năng lực tự chủ kinh tế quốc gia." })]
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 rounded-lg bg-sun/10 border border-sun/20 p-6 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg italic text-sun font-medium leading-relaxed",
						children: "“Hội nhập không chỉ là bán được nhiều sản phẩm hơn. Vấn đề quan trọng còn nằm ở vị trí của người sản xuất và quốc gia trong chuỗi giá trị.”"
					})
				})
			]
		})
	});
}
function Quiz() {
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [userAnswers, setUserAnswers] = (0, import_react.useState)([]);
	const [selectedOption, setSelectedOption] = (0, import_react.useState)(null);
	const [isFinished, setIsFinished] = (0, import_react.useState)(false);
	const currentQ = QUIZ[idx];
	const score = userAnswers.filter((ans, i) => ans === QUIZ[i].answer).length;
	const handlePick = (optionIdx) => {
		if (selectedOption !== null) return;
		setSelectedOption(optionIdx);
		setUserAnswers((prev) => [...prev, optionIdx]);
	};
	const handleNext = () => {
		if (idx + 1 < QUIZ.length) {
			setIdx((i) => i + 1);
			setSelectedOption(null);
		} else setIsFinished(true);
	};
	const handleRestart = () => {
		setIdx(0);
		setUserAnswers([]);
		setSelectedOption(null);
		setIsFinished(false);
	};
	const handleScrollTop = () => {
		document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "quiz",
		className: "relative bg-paper py-24 md:py-32 border-t border-ink/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-roast tracking-[0.25em]",
					children: "TRẮC NGHIỆM KIỂM TRA"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl text-ink md:text-5xl",
					children: "Bạn đã nhìn thấy điều gì phía sau một ly cà phê?"
				})]
			}), !isFinished ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-lg border border-ink/15 bg-ivory p-6 md:p-10 shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs font-semibold text-roast uppercase tracking-wider mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"CÂU ",
							idx + 1,
							" / ",
							QUIZ.length
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Tiến độ ",
							Math.round((idx + (selectedOption !== null ? 1 : 0)) / QUIZ.length * 100),
							"%"
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 w-full rounded-full bg-ink/10 overflow-hidden mb-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-earth transition-all duration-300",
							style: { width: `${(idx + (selectedOption !== null ? 1 : 0)) / QUIZ.length * 100}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl leading-snug text-ink font-semibold",
						children: currentQ.q
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3",
						children: currentQ.options.map((optionText, optionIdx) => {
							const isPicked = selectedOption === optionIdx;
							const isCorrect = currentQ.answer === optionIdx;
							const revealed = selectedOption !== null;
							let buttonStyles = "border-ink/20 text-ink/85 hover:border-earth/60 hover:bg-paper";
							if (revealed) if (isCorrect) buttonStyles = "border-leaf bg-leaf/15 text-ink font-medium shadow-inner";
							else if (isPicked) buttonStyles = "border-earth bg-earth/15 text-ink font-medium shadow-inner";
							else buttonStyles = "border-ink/10 text-ink/40 opacity-60";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handlePick(optionIdx),
								disabled: revealed,
								className: `rounded-md border p-4 text-left text-sm transition-all ${buttonStyles}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: optionText }),
										revealed && isCorrect && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-leaf font-bold",
											children: "✓ Đáp án đúng"
										}),
										revealed && isPicked && !isCorrect && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-earth font-bold",
											children: "✕ Chưa đúng"
										})
									]
								})
							}, optionIdx);
						})
					}),
					selectedOption !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-md border-l-4 border-earth bg-paper p-4 text-xs leading-relaxed text-ink/90 animate-fade-in",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-earth font-semibold block mb-1",
							children: "Giải thích chi tiết:"
						}), currentQ.explain]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleNext,
							disabled: selectedOption === null,
							className: "rounded-full bg-earth px-7 py-3 text-sm font-medium text-ivory transition-all hover:bg-sun hover:text-ink disabled:opacity-30 shadow-md",
							children: idx + 1 === QUIZ.length ? "XEM KẾT QUẢ →" : "CÂU TIẾP THEO →"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-lg border border-ink/15 bg-ivory p-8 text-center md:p-12 shadow-xl animate-fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-roast tracking-[0.25em]",
						children: "HÀNH TRÌNH HOÀN THÀNH"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-3xl font-bold text-ink md:text-4xl",
						children: "BẠN ĐÃ HOÀN THÀNH HÀNH TRÌNH"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 inline-block rounded-full bg-paper px-8 py-4 border border-ink/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-5xl font-bold text-earth",
							children: [
								score,
								" / ",
								QUIZ.length
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-ink/60 mt-1 font-sans",
							children: "câu trả lời đúng"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md mx-auto text-base text-ink/85 font-display italic leading-relaxed",
						children: score === 5 ? "“Bạn đã nhìn thấy gần như toàn bộ câu chuyện phía sau vị đắng.”" : score >= 3 ? "“Bạn đã nắm được những mối quan hệ quan trọng.”" : "“Hành trình vẫn còn nhiều điều để khám phá. Hãy thử lại.”"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleScrollTop,
							className: "rounded-full bg-earth px-6 py-3 text-sm font-medium text-ivory hover:bg-sun hover:text-ink shadow-md transition-all",
							children: "XEM LẠI HÀNH TRÌNH"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleRestart,
							className: "rounded-full border border-ink/20 bg-paper px-6 py-3 text-sm font-medium text-ink hover:border-ink/50 transition-all",
							children: "LÀM LẠI TRẮC NGHIỆM"
						})]
					})
				]
			})]
		})
	});
}
function Ending() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-ink text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[560px] w-full overflow-hidden md:h-[680px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/assets/coffee-cup-dark-DQhiprAf.png",
					alt: "Một ly cà phê đã uống gần hết trong ánh sáng nhẹ từ cửa sổ",
					width: 1600,
					height: 1200,
					loading: "lazy",
					className: "h-full w-full object-cover opacity-60"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center px-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "max-w-4xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-2xl leading-relaxed text-ivory md:text-4xl lg:text-5xl",
							children: [
								"“Giá của một ly cà phê được nhìn thấy trên",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-sun font-normal",
									children: "hóa đơn"
								}),
								". Giá trị phía sau nó được tạo nên qua cả một quá trình",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-sun font-normal",
									children: "lao động xã hội"
								}),
								".”"
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-sm leading-relaxed text-ivory/80 md:text-base font-sans",
						children: "Khi hiểu được hành trình đó, một sản phẩm quen thuộc không còn chỉ là thứ chúng ta sử dụng mỗi ngày. Nó trở thành cánh cửa để nhìn thấy lao động, thị trường và các quan hệ kinh tế đang tồn tại xung quanh mình."
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-14 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-sun tracking-[0.25em]",
							children: "GIỚI THIỆU NHÓM THỰC HIỆN"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-3xl text-ivory font-semibold",
							children: "Nhóm sinh viên MLN122"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 divide-y divide-ivory/10 border-t border-b border-ivory/10",
							children: TEAM.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between py-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg text-ivory",
									children: member.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-wider text-sun font-mono",
									children: member.role
								})]
							}, member.name))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-sun tracking-[0.25em]",
							children: "TÀI LIỆU THAM KHẢO"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-3xl text-ivory font-semibold",
							children: "Nguồn tri thức & Tư liệu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3 text-xs leading-relaxed text-ivory/80",
							children: REFERENCES.map((ref, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-l-2 border-sun/50 pl-4 py-1",
								children: ref
							}, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 border-t border-ivory/10 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-ivory/60 block mb-1",
								children: "Quy tắc bản quyền & Hình ảnh"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-ivory/60 leading-relaxed",
								children: "Tất cả các hình ảnh sử dụng trên website đều có bản quyền mở hoặc được khởi tạo độc quyền cho mục đích minh họa học tập không thương mại."
							})]
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 rounded-lg border border-sun/25 bg-roast/30 p-6 text-xs leading-relaxed text-ivory/80 md:p-8 shadow-inner",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-sun font-bold tracking-widest mb-2",
						children: "DISCLAIMER / TUYÊN BỐ MIỄN TRỪ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans leading-relaxed",
						children: DISCLAIMER
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 text-center text-xs uppercase tracking-[0.3em] text-ivory/40 border-t border-ivory/10 pt-8",
					children: "SAU VỊ ĐẮNG · MLN122 — Sản phẩm kể chuyện tương tác Kinh tế Chính trị Mác–Lênin"
				})
			]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "grain-bg text-ink min-h-screen selection:bg-earth selection:text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCommodity, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionSNLT, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLaborPower, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionValuePrice, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionInterest, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntegration, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ending, {})
		]
	});
}
//#endregion
export { Index as component };
