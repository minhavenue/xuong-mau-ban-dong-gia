// ============================================================
//  NƠI SỬA NỘI DUNG: toàn bộ chữ, giá, sản phẩm của trang nằm ở file này.
//  Nội dung dưới đây chỉ là MẪU trung tính của Xưởng Skill AI,
//  hãy thay bằng thương hiệu và sản phẩm thật của bạn.
// ============================================================

/** Một mức giá chung cho mọi món (đơn vị: đồng). Đổi ở đây là đổi cả trang. */
export const GIA_DONG_GIA = 99000;

export const THUONG_HIEU = "Xưởng Mẫu Đồng Giá";
export const NHAN_MO_DAU = "Sàn sản phẩm số · mọi món một giá";
export const TIEU_DE = "Chọn món bạn cần. Món nào cũng 99.000 ₫.";
export const DINH_VI =
  "Mẫu bài đăng, bộ prompt và ebook mini do Sophia Nguyễn soạn sẵn. Không cần cân nhắc giá từng món, cứ nhặt đủ thứ bạn cần vào giỏ.";

export const NGUOI_GIOI_THIEU = {
  ten: "Sophia Nguyễn",
  vaiTro: "Người giới thiệu các sản phẩm trong sàn",
  loiNhan:
    "Mình chọn những món ngắn gọn, dùng được ngay trong buổi chiều. Bạn nhặt vài món, mở ra là làm được.",
  // Ảnh tạm: thay bằng ảnh của bạn (đặt file vào public/anh/ rồi sửa đường dẫn).
  anh: "/anh/sophia.webp",
};

export type BieuTuong =
  | "FileText"
  | "Sparkles"
  | "BookOpen"
  | "Megaphone"
  | "Mail"
  | "Video"
  | "Lightbulb"
  | "Calendar"
  | "MessageSquare"
  | "Target"
  | "PenLine"
  | "Image";

export type SanPham = {
  id: string;
  ten: string;
  nhan: string; // nhãn góc trái của thẻ
  moTa: string;
  bieuTuong: BieuTuong;
  mau: string; // hai màu nền, dạng lớp Tailwind
};

export type GianHang = {
  id: string;
  tieuDe: string;
  gioiThieu: string;
  sanPham: SanPham[];
};

