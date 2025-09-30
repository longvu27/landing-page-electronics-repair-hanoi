import thumbnail from '@/public/thumbnail.png';
import "../styles/globalsStyle.scss";
import { Roboto } from "next/font/google";
import Layout from '@/src/components/layout/Layout';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});


export const metadata = {
  metadataBase: new URL(`https://dichvudiennuochanoi247.com/`),
  title: "Sửa chữa điện nước Hà Nội 24/7 | Dịch vụ điện nước uy tín giá rẻ",
  description: "Dịch vụ sửa chữa điện nước tại Hà Nội 24/7 - Thợ giỏi, có mặt nhanh. Uy tín, giá rẻ, bảo hành dài hạn. Liên hệ ngay để được hỗ trợ!",
  keywords: "sửa chữa điện nước, sửa tivi, máy lọc nước, máy bơm, máy giặt, bình nóng lạnh",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sửa chữa điện nước Hà Nội 24/7 | Dịch vụ điện nước uy tín giá rẻ",
    description: "Dịch vụ sửa chữa điện nước tại Hà Nội 24/7 - Thợ giỏi, có mặt nhanh. Uy tín, giá rẻ, bảo hành dài hạn. Liên hệ ngay để được hỗ trợ!",
    images: [
      {
        url: thumbnail.src,
        width: 1200,
        height: 630,
        alt: "Sửa chữa điện nước Hà Nội 24/7 | Dịch vụ điện nước uy tín giá rẻ",
      },
    ],
  },

  alternates: {
    canonical: "https://dichvudiennuochanoi247.com/",
    languages: {
      vi: "https://dichvudiennuochanoi247.com/",
      "x-default": "https://dichvudiennuochanoi247.com/",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
      </head>
      <body className={roboto.variable}>
        <Layout>
          {children}
        </Layout>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sửa chữa điện nước Hà Nội 24/7 | Dịch vụ điện nước uy tín giá rẻ",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hà Nội",
                "addressCountry": "VN"
              },
              "telephone": "+84964701333",
              "openingHours": "Mo-Su 08:00-22:00",
              "description": "Dịch vụ sửa chữa điện nước tại Hà Nội 24/7 - Thợ giỏi, có mặt nhanh. Uy tín, giá rẻ, bảo hành dài hạn. Liên hệ ngay để được hỗ trợ!",
            })
          }}
        />
      </body>
    </html>
  );
}
