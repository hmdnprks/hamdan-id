import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/transitions/PageTransition";

export default function BlogRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen">{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}