export const GIAN_HANG: GianHang[] = [
  {
    id: "mau-bai-dang",
    tieuDe: "Mẫu bài đăng",
    gioiThieu: "Khung bài viết điền chữ là đăng được.",
    sanPham: [
      {
        id: "bd-gioi-thieu",
        ten: "Mẫu bài giới thiệu bản thân",
        nhan: "Mẫu",
        moTa: "10 khung bài tự giới thiệu cho trang cá nhân.",
        bieuTuong: "PenLine",
        mau: "from-indigo-500 to-violet-500",
      },
      {
        id: "bd-ban-hang",
        ten: "Mẫu bài bán hàng mềm",
        nhan: "Mẫu",
        moTa: "8 khung bài giới thiệu sản phẩm không gây khó chịu.",
        bieuTuong: "Megaphone",
        mau: "from-rose-500 to-orange-400",
      },
      {
        id: "bd-chuoi-7-ngay",
        ten: "Chuỗi bài 7 ngày",
        nhan: "Chuỗi",
        moTa: "Lịch 7 bài liền nhau, mỗi bài một mục đích rõ.",
        bieuTuong: "Calendar",
        mau: "from-emerald-500 to-teal-400",
      },
      {
        id: "bd-binh-luan",
        ten: "Mẫu trả lời bình luận",
        nhan: "Mẫu",
        moTa: "30 câu trả lời gọn cho các câu hỏi hay gặp.",
        bieuTuong: "MessageSquare",
        mau: "from-sky-500 to-cyan-400",
      },
    ],
  },
  {
    id: "bo-prompt",
    tieuDe: "Bộ prompt",
    gioiThieu: "Câu lệnh viết sẵn, chép vào công cụ AI là chạy.",
    sanPham: [
      {
        id: "pr-y-tuong",
        ten: "Bộ prompt lên ý tưởng nội dung",
        nhan: "Prompt",
        moTa: "25 prompt để nghĩ ra chủ đề cho cả tháng.",
        bieuTuong: "Lightbulb",
        mau: "from-amber-500 to-yellow-400",
      },
      {
        id: "pr-kich-ban",
        ten: "Bộ prompt viết kịch bản video ngắn",
        nhan: "Prompt",
        moTa: "15 prompt từ hook đến lời kêu gọi hành động.",
        bieuTuong: "Video",
        mau: "from-fuchsia-500 to-pink-400",
      },
      {
        id: "pr-anh",
        ten: "Bộ prompt tạo ảnh minh họa",
        nhan: "Prompt",
        moTa: "20 prompt tạo ảnh đồng bộ phong cách.",
        bieuTuong: "Image",
        mau: "from-violet-500 to-purple-400",
      },
      {
        id: "pr-email",
        ten: "Bộ prompt viết email chăm khách",
        nhan: "Prompt",
        moTa: "12 prompt viết email cảm ơn, nhắc lại, hỏi ý kiến.",
        bieuTuong: "Mail",
        mau: "from-blue-500 to-indigo-400",
      },
    ],
  },
  {
    id: "ebook-mini",
    tieuDe: "Ebook mini",
    gioiThieu: "Đọc trong 20 phút, làm theo ngay trong ngày.",
    sanPham: [
      {
        id: "eb-bat-dau",
        ten: "Ebook: Bắt đầu với AI trong 1 buổi",
        nhan: "Ebook",
        moTa: "Từng bước cho người chưa dùng AI bao giờ.",
        bieuTuong: "BookOpen",
        mau: "from-teal-500 to-emerald-400",
      },
      {
        id: "eb-muc-tieu",
        ten: "Ebook: Đặt mục tiêu nội dung 30 ngày",
        nhan: "Ebook",
        moTa: "Cách chia mục tiêu lớn thành việc nhỏ mỗi ngày.",
        bieuTuong: "Target",
        mau: "from-red-500 to-rose-400",
      },
      {
        id: "eb-checklist",
        ten: "Ebook: Danh sách kiểm tra trước khi đăng",
        nhan: "Ebook",
        moTa: "Một trang kiểm tra lỗi hay gặp trước khi bấm đăng.",
        bieuTuong: "FileText",
        mau: "from-slate-600 to-slate-400",
      },
      {
        id: "eb-cong-cu",
        ten: "Ebook: Chọn công cụ AI cho việc của bạn",
        nhan: "Ebook",
        moTa: "So sánh ngắn để khỏi mất thời gian thử từng cái.",
        bieuTuong: "Sparkles",
        mau: "from-orange-500 to-amber-400",
      },
    ],
  },
];

/** Ba lý do nên mua: viết đúng lợi thế thật của bạn. */
export const LY_DO = [
  { tieuDe: "Một giá cho mọi món", noiDung: "Khỏi đắn đo từng món, nhặt bao nhiêu tuỳ ý." },
  { tieuDe: "Dùng được ngay", noiDung: "Mỗi món đều ngắn, mở ra là làm theo được." },
  { tieuDe: "Soạn bởi người làm thật", noiDung: "Nội dung gọn, không lan man, không nhồi chữ." },
];

export const KHOI_CHOT = {
  tieuDe: "Sẵn sàng chọn món đầu tiên?",
  noiDung: "Thêm vào giỏ ngay trên trang, không bị chuyển đi đâu cả.",
};

export const CHAN_TRANG = "Trang mẫu của Xưởng Skill AI. Nội dung, sản phẩm và giá chỉ để minh hoạ.";

// Tiêu đề tab và mô tả khi chia sẻ link.
export const TIEU_DE_TAB = "Xưởng Mẫu Đồng Giá · Sản phẩm số mọi món một giá";
export const MO_TA_CHIA_SE =
  "Mẫu bài đăng, bộ prompt và ebook mini, mọi món cùng một giá. Thêm vào giỏ ngay trên trang.";

export function dinhDangTien(so: number): string {
  return so.toLocaleString("vi-VN") + " ₫";
}
