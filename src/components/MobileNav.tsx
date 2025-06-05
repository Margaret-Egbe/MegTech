import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>

      <SheetContent className="flex flex-col  items-center p-6 bg-[#EEEDF5]">
        <SheetDescription className="flex  flex-col gap-4 mt-10 ">
          <a
            href="/#about"
            onClick={handleClose}
            className="font-medium text-[#261C82] hover:text-[#8278E2] "
          >
            About
          </a>

          <a
            href="/#services"
              onClick={handleClose}
            className="font-medium  text-[#261C82] hover:text-[#8278E2] "
          >
            Services
          </a>

          <a
            href="/#portfolio"
              onClick={handleClose}
            className="font-medium text-[#261C82] hover:text-[#8278E2] "
          >
            Portfolio
          </a>

          <a
            href="/#testimonials"
              onClick={handleClose}
            className="font-medium  text-[#261C82] hover:text-[#8278E2] "
          >
            Testimonials
          </a>

          <Link
            to="/blog"
              onClick={handleClose}
            className="font-medium  text-[#261C82] hover:text-[#8278E2] "
          >
            Blog
          </Link>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
