'use client';

import DesktopHeader from "@/components/common/layout/header/components/desktop-header/DesktopHeader";
import theme from "@/styles/theme/theme";
import { useMediaQuery } from "@mui/material";
import MobileHeader from "@/components/common/layout/header/components/mobile-header/MobileHeader";

const Header = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('desktop'));
  return (
    <>
      {!isMobile ? (
        <DesktopHeader/>
      ) : (
        <MobileHeader/>
      )}
    </>
  );
};

export default Header