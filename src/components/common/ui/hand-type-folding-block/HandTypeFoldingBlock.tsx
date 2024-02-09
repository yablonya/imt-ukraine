'use client'

import {Dispatch, FC, ReactNode, SetStateAction, useEffect, useRef, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import * as styles from './HandTypeFoldingBlock.styles';
import { XMarkIcon } from "@heroicons/react/24/outline";
import useWindowWidth from "@/hooks/use-window-width/useWindowWidth";

interface HandTypeFoldingBlockProps {
	title: string,
	mainText: string,
	openedBlock: string,
	setOpenedBlock: Dispatch<SetStateAction<string>>,
}

const HandTypeFoldingBlock: FC<HandTypeFoldingBlockProps> = ({
	title,
	mainText,
	openedBlock,
	setOpenedBlock,
	...rest
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDropped, setIsDropped] = useState(false);
	const [isStretched, setIsStretched] = useState(false);
	const blockRef = useRef<HTMLDivElement | null>(null);
	const [leftDistance, setLeftDistance] = useState<number>(0);
	const windowWidth = useWindowWidth();

	useEffect(() => {
		if (blockRef.current) {
			setLeftDistance(blockRef.current.getBoundingClientRect().left);
		}
	}, [windowWidth, isOpen]);

	useEffect(() => {
		if (openedBlock !== title && openedBlock !== '') {
			handleClose()
		}
	}, [openedBlock]);


	const handleOpen = () => {
		if (openedBlock !== title && openedBlock !== '') {
			setOpenedBlock(title)
			setTimeout(() => {
				setIsOpen(true);
				setTimeout(() => {
					setIsDropped(true);
					setTimeout(() => {
						setIsStretched(true);
					}, 350);
				}, 500);
			}, 800)
		} else {
			setOpenedBlock(title)
			setIsOpen(true);
			setTimeout(() => {
				setIsDropped(true);
				setTimeout(() => {
					setIsStretched(true);
				}, 350);
			}, 500);
		}

	}

	const handleClose = () => {
		if (isOpen) {
			setIsStretched(false);
			setTimeout(() => {
				setIsDropped(false);
				setTimeout(() => {
					setIsOpen(false);
				}, 450);
			}, 500);
		}
	}

	return (
		<Box {...rest}>
			<Box
				sx={styles.closingBlock}
				onClick={() => {
					handleClose();
					setOpenedBlock('')
				}}
			>
				<XMarkIcon style={{width: '35px', color: '#3D8361'}}/>
			</Box>
			<Accordion
				ref={blockRef}
				disableGutters
				sx={styles.accordeonBlock(isOpen, isDropped, leftDistance)}
				expanded={isStretched}
				onClick={handleOpen}
			>
				<AccordionSummary sx={styles.accordeonTitle(isOpen, isDropped)}>
					<Typography variant='h6' sx={styles.accordeonTitleText} >
						{title}
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={styles.accordeonMainText}>
					{mainText}
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default HandTypeFoldingBlock;