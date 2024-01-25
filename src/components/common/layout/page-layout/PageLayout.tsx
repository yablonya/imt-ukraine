import {FC, ReactNode} from "react";
import Header from "../header/Header";

interface PageLayoutProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const PageLayout: FC<PageLayoutProps> = ({children}: PageLayoutProps) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};

export default PageLayout;