'use client';

import {Box, Typography} from "@mui/material";
import Image from 'next/image';
import handSystem from '../../../../public/images/hand-system.png';
import Link from "next/link";
import AddOnCard from "./components/add-on-card/AddOnCard";
import { addOnsDescriptions } from "./constants";
import useDelay from "@/hooks/use-delay/useDelay";
import {useLocale, useTranslations} from "next-intl";

import * as sxStyles from './HandsPage.styles';
import styles from './HandsPage.module.scss';

const HandsPage = () => {
	const checked = useDelay(800);
	const t = useTranslations('pages.hands');
	const locale = useLocale();

	return (
		<>
			<Box sx={sxStyles.systemTypesBlock(checked)}>
				<Image src={handSystem} alt='VHP Hand system image' className={styles.handSystem}/>
				<Box sx={sxStyles.systemTypes(checked)}>
					<Typography variant='h3' sx={sxStyles.systemTypesTitle}>
						{t('hand_types_title')}
					</Typography>
					<Typography variant='h5' sx={sxStyles.systemTypesText}>
						{t('hand_types')}
					</Typography>
					<Link href={`/${locale}/hands/hand-system-types`}>
						<Typography variant='h5' sx={sxStyles.learnMoreLink}>
							{t('hand_types_link')}
						</Typography>
					</Link>
				</Box>
			</Box>

			<Box sx={sxStyles.addOnsBlock}>
				<Box>
					<Typography variant='h2' sx={sxStyles.addOnsHeader}>
						{t('add_ons_title')}
					</Typography>
					<Typography variant='h5' sx={sxStyles.addOnsText}>
						{t('add_ons_text')}
					</Typography>
				</Box>
				<Box sx={sxStyles.addOnsCards}>
					{addOnsDescriptions.map((addOn, index) => (
						<AddOnCard
							key={index}
							image={addOn.image}
							title={t(addOn.title)}
							text={t(addOn.text)}
							cardColor={addOn.cardColor}
						/>
					))}
				</Box>
			</Box>
		</>
	);
};

export default HandsPage;