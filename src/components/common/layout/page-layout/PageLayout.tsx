import {FC, ReactNode} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";
import * as styles from './PageLayout.styles';
import {SxProps, Theme} from "@mui/system";
import mergeSx from "@/lib/utils/MergeSxStylesUtil";

interface PageLayoutProps {
  description?: string;
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

const PageLayout: FC<PageLayoutProps> = ({children, sx = {}}: PageLayoutProps) => {
  return (
    <>
      <Header/>
      <Box sx={styles.headerIndent}></Box>
      <Box sx={mergeSx(styles.pageContent, sx)}>
        {children}
      </Box>
	    <Footer/>
    </>
  );
};

export default PageLayout;