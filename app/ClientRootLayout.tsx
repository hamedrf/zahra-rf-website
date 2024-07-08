"use client";

import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import $ from "jquery";

const inter = Inter({ subsets: ["latin"] });

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init({
      duration: 1200,
      offset: 200,
      delay: 100,
    });

    const handleScroll = () => {
      const offset = $("#about").offset();
      if (offset) {
        const scrollPoint = offset.top - 300;
        const targetElement = $(".footer");

        const scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        if (scrollTop !== undefined && scrollTop >= scrollPoint) {
          targetElement.removeClass("d-none");
        } else {
          targetElement.addClass("d-none");
        }
      }
    };

    $(window).on("scroll", handleScroll);
  }, []);

  return <div className={inter.className}>{children}</div>;
}
