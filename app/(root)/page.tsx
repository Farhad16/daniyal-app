import Banner from "@/components/Home/Banner";
import Feature from "@/components/Home/Feature";
import Report from "@/components/Home/Report";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center sm:pb-[50px] mt-4">
      <Banner />
      <Feature />
      <Report />
      <Footer />
    </main>
  );
}
