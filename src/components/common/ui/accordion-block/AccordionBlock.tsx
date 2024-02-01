'use client';

import {FC, ReactNode, useState} from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography
} from "@mui/material";
import * as styles from './AccordionBlock.styles'
import {ChevronDownIcon} from "@heroicons/react/24/outline";

interface AccordionBlockProps {
	headerText: string;
	mainText: string | ReactNode;
	key?: any;
}

const AccordionBlock: FC<AccordionBlockProps> = ({headerText, mainText, key}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<Accordion
			expanded={isOpen}
			onChange={handleClick}
			sx={styles.accordionBlock}
			// disableGutters
			key={key}
		>
			<AccordionSummary
				expandIcon={<ChevronDownIcon width={24} color={'white'}/>}
				sx={styles.accordionHeader}
			>
				<Typography variant='h6' sx={styles.accordionHeaderText}>
					{headerText}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Box sx={styles.accordionMainText}>
					{mainText}
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};

export default AccordionBlock;