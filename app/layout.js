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
  title: "Dịch Vụ Điện Nước Hà Nội",
  description: "Chuyên sửa chữa, bảo trì điện nước tại Hà Nội. Dịch vụ uy tín, chuyên nghiệp, hỗ trợ nhanh 24/7. Cam kết chất lượng, giá tốt nhất!",
  keywords: "sửa chữa điện nước, sửa tivi, máy lọc nước, máy bơm, máy giặt, bình nóng lạnh",

  openGraph: {
    title: "Dịch Vụ Điện Nước Hà Nội",
    description: "Chuyên sửa chữa, bảo trì điện nước tại Hà Nội. Dịch vụ uy tín, chuyên nghiệp, hỗ trợ nhanh 24/7. Cam kết chất lượng, giá tốt nhất!",
    images: [
      {
        url: thumbnail.src,
        width: 1200,
        height: 630,
        alt: "Dịch Vụ Điện Nước Hà Nội",
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
              "name": "Dịch Vụ Điện Nước Hà Nội",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hà Nội",
                "addressCountry": "VN"
              },
              "telephone": "+84964701333",
              "openingHours": "Mo-Su 08:00-22:00",
              "description": "Chuyên sửa chữa, bảo trì điện nước tại Hà Nội. Dịch vụ uy tín, chuyên nghiệp, hỗ trợ nhanh 24/7. Cam kết chất lượng, giá tốt nhất!",
            })
          }}
        />
      </body>
    </html>
  );
}
