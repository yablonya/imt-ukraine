'use client';

import Image from "next/image";
import aboutInvictus from "../../../../../../../public/images/about-invictus.png";
import {Box, Typography} from "@mui/material";
import {useTranslations} from "next-intl";

import * as sxStyles from './DesktopAboutInvictus.styles';
import styles from '../../../AboutUsPage.module.scss';

const DesktopAboutInvictus = () => {
	const t = useTranslations('pages.about_us');

	return (
		<Box sx={sxStyles.aboutInvictusBlock}>
			<Image src={aboutInvictus} alt={'About IMTU image'} className={styles.aboutInvictus}/>
			<Box sx={sxStyles.aboutInvictusTextContainer}>
				<Typography variant='h3' sx={sxStyles.aboutInvictusHeader}>
					{t('about_imtu_title')}
				</Typography>
				<Box sx={sxStyles.textBlockBorders}>
					<Typography sx={sxStyles.aboutInvictusText}>
						{t('about_imtu_text')}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default DesktopAboutInvictus;