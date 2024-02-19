'use client';

import {Box, Link, Typography} from "@mui/material";
import {socialNetworksLinks} from "@/components/common/layout/footer/components/upper-footer/constants";
import Image from 'next/image';
import logo from '../../../../../../../public/images/logo.png'
import {useLocale, useTranslations} from "next-intl";
import mergeSx from "@/lib/utils/MergeSxStylesUtil";

import * as sxStyles from './UpperFooter.styles'
import styles from '../../Footer.module.scss';

const UpperFooter = () => {
	const t = useTranslations('navigation.footer')
	const locale = useLocale();

  return (
    <Box sx={sxStyles.upperFooter}>
      <Link href={'/'}>
        <Image src={logo} alt={"IMTU logo"} className={styles['logo']}/>
      </Link>
      <Box sx={sxStyles.footerLists}>
        <Box>
          <Typography sx={sxStyles.footerListHeader}>
	          {t('contact_us')}
					</Typography>
          <Box sx={sxStyles.footerList}>
	          <Link
		          href='tel:380970626901%20'
		          sx={sxStyles.listLink}
		          target="_blank"
		          rel="noreferrer"
	          >
		          +380 97 062 6901
	          </Link>
	          <Link
		          href='mailto:info@invictusmedical.com.ua'
		          sx={sxStyles.listLink}
		          target="_blank"
		          rel="noreferrer"
	          >
		          info@invictusmedical.com.ua
	          </Link>
	          <Link href={`/${locale}/contact-us`} sx={sxStyles.listLink}>
		          {t('send_message')}
	          </Link>
	          <Link
		          href='https://maps.app.goo.gl/wA6pe6UL5N4j8TWa6'
		          sx={sxStyles.listLink}
		          target="_blank"
		          rel="noreferrer"
	          >
		          {t('address')}
	          </Link>
          </Box>
        </Box>
        <Box>
          <Typography
	          sx={mergeSx(sxStyles.footerListHeader, {display: {mobile: 'none', mobileSemiMedium: 'block'}})}
          >
	          {t('social_networks')}
					</Typography>
          <Box sx={sxStyles.footerList}>
            {socialNetworksLinks.map((item, index) => (
	            <Link
		            key={index}
		            href={item.link}
		            sx={sxStyles.listLink}
		            target="_blank"
		            rel="noreferrer"
	            >
		            <Box sx={sxStyles.socialNetIcon}>{item.icon}</Box>
		            <Typography sx={sxStyles.socialNetLinkText}>
			            {item.text}
		            </Typography>
	            </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UpperFooter;