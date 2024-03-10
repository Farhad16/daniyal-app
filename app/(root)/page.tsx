import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Report from "@/components/Report";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center sm:pb-[50px]">
      <Banner />
      <Feature />
      <Report />
      <Footer />
    </main>
  );
}
