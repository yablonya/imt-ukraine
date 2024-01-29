import {AppBar, Box, Link, Toolbar, Typography} from "@mui/material";
import * as styles from './DesktopHeader.styles'
import Image from 'next/image';
import logoSmall from '../../../../../../../public/images/logo-small.png';
import { UAFlag } from "@/components/common/icons/UAFlag";
import { mainLinks } from "../../constants";


const DesktopHeader = () => {
  return (
    <AppBar sx={styles.headerContainer}>
      <Link href={'/'} sx={styles.logoLink}>
        <Image src={logoSmall} alt={"IMTU logo"} height={52} width={136}/>
      </Link>
      <Toolbar sx={styles.menu}>
        {mainLinks.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            sx={styles.link}
          >
            <Typography variant='h5'>{item.label}</Typography>
          </Link>
        ))}
      </Toolbar>
      <Box sx={styles.changeLang}>
        <Box sx={styles.langIcon}><UAFlag/></Box>
        <Typography>UA</Typography>
      </Box>
    </AppBar>
  );
};

export default DesktopHeader;