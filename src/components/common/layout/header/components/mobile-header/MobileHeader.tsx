'use client';

import {AppBar, Box, Link, Typography} from "@mui/material";
import Image from "next/image";
import logoSmall from "../../../../../../../public/images/logo-small.png";
import * as styles from './MobileHeader.styles';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import MobileDrawer from "./components/mobile-drawer/MobileDrawer";
import {useState} from "react";
import LangSwitcher from "@/components/common/ui/lang-switcher/LangSwitcher";
import {useLocale} from "next-intl";

const MobileHeader = () => {
  const [drawerState, setDrawerState] = useState<boolean>(false);
	const locale = useLocale();
  const toggleDrawer = () => {
    setDrawerState(!drawerState)
  };

  return (
    <AppBar sx={styles.headerContainer}>
      <Link href={'/'} sx={styles.logoLink}>
        <Image
          src={logoSmall}
          alt={"IMTU logo"}
          height={45}
          width={117}
        />
      </Link>
      <Box sx={styles.rightBlock}>
	      <LangSwitcher locale={locale}/>
        {!drawerState ? (
          <Bars3Icon
            width={27}
            onClick={toggleDrawer}
            style={{cursor: 'pointer'}}
          />
        ) : (
          <XMarkIcon
            width={27}
            onClick={toggleDrawer}
            style={{cursor: 'pointer'}}
          />
        )}
      </Box>
      <MobileDrawer
        drawerState={drawerState}
        toggleDrawer={toggleDrawer}
      />
    </AppBar>
  );
}

export default MobileHeader;