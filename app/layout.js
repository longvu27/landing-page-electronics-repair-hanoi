import thumbnail from '@/public/thumbnail.jpg';
import "../styles/globalsStyle.scss";
import { Roboto } from "next/font/google";
import Layout from '@/src/components/layout/Layout';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});


export const metadata = {
  metadataBase: new URL(`https://suachuadienlanhthanhhoa.vercel.app/`),
  title: "Dịch Vụ Điện Nước, Điện Lạnh Hà Nội",
  description: "Chuyên sửa chữa, bảo trì điện nước, điện lạnh tại Hà Nội. Dịch vụ uy tín, chuyên nghiệp, hỗ trợ nhanh 24/7. Cam kết chất lượng, giá tốt nhất!",
  keywords: "sửa chữa điện nước, sửa chữa điện lạnh, sửa tivi, sửa máy lạnh, sửa tủ lạnh, máy lọc nước",

  openGraph: {
    title: "Dịch Vụ Điện Nước, Điện Lạnh Hà Nội",
    description: "Chuyên sửa chữa, bảo trì điện nước, điện lạnh tại Hà Nội. Dịch vụ uy tín, chuyên nghiệp, hỗ trợ nhanh 24/7. Cam kết chất lượng, giá tốt nhất!",
    images: [
      {
        url: thumbnail.src,
        width: 1200,
        height: 630,
        alt: "Dịch Vụ Điện Nước Điện Lạnh Hà Nội",
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
              "name": "Dịch Vụ Điện Nước, Điện Lạnh Hà Nội",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hà Nội",
                "addressCountry": "VN"
              },
              "telephone": "+84342886598",
              "openingHours": "Mo-Su 08:00-22:00",
              "description": "Chuyên sửa chữa, bảo trì điện nước, điện lạnh tại Hà Nội. Dịch vụ uy tín, chuyên nghiệp, hỗ trợ nhanh 24/7. Cam kết chất lượng, giá tốt nhất!",
            })
          }}
        />
      </body>
    </html>
  );
}
