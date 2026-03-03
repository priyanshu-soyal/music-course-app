import { footer } from "motion/react-client";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm md:text-base inter-var">
          &copy; {new Date().getFullYear()} MusicNext. All rights reserved.
        </p>
        <p className="text-sm md:text-base inter-var mt-2">
          Follow us on
          <a href="#" className="text-blue-500 hover:underline mx-1">
            Facebook
          </a>
          ,
          <a href="#" className="text-blue-400 hover:underline mx-1">
            Twitter
          </a>
          , and
          <a href="#" className="text-pink-500 hover:underline mx-1">
            Instagram
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
