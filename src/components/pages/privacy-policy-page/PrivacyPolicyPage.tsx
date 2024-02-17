'use client';

import {Box, Typography} from "@mui/material";

import * as styles from './PrivacyPolicyPage.styles';
import {useTranslations} from "next-intl";

const PrivacyPolicyPage = () => {
	const t = useTranslations('pages.privacy_policy')

	return (
		<Box sx={styles.pageLayout}>
			<Typography variant='h4' sx={styles.title}>
				{t('first_title')}
			</Typography>
			<Typography sx={styles.text}>
				{t('first_text')}: https://www.invictusmedical.com.ua
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				{t('second_title')}
			</Typography>
			<Typography sx={styles.text}>
				{t('second_text')}
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				{t('third_title')}
			</Typography>
			<Typography sx={styles.text}>
				{t('third_text')}
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				Cookies
			</Typography>
			<Typography sx={styles.text}>
				{t('fourth_text')}
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				{t('fifth_title')}
			</Typography>
			<Typography sx={styles.text}>
				{t('fifth_text')}
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				{t('sixth_title')}
			</Typography>
			<Typography sx={styles.text}>
				{t('sixth_text')}
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				{t('seventh_title')}
			</Typography>
			<Typography sx={styles.text}>
				{t('seventh_text')}
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				{t('eighth_title')}
			</Typography>
			<Typography sx={styles.text}>
				{t('eighth_text')}
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				{t('ninth_title')}
			</Typography>
			<Typography sx={styles.text}>
				{t('ninth_text')}
			</Typography>
		</Box>
	);
}

export default PrivacyPolicyPage;