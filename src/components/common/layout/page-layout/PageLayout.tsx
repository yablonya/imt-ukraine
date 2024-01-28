import {FC, ReactNode} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";
import * as styles from './PageLayout.styles';

interface PageLayoutProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const PageLayout: FC<PageLayoutProps> = ({children}: PageLayoutProps) => {
  return (
    <>
      <Header/>
      <Box sx={styles.pageContent}>
        {children}
      </Box>
      <Footer/>
    </>
  );
};

export default PageLayout;