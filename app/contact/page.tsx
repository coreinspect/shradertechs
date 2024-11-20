import { Metadata } from "next";
import Form from "./Form";
import Navbar from "../components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Contanct | Shrader Technologies",
  description:
    "Affordable Apps with Offshore Development, AI & Social Media Expertise",
};
export default function Page() {
  return (
    <>
      <Navbar />
      <Form />
    </>
  );
}
