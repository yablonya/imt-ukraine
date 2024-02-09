'use client';

import {Box, Typography, useMediaQuery} from "@mui/material";
import Image from "next/image";
import handSystem2 from '../../../../public/images/hand-system2.png';
import theme from "@/styles/theme/theme";
import {handSystemsDescriptions} from "./constants";
import AccordionBlock from "@/components/common/ui/accordion-block/AccordionBlock";
import HandTypeFoldingBlock from "@/components/common/ui/hand-type-folding-block/HandTypeFoldingBlock";
import {useEffect, useState} from "react";
import useDelay from "@/hooks/use-delay/useDelay";
import {useTranslations} from "next-intl";

import * as sxStyles from './HandSystemTypesPage.styles'
import styles from './HandSystemTypesPage.module.scss'

const HandSystemTypesPage = () => {
	const isMobile = useMediaQuery(theme.breakpoints.down('desktopMedium'));
	const [openedBlock, setOpenedBlock] = useState('');
	const checked = useDelay(800);
	const t = useTranslations('pages.hand_system_types')

	useEffect(() => {
	}, [openedBlock]);

	return (
		<>
			<Box sx={sxStyles.imageBlock(checked)}>
				<Box sx={sxStyles.imageBlockText}>
					<Typography variant='h1' sx={sxStyles.imageBlockTitle(checked)}>
						{t('title')}
					</Typography>
					<Typography variant='h5' sx={sxStyles.imageBlockSubtitle}>
						{t('subtitle')}
					</Typography>
				</Box>
				<Image src={handSystem2} alt={"Hand system image"} className={styles.handSystem}/>
			</Box>
			<Box sx={sxStyles.systemTypes}>
				{handSystemsDescriptions.map((desc, index) => (
					isMobile ? (
						<AccordionBlock
							key={index}
							headerText={t(desc.title)}
							mainText={t(desc.text)}
						/>
					) : (
						<HandTypeFoldingBlock
							key={index}
							title={t(desc.title)}
							mainText={t(desc.text)}
							openedBlock={openedBlock}
							setOpenedBlock={setOpenedBlock}
						/>
					)
				))}
			</Box>
		</>
	);
};

export default HandSystemTypesPage;