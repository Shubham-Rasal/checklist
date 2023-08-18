import Image from "next/image";
import Checklist from "../components/Checklist";
export default function Home() {
  return (
    <main className=" w-full bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen  items-center justify-between p-24">
      <Checklist />
    </main>
  );
}
