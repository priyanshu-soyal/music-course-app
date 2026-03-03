"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Home */}
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        {/* Courses */}
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses/guitar-for-beginners">
              Guitar for beginners
            </HoveredLink>
            <HoveredLink href="/courses/piano-masterclass">
              Piano Masterclass
            </HoveredLink>
            <HoveredLink href="/courses/drumming-essentials">
              Drumming Essentials
            </HoveredLink>
            <HoveredLink href="/courses/vocal-training">
              Vocal Training
            </HoveredLink>
            <HoveredLink href="/courses/music-theory-fundamentals">
              Music Theory Fundamentals
            </HoveredLink>
          </div>
        </MenuItem>

        {/* Contact */}
        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
