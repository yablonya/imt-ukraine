import {FC, ReactNode} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";
import * as styles from './PageLayout.styles';

interface PageLayoutProps {
  children?: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header/>
      <Box sx={styles.headerIndent}></Box>
      <Box sx={styles.pageContent}>
        {children}
      </Box>
	    <Footer/>
    </>
  );
}

export default PageLayout;