import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";
import { Inter } from "next/font/google";
import Script from "next/script";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];
const disableFooter = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  // console.log("pathname", pathname);
  return (
    <main className={`${inter.className} flex flex-col min-h-screen`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      {!disableNavbar.includes(pathname) && <Navbar />}
      <div className="flex-grow">{children}</div>
      {!disableFooter.includes(pathname) && <Footer />}
    </main>
  );
};

export default AppShell;
