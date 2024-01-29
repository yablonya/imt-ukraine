import {Box, Typography} from "@mui/material";
import * as sxStyles from './LowerFooter.styles'
import styles from '../../Footer.module.scss';
import Link from "next/link";

const LowerFooter = () => {
  return (
    <Box sx={sxStyles.lowerFooter}>
      <Box sx={sxStyles.pptc}>
        <Link href={'#'} className={styles['footerLinks']}>
          Політика конфіденційності
        </Link>
        <Link href={'#'} className={styles['footerLinks']}>
          Правила та умови
        </Link>
      </Box>
      <Typography sx={sxStyles.copyright}>
        ©2023 Invictus Medical Technologies Ukraine
      </Typography>
    </Box>
  );
};

export default LowerFooter