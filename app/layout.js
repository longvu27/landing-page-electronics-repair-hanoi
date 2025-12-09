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
  title: "Sửa điện nước tại nhà Hà Nội - Thợ chuyên nghiệp, uy tín",
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
    title: "Sửa điện nước tại nhà Hà Nội - Thợ chuyên nghiệp, uy tín",
    description: "Sửa chữa điện nước tại nhà Hà Nội uy tín. Thợ tay nghề cao, có mặt trong 30 phút, giá minh bạch, bảo hành dài hạn. Gọi ngay 0964701333!",
    images: [
      {
        url: thumbnail.src,
        width: 1200,
        height: 630,
        alt: "Sửa điện nước tại nhà Hà Nội - Thợ chuyên nghiệp, uy tín",
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
        {/* GA4 + Google Tag */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5PCGKB40YK"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // GA4
            gtag('config', 'G-5PCGKB40YK');

            // Google Ads Conversion
            gtag('config', 'AW-17631756339');
          `}
        </Script>
        <Script id="gtag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGHV33VK');
          `}
        </Script>

      </head>
      <body className={roboto.variable}>
        {/* Google Tag Manager (noscript) */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGHV33VK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript> */}
        {/* End Google Tag Manager (noscript) */}
        <a href="https://www.facebook.com/anh.nguyen.173196" width={0} height={0} />
        <a href="https://diennuocdienlanhthanhhoa.com/" width={0} height={0} />
        <Layout>
          {children}
        </Layout>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sửa điện nước tại nhà Hà Nội - Thợ chuyên nghiệp, uy tín",
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

{/* 
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ME8QSE01WL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ME8QSE01WL');
</script> 
*/}
