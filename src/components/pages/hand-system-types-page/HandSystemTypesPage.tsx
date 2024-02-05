'use client';

import PageLayout from "@/components/common/layout/page-layout/PageLayout";
import {Box, Fade, Typography, useMediaQuery} from "@mui/material";
import Image from "next/image";
import * as sxStyles from './HandSystemTypesPage.styles'
import handSystem2 from '../../../../public/images/hand-system2.png';
import styles from './HandSystemTypesPage.module.scss'
import theme from "@/styles/theme/theme";
import {handSystemsDescriptions} from "@/components/pages/hand-system-types-page/constants";
import AccordionBlock from "@/components/common/ui/accordion-block/AccordionBlock";
import HandTypeFoldingBlock from "@/components/common/ui/hand-type-folding-block/HandTypeFoldingBlock";
import {useEffect, useState} from "react";

const HandSystemTypesPage = () => {
	const isMobile = useMediaQuery(theme.breakpoints.down('desktopMedium'));
	const [openedBlock, setOpenedBlock] = useState('');
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setChecked(true);
		}, 1300);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
	}, [openedBlock]);

	return (
		<PageLayout>
			<Box sx={sxStyles.imageBlock(checked)}>
				<Box sx={sxStyles.imageBlockText}>
					<Typography variant='h1' sx={sxStyles.imageBlockTitle(checked)}>
						Типи ручної системи VHP
					</Typography>
					<Typography variant='h5' sx={sxStyles.imageBlockSubtitle}>
						Оберіть варіант
					</Typography>
				</Box>
				<Image src={handSystem2} alt={"Hand system image"} className={styles.handSystem}/>
			</Box>
			<Box sx={sxStyles.systemTypes}>
				{handSystemsDescriptions.map((desc, index) => (
					isMobile ? (
						<AccordionBlock
							key={index}
							headerText={desc.title}
							mainText={desc.text}
						/>
					) : (
						<HandTypeFoldingBlock
							key={index}
							title={desc.title}
							mainText={desc.text}
							openedBlock={openedBlock}
							setOpenedBlock={setOpenedBlock}
						/>
					)
				))}
			</Box>
		</PageLayout>
	);
};

export default HandSystemTypesPage;