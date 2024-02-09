'use client'

import FlexibleTextBlock from "@/components/common/ui/flexible-text-block/FlexibleTextBlock";
import {Box, Typography} from "@mui/material";
import aboutInvictus from "../../../../../../public/images/about-invictus.png";
import Image from "next/image";
import {useTranslations} from "next-intl";

import * as sxStyles from './MobileAboutInvictus.styles';
import styles from "@/components/pages/about-us-page/AboutUsPage.module.scss";

const MobileAboutInvictus = () => {
	const t = useTranslations('pages.about_us');

	return (
		<Box sx={sxStyles.aboutInvictusBlock}>
			<Image src={aboutInvictus} alt={'About IMTU image'} className={styles.aboutInvictus}/>
			<Typography variant='h3' sx={sxStyles.aboutInvictusHeader}>
				{t('about_imtu_title')}
			</Typography>
			<FlexibleTextBlock sx={sxStyles.aboutInvictusText}>
				{t('about_imtu_text')}
			</FlexibleTextBlock>
		</Box>
	);
};

export default MobileAboutInvictus