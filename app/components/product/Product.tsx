import Image from "next/image";
import "./product.css";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Product() {
  return (
    <section className="w-full product-container font-[family-name:var(--monda)]">
      <div className="container mx-auto ">
        <div className="w-full flex items-center justify-between content-center flex-wrap-reverse products">
          <div className="product-mockup">
            <Image
              src={"/images/shrader.png"}
              width={200}
              height={400}
              alt="Shrader Technologies"
            ></Image>
          </div>
          <div className="product-text">
            <h2>Start Your Project</h2>
            <p>
              Affordable Apps with Offshore Development, AI & Social Media
              Expertise
            </p>
            <div className="product-button font-[family-name:var(--poppins)]">
              <Link href="/contact">
                Build it Now{" "}
                <FaExternalLinkAlt className="h-4 w-4 build-button" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
