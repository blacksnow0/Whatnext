import Hero from "../components/Home/Hero";
import Himachal from "../components/Home/Himanchal";
import TopPics from "../components/Home/TopPics";
import Uttrakhand from "../components/Home/Uttrakhand";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopPics />
      <Uttrakhand />
      <Himachal />
    </div>
  );
}
