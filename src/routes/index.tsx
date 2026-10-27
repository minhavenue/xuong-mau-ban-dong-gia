import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen, Calendar, Check, FileText, Image as ImageIcon, Lightbulb, Mail, Megaphone,
  MessageSquare, PenLine, Plus, ShoppingBag, Sparkles, Target, Video, X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CHAN_TRANG, DINH_VI, GIAN_HANG, GIA_DONG_GIA, KHOI_CHOT, LY_DO, NGUOI_GIOI_THIEU,
  NHAN_MO_DAU, THUONG_HIEU, TIEU_DE, dinhDangTien, type BieuTuong, type SanPham,
} from "@/data/san-pham";

export const Route = createFileRoute("/")({ component: TrangChu });

const BIEU_TUONG: Record<BieuTuong, LucideIcon> = {
  FileText, Sparkles, BookOpen, Megaphone, Mail, Video, Lightbulb, Calendar,
  MessageSquare, Target, PenLine, Image: ImageIcon,
};

const KHOA_LUU = "xuong-mau-gio-hang";

function TrangChu() {
  const [gio, setGio] = useState<string[]>([]);
  const [daNap, setDaNap] = useState(false);

  // Giữ giỏ khi tải lại trang (chỉ lưu mã món, ở trình duyệt của khách).
  useEffect(() => {
    try {
      const luu = JSON.parse(localStorage.getItem(KHOA_LUU) ?? "[]");
      if (Array.isArray(luu)) setGio(luu.filter((x) => typeof x === "string"));
    } catch {
      /* bỏ qua dữ liệu hỏng */
    }
    setDaNap(true);
  }, []);
  useEffect(() => {
    if (daNap) localStorage.setItem(KHOA_LUU, JSON.stringify(gio));
  }, [gio, daNap]);

  const tatCa = useMemo(() => GIAN_HANG.flatMap((g) => g.sanPham), []);
  const monTrongGio = tatCa.filter((s) => gio.includes(s.id));
  const tong = monTrongGio.length * GIA_DONG_GIA;

  const bat = (id: string) =>
    setGio((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));

  return (
    <div className={gio.length > 0 ? "pb-28" : ""}>
      {/* 1. Thanh đầu trang dính */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <a href="#" className="font-bold">{THUONG_HIEU}</a>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <ShoppingBag className="size-4" />
            {gio.length} món · {dinhDangTien(tong)}
          </div>
        </div>
      </header>

      {/* 2. Khối mở đầu + người giới thiệu */}
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-[1fr_280px]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{NHAN_MO_DAU}</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">{TIEU_DE}</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">{DINH_VI}</p>
          <Button asChild size="lg" className="mt-6">
            <a href={`#${GIAN_HANG[0].id}`}>Xem các gian hàng</a>
          </Button>
        </div>
        <figure className="mx-auto w-full max-w-[280px] overflow-hidden rounded-3xl border border-border bg-muted shadow-sm">
          <img
            src={NGUOI_GIOI_THIEU.anh}
            alt={NGUOI_GIOI_THIEU.ten}
            className="aspect-[2/3] w-full object-cover"
          />
          <figcaption className="p-4">
            <div className="font-bold">{NGUOI_GIOI_THIEU.ten}</div>
            <div className="text-xs text-muted-foreground">{NGUOI_GIOI_THIEU.vaiTro}</div>
            <p className="mt-2 text-sm">{NGUOI_GIOI_THIEU.loiNhan}</p>
          </figcaption>
        </figure>
      </section>

      {/* 3. Các gian hàng: điện thoại vuốt ngang, máy tính dàn lưới */}
      {GIAN_HANG.map((g) => (
        <section key={g.id} id={g.id} className="mx-auto max-w-6xl scroll-mt-16 px-4 py-8">
          <h2 className="text-2xl font-bold">{g.tieuDe}</h2>
          <p className="mt-1 text-muted-foreground">{g.gioiThieu}</p>
          <div className="bang-truot -mx-4 mt-5 flex snap-x gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
            {g.sanPham.map((s) => (
              <TheSanPham key={s.id} sp={s} daChon={gio.includes(s.id)} onBam={() => bat(s.id)} />
            ))}
          </div>
        </section>
      ))}

      {/* 4. Ba lý do */}
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-3">
        {LY_DO.map((l) => (
          <div key={l.tieuDe} className="rounded-2xl border border-border bg-muted p-5">
            <h3 className="font-bold">{l.tieuDe}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{l.noiDung}</p>
          </div>
        ))}
      </section>

      {/* 5. Khối chốt + chỗ thanh toán (placeholder) */}
      <section id="thanh-toan" className="mx-auto max-w-3xl scroll-mt-16 px-4 py-12 text-center">
        <h2 className="text-3xl font-extrabold">{KHOI_CHOT.tieuDe}</h2>
        <p className="mt-2 text-muted-foreground">{KHOI_CHOT.noiDung}</p>
        <div className="mt-6 rounded-2xl border border-dashed border-border p-5 text-left">
          <h3 className="font-bold">Đơn của bạn</h3>
          {monTrongGio.length === 0 ? (
            <p className="mt-2 text-sm text-muted-foreground">Giỏ đang trống.</p>
          ) : (
            <ul className="mt-2 space-y-1 text-sm">
              {monTrongGio.map((s) => (
                <li key={s.id} className="flex justify-between gap-3">
                  <span>{s.ten}</span>
                  <span>{dinhDangTien(GIA_DONG_GIA)}</span>
                </li>
              ))}
              <li className="flex justify-between border-t border-border pt-2 font-bold">
                <span>Tổng</span>
                <span>{dinhDangTien(tong)}</span>
              </li>
            </ul>
          )}
          {/* CHỖ NỐI THANH TOÁN: chưa gửi dữ liệu đi đâu. Nối vào cổng thanh toán của bạn. */}
          <p className="mt-4 rounded-lg bg-muted p-3 text-xs text-muted-foreground">
            Đây là chỗ giữ cho nút thanh toán. Nối vào cổng thanh toán của bạn (ví dụ mã QR chuyển
            khoản kèm mã đơn, hoặc cổng thanh toán tự động). Trang mẫu này không gửi dữ liệu đi đâu.
          </p>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        {CHAN_TRANG}
      </footer>

      {/* 6. Thanh giỏ dính đáy màn hình: chỉ hiện khi giỏ có món */}
      {gio.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
            <div>
              <div className="text-sm text-muted-foreground">{gio.length} món trong giỏ</div>
              <div className="text-lg font-extrabold">{dinhDangTien(tong)}</div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setGio([])}>
                <X className="size-4" /> Xoá giỏ
              </Button>
              {/* Neo tới khối thanh toán. Chưa nối cổng thanh toán nào. */}
              <Button asChild>
                <a href="#thanh-toan">Thanh toán</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TheSanPham({ sp, daChon, onBam }: { sp: SanPham; daChon: boolean; onBam: () => void }) {
  const Icon = BIEU_TUONG[sp.bieuTuong];
  return (
    <article className="w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-background shadow-sm md:w-auto">
      <div className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${sp.mau}`}>
        <Icon className="size-14 text-white/90" strokeWidth={1.5} aria-hidden />
        <Badge className="absolute left-3 top-3">{sp.nhan}</Badge>
        <Badge className="absolute right-3 top-3">{dinhDangTien(GIA_DONG_GIA)}</Badge>
      </div>
      <div className="p-4">
        <h3 className="font-bold leading-snug">{sp.ten}</h3>
        <p className="mt-1 min-h-10 text-sm text-muted-foreground">{sp.moTa}</p>
        <Button
          className="mt-3 w-full"
          size="sm"
          variant={daChon ? "success" : "default"}
          onClick={onBam}
          aria-pressed={daChon}
        >
          {daChon ? <Check className="size-4" /> : <Plus className="size-4" />}
          {daChon ? "Đã thêm" : "Thêm vào giỏ"}
        </Button>
      </div>
    </article>
  );
}
