# Xưởng Mẫu Đồng Giá

Trang mẫu của Xưởng Skill AI: sàn bán sản phẩm số nhiều gian hàng, mọi món cùng một giá, thêm vào giỏ không rời trang, thanh giỏ dính đáy màn hình.

Nội dung trong trang (mẫu bài đăng, bộ prompt, ebook mini, giá 99.000 ₫) chỉ là ví dụ để bạn thay bằng sản phẩm của mình.

## Chạy trên máy

```bash
npm install
npm run dev      # mở đúng địa chỉ in ra trong cửa sổ lệnh (mặc định cổng 8080)
npm run build    # ra thư mục dist/client, đưa lên Vercel / Cloudflare Pages / Netlify
```

## Sửa nội dung ở đâu

Gần như mọi thứ nằm trong một file: `src/data/san-pham.ts`.

- `GIA_DONG_GIA`: giá chung cho mọi món. Đổi một chỗ là đổi cả trang.
- `THUONG_HIEU`, `NHAN_MO_DAU`, `TIEU_DE`, `DINH_VI`: chữ ở đầu trang.
- `NGUOI_GIOI_THIEU`: tên, lời nhắn và ảnh người giới thiệu (ảnh đặt trong `public/anh/`).
- `GIAN_HANG`: danh sách gian hàng, mỗi gian có các sản phẩm (`id`, `ten`, `nhan`, `moTa`, `bieuTuong`, `mau`).
- `LY_DO`, `KHOI_CHOT`, `CHAN_TRANG`: dải lý do, khối chốt, chân trang.
- `TIEU_DE_TAB`, `MO_TA_CHIA_SE`: tiêu đề tab và mô tả khi chia sẻ link.

Giao diện: `src/routes/index.tsx`. Màu chủ đạo: các biến màu đầu file `src/styles.css`.

## Nút "Thanh toán"

Hiện chỉ là neo tới khối "Đơn của bạn" ở cuối trang, có chú thích "nối vào cổng thanh toán của bạn". Trang không gửi dữ liệu đi đâu. Bạn tự nối cổng thanh toán và nơi ghi đơn.

Giỏ hàng được lưu trong `localStorage` của trình duyệt khách (chỉ mã món) nên tải lại trang vẫn còn.

## Công nghệ

TanStack Start (`@tanstack/react-start` 1.169.4, đã vá CVE-2026-102989), React 19, Vite 8, Tailwind CSS 4, các thành phần kiểu shadcn/ui (`src/components/ui/`). Tất cả giấy phép MIT. Phiên bản được ghim trong `package.json`.
