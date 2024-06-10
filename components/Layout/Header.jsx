

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {

    return (
        <header className="bg-secondary opacity-80 sticky top-0 z-10 h-max max-w-full rounded-none px-1 py-1 lg:px-8 lg:py-1">
            <MobileNav />
            <DesktopNav />
        </header>
    );
}