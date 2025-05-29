import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header isSticky={false} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
