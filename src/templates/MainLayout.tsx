import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
