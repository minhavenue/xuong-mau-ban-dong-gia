import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { MO_TA_CHIA_SE, TIEU_DE_TAB } from "@/data/san-pham";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TIEU_DE_TAB },
      { name: "description", content: MO_TA_CHIA_SE },
      { property: "og:title", content: TIEU_DE_TAB },
      { property: "og:description", content: MO_TA_CHIA_SE },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: () => (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Không tìm thấy trang</h1>
      <a href="/" className="mt-4 inline-block text-primary underline">
        Về trang chủ
      </a>
    </div>
  ),
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
