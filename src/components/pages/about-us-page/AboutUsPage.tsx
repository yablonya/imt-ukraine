'use client';

import {Box, List, ListItem, ListItemIcon, Typography} from "@mui/material";
import Image from 'next/image';
import DesktopVHPBlock from "./vhp-block/desktop-vhp-block/DesktopVHPBlock";
import MobileVHPBlock from "./vhp-block/mobile-vhp-block/MobileVHPBlock";
import aboutFirstHand from '../../../../public/images/about-first-hand.jpg';
import {CheckCircleIcon} from "@heroicons/react/24/outline";
import {featuresList} from "./constants";
import DesktopAboutInvictus from "./about-invictus/desktop-about-invictus/DesktopAboutInvictus";
import MobileAboutInvictus from "./about-invictus/mobile-about-invictus/MobileAboutInvictus";
import {useTranslations} from "next-intl";

import * as sxStyles from './AboutUsPage.styles';
import styles from './AboutUsPage.module.scss'

const AboutUsPage = () => {
	const t = useTranslations('pages.about_us');
	const tF = useTranslations('pages.about_us.features');

  return (
    <>
	    <DesktopVHPBlock/>
	    <MobileVHPBlock/>

      <Box sx={sxStyles.technologyBlock}>
        <Box sx={sxStyles.technologyTextContent}>
	        <Typography variant='h3' sx={sxStyles.technologyHeader}>
		        {t('technology_title')}
	        </Typography>
	        <Typography sx={sxStyles.technologyText}>
		        {t('technology_text')}
	        </Typography>
        </Box>
	      <Image src={aboutFirstHand} alt='VHP prosthetic arm' className={styles.aboutFirstHand}/>
      </Box>

	    <Box sx={sxStyles.featuresBlock}>
		    <Typography variant='h3' sx={sxStyles.featuresHeader}>
			    {tF('title')}
		    </Typography>
		    <Typography sx={sxStyles.listHeader}>
			    {tF('list_header')}
		    </Typography>
		    <List sx={sxStyles.featuresList}>
			    {featuresList.map((featureNum, index) => (
				    <ListItem key={index} sx={sxStyles.listItem}>
					    <ListItemIcon sx={sxStyles.listItemIcon}>
						    <CheckCircleIcon/>
					    </ListItemIcon>
					    {tF(featureNum)}
				    </ListItem>
			    ))}
		    </List>
	    </Box>

	    <DesktopAboutInvictus/>
	    <MobileAboutInvictus/>
    </>
  );
};

export default AboutUsPage;