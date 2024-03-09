import Banner from "@/components/Banner";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />
      <Banner />
    </main>
  );
}
