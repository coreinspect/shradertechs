import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaArrowUpRightDots, FaSquareYoutube } from "react-icons/fa6";
import "./footer.css";
import { NavData } from "../data/data";

export default function Footer() {
  return (
    <section className="w-full font-[family-name:var(--poppins)] footer-container  text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 flex-wrap-reverse footer">
          {/* Contact Section */}
          <div className="flex-1 text-center md:text-left mb-6 md:mb-0 order-1 md:order-3 footer-contact">
            <h3 className="text-xl font-bold">Something in mind?</h3>
            <div className="mt-2 footer-btn-container">
              <Link
                href="/contact"
                className="text-blue-500 hover:underline footer-button"
              >
                Contact Us
                <span>
                  <FaArrowUpRightDots className="h-6 w-6 pl-2" />
                </span>
              </Link>
            </div>
          </div>

          {/* Company Info */}
          <div className="flex-1 text-center md:text-left mb-6 md:mb-0 order-3 md:order-1">
            <h3 className="text-xl font-bold">Shrader Technologies</h3>
            <p className="mt-2 text-gray-400">
              Specializes in affordable app and web development, Generative AI,
              and social media growth strategies to help brands thrive on
              YouTube, Facebook, TikTok, and other platforms.
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <Link href="https://www.facebook.com/shradertech/">
                <FaFacebookSquare className="h-6 w-6 text-blue-600" />
              </Link>
              <Link href="hhttps://youtube.com/@shradertechnologies?si=sFJsVEXKMER252PV">
                <FaSquareYoutube className="h-6 w-6 text-red-600" />
              </Link>
            </div>
            <p className="mt-2 text-gray-400 text-xs">
              © All Rights Reserved by Shrader Technologies
            </p>
          </div>

          {/* Company Links */}
          <div className="flex-1 text-center ml-20 md:text-left mb-6 md:mb-0 order-2 md:order-2 md:pl-0 footer-links">
            <h3 className="text-xl font-bold">Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              {NavData.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="font-700 font-[family-name:var(--poppins)] hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
