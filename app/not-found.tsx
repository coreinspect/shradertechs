"use client";
import { usePathname } from "next/navigation"; // For App Router
import Navbar from "./components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname(); // This gives you the current path

  // Remove the leading '/' if it exists
  const attemptedPath = pathname ? pathname.slice(1) : "";

  return (
    <div>
      <Navbar />
      <div className="w-full">
        <div className="container mx-auto flex justify-between not-found">
          <div className="image-notfound">
            <Image
              src="/images/not-found.png"
              alt="404"
              width={400}
              height={400}
            ></Image>
          </div>
          <div className="text-notfound font-[family-name:var(--poppins)]">
            <h2>404</h2>
            <p className="lost">UH OH! You&apos;re lost.</p>
            <p>
              Oops! The page <strong>{attemptedPath || "home"}</strong> you are
              looking for does not exist. How you got here is a mystery.
            </p>

            <p>
              But you can click the button below to go back to the homepage.
            </p>
            <Link href="/" className="notfound-button">
              <button>Go Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
