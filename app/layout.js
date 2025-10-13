import thumbnail from '@/public/thumbnail.png';
import "../styles/globalsStyle.scss";
import { Roboto } from "next/font/google";
import Layout from '@/src/components/layout/Layout';
import Script from 'next/script';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});


export const metadata = {
  metadataBase: new URL(`https://dichvudiennuochanoi247.com/`),
  title: "Sửa điện nước tại nhà Hà Nội — Có mặt ngay, giá hợp lý",
  description: "Sửa chữa điện nước tại nhà Hà Nội uy tín. Thợ tay nghề cao, có mặt trong 30 phút, giá minh bạch, bảo hành dài hạn. Gọi ngay 0964701333!",
  keywords: "sửa chữa điện nước, sửa tivi, máy lọc nước, máy bơm, máy giặt, bình nóng lạnh",
  icons: {
    icon: [
      {
        url: "https://dichvudiennuochanoi247.com/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "https://dichvudiennuochanoi247.com/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://dichvudiennuochanoi247.com/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "https://dichvudiennuochanoi247.com/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sửa điện nước tại nhà Hà Nội — Có mặt ngay, giá hợp lý",
    description: "Sửa chữa điện nước tại nhà Hà Nội uy tín. Thợ tay nghề cao, có mặt trong 30 phút, giá minh bạch, bảo hành dài hạn. Gọi ngay 0964701333!",
    images: [
      {
        url: thumbnail.src,
        width: 1200,
        height: 630,
        alt: "Sửa điện nước tại nhà Hà Nội — Có mặt ngay, giá hợp lý",
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
        {/* GA4 Global Site Tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-5PCGKB40YK`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5PCGKB40YK');
          `}
        </Script>
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
              "name": "Sửa điện nước tại nhà Hà Nội — Có mặt ngay, giá hợp lý",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hà Nội",
                "addressCountry": "VN"
              },
              "telephone": "+84964701333",
              "openingHours": "Mo-Su 08:00-22:00",
              "description": "Sửa chữa điện nước tại nhà Hà Nội uy tín. Thợ tay nghề cao, có mặt trong 30 phút, giá minh bạch, bảo hành dài hạn. Gọi ngay 0964701333!",
            })
          }}
        />
      </body>
    </html>
  );
}
