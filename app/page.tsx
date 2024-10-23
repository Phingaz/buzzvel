import Image from "next/image";
import Header from "./_components/nav/Header";
import Hero from "./_components/sections/Hero";
import Product from "./_components/sections/Product";
import Solutions from "./_components/sections/Solutions";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Product />
      <Solutions />
    </main>
  );
}
