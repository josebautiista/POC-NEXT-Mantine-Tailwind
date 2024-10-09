import GridCustom from "@/components/GridCustom";
import { NavbarMinimal } from "../components/Navbar";
import { Notifications } from "@mantine/notifications";

export default function HomePage() {
  return (
    <>
      <Notifications />
      <NavbarMinimal />
      <div className="p-7">
        <GridCustom />
      </div>
    </>
  );
}
