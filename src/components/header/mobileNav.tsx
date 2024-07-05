import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import NavLinks from "./navLinks";

export default function MobileNavbar() {
  return (
    <Sheet key="bottom">
      <SheetTrigger asChild>
        <Button>
          <Menu className="h-[1.5rem] w-[1.5rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <NavLinks />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
