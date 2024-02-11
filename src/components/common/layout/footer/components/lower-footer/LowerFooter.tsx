import {Box, Typography} from "@mui/material";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

import * as sxStyles from './LowerFooter.styles'
import styles from '../../Footer.module.scss';

const LowerFooter = () => {
	const t = useTranslations('navigation.footer')
	const locale = useLocale();

  return (
    <Box sx={sxStyles.lowerFooter}>
      <Box sx={sxStyles.pptc}>
        <Link href={`/${locale}/privacy-policy`} className={styles['footerLinks']}>
	        {t('privacy_policy')}
        </Link>
        <Link href={`/${locale}/privacy-policy`} className={styles['footerLinks']}>
	        {t('terms_and_conditions')}
        </Link>
      </Box>
      <Typography sx={sxStyles.copyright}>
        ©2023 Invictus Medical Technologies Ukraine
      </Typography>
    </Box>
  );
};

export default LowerFooter;