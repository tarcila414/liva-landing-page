"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ScrollSpy() {
  const router = useRouter();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              router.replace(`/#${id}`, { scroll: false });
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [router]);

  return null;
}
