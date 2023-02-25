import { Footer, Header } from "@/components";

type MainLayoutsProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutsProps> = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};
