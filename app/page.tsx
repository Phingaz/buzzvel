import Header from "./_components/nav/header/Header";
import Hero from "./_components/sections/Hero";
import Product from "./_components/sections/Product";
import Solutions from "./_components/sections/Solutions";
import Features from "./_components/sections/Features";
import Configure from "./_components/sections/Configure";
import Footer from "./_components/nav/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Product />
      <Solutions />
      <Features />
      <Configure />
      <Footer />
    </main>
  );
}
