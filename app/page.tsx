import Header from "./_components/nav/header/Header";
import Hero from "./_components/sections/Hero";
import Product from "./_components/sections/Product";
import Solutions from "./_components/sections/Solutions";
import Features from "./_components/sections/Features";
import Footer from "./_components/nav/footer/Footer";
import Bottom from "./_components/sections/Bottom";
import Configure from "./_components/sections/Configure";

export default function Home() {
  return (
    <main className="relative overflow-clip">
      <Header />
      <Hero />
      <Product />
      <Solutions />
      <Features />
      <Configure />
      <Bottom />
      <Footer />
    </main>
  );
}
