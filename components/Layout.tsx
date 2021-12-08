import Link from "next/link";
import { Navbar } from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />

      <div>{children}</div>

      <footer className="text-center pt-10">
        <p>Copyright 2021</p>
      </footer>
    </>
  );
}
