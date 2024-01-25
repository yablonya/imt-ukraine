import {AppBar, Box, Link, Typography} from "@mui/material";
import Image from "next/image";
import logoSmall from "../../../../../../../public/images/logo-small.png";
import * as styles from './MobileHeader.styles';
import {Bars3Icon} from "@heroicons/react/24/outline";

const MobileHeader = () => {
  return (
    <AppBar sx={styles.headerContainer}>
      <Link href={'/'} sx={styles.logoLink}>
        <Image src={logoSmall} alt={"IMTU logo"} height={45} width={117}/>
      </Link>
      <Box sx={styles.rightBlock}>
        <Typography>UA</Typography>
        <Bars3Icon width={30}/>
      </Box>
    </AppBar>
  );
};

export default MobileHeader;