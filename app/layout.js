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
        {/* GA4 Global Site Tag */}
        {/* <Script
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
        </Script> */}

        {/* GA4 + Google Tag */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ME8QSE01WL"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // GA4
            gtag('config', 'G-ME8QSE01WL');

            // Google Ads Conversion
            gtag('config', 'AW-17631756339');
          `}
        </Script>
        {/* Event snippet for Nhấp để gọi conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.  */}
        {/* <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) !== 'undefined') {
          window.location = url;
        }
      };
      gtag('event', 'conversion', {
        'send_to': 'AW-17631756339/-SQ1CJur9ccbELOAvddB',
        'value': 1.0,
        'currency': 'VND',
        'event_callback': callback
      });
      return false;
    }
  `}
        </Script> */}


      </head>
      <body className={roboto.variable}>
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
