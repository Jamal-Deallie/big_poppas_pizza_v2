import DesktopNavbar from '@/components/Navbar/DesktopNavbar';
import MobileNavbar from '@/components/Navbar/MobileNavbar';
import { IsDesktop, IsTablet } from '@/components/MediaQuery';

export default function Navbar() {
  return (
    <>
      <IsTablet>
        <MobileNavbar />
      </IsTablet>

      <IsDesktop>
        <DesktopNavbar />
      </IsDesktop>
    </>
  );
}
