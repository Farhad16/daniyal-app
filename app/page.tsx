import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pb-[60px]">
      <Navbar />
      <Banner />
      <Feature />
    </main>
  );
}
