import DesktopNavbar from '@/components/Navbar/DesktopNavbar';
import MobileNavbar from '@/components/Navbar/MobileNavbar';
import { Desktop, TabletAndBelow } from '@/components/MediaQueryEasyMode';

export default function Navbar() {
  return (
    <>
      <TabletAndBelow>
        <MobileNavbar />
      </TabletAndBelow>

      <Desktop>
        <DesktopNavbar />
      </Desktop>
    </>
  );
}
