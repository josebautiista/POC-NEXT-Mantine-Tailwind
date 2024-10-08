import GridCustom from "@/components/GridCustom";
import { NavbarMinimal } from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <NavbarMinimal />
      <div className="p-7">
        <GridCustom />
      </div>
    </>
  );
}
