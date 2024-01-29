import {Box, Drawer } from "@mui/material";
import * as styles from './MobileDrawer.styles';
import Tab from "@/components/common/ui/tab/Tab";
import Link from "next/link";
import { mainLinks } from "../../../../constants";
import { FC } from "react";


interface MobileDrawerProps {
  drawerState: boolean;
  toggleDrawer: () => void;
}

const MobileDrawer: FC<MobileDrawerProps> = ({drawerState, toggleDrawer}) => {
  return (
    <Drawer
      anchor="top"
      open={drawerState}
      onClose={toggleDrawer}
    >
      <Box sx={styles.tabList}>
        {mainLinks.map((item, index) => (
          <Link key={index} href={item.link} onClick={toggleDrawer}>
            <Tab startIcon={item.icon} label={item.label} link={item.link}/>
          </Link>
        ))}
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;