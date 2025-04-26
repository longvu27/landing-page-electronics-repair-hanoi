import thumbnail from '@/public/thumbnail.jpg';
import "../styles/globalsStyle.scss";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL(`https://suachuadienlanhthanhhoa.vercel.app/`),
  title: "Sửa Chữa Điện Tử Điện Lạnh | Uy Tín Giá Rẻ",
  description: "Dịch vụ sửa chữa điện tử, điện lạnh uy tín, giá rẻ. Hỗ trợ tận nhà, bảo hành dài hạn. Gọi ngay!",
  keywords: "sửa chữa điện tử, sửa chữa điện lạnh, sửa tivi, sửa máy lạnh, sửa tủ lạnh",

  openGraph: {
    title: "Sửa Chữa Điện Tử Điện Lạnh | Uy Tín Giá Rẻ",
    description: "Dịch vụ sửa chữa điện tử, điện lạnh uy tín, giá rẻ. Hỗ trợ tận nhà, bảo hành dài hạn. Gọi ngay!",
    images: [
      {
        url: thumbnail.src,
        width: 1200,
        height: 630,
        alt: "Sửa Chữa Điện Tử Điện Lạnh",
      },
    ],
  },

  alternates: {
    canonical: "https://suachuadienlanhthanhhoa.vercel.app/",
    languages: {
      vi: "https://suachuadienlanhthanhhoa.vercel.app/",
      "x-default": "https://suachuadienlanhthanhhoa.vercel.app/",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <meta name="google-site-verification" content="0DpO_pFQW6LPcpkBPQlslkCsWHv_QzzZYaV2A_D6Dro" />
      </head>
      <body className={quicksand.variable}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dịch Vụ Sửa Chữa Điện Tử Điện Lạnh",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Thanh Hóa",
                "addressCountry": "VN"
              },
              "telephone": "+84342886598",
              "openingHours": "Mo-Su 08:00-22:00",
              "description": "Dịch vụ sửa chữa điện tử điện lạnh chuyên nghiệp, hỗ trợ tận nhà, bảo hành dài hạn.",
            })
          }}
        />
      </body>
    </html>
  );
}
