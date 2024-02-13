'use client'

import {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import * as styles from './HandTypeFoldingBlock.styles';
import { XMarkIcon } from "@heroicons/react/24/outline";
import useWindowWidth from "@/hooks/use-window-width/useWindowWidth";

interface HandTypeFoldingBlockProps {
	title: string,
	mainText: string,
	openedBlock: { blockLabel: string },
	setOpenedBlock: Dispatch<SetStateAction<{ blockLabel: string }>>,
}

const HandTypeFoldingBlock: FC<HandTypeFoldingBlockProps> = ({
	title,
	mainText,
	openedBlock,
	setOpenedBlock,
	...rest
}) => {
	const windowWidth = useWindowWidth();
	const [isOpen, setIsOpen] = useState(false);
	const [isDropped, setIsDropped] = useState(false);
	const [isStretched, setIsStretched] = useState(false);
	const [leftDistance, setLeftDistance] = useState<number>(0);
	const blockRef = useRef<HTMLDivElement | null>(null);
	const openedBlockRef = useRef(openedBlock);
	openedBlockRef.current = openedBlock;

	useEffect(() => {
		if (blockRef.current) {
			setLeftDistance(blockRef.current.getBoundingClientRect().left);
		}
	}, [windowWidth, isOpen]);

	useEffect(() => {
		if (openedBlock.blockLabel && openedBlock.blockLabel !== title) {
			handleClose();
		}
	}, [openedBlock]);

	const handleOpen = () => {
		if (openedBlock.blockLabel && openedBlock.blockLabel !== title) {
			setOpenedBlock({...rest, blockLabel: title});
			setTimeout(() => {
				if (openedBlockRef.current.blockLabel === title) {
					setIsOpen(true);
					setTimeout(() => {
						if (openedBlockRef.current.blockLabel === title) {
							setIsDropped(true);
							setTimeout(() => {
								if (openedBlockRef.current.blockLabel === title) {
									setIsStretched(true);
								}
							}, 350);
						}
					}, 500);
				}
			}, 600);
		} else if (!openedBlock.blockLabel){
			setOpenedBlock({...rest, blockLabel: title})
			setIsOpen(true);
			setTimeout(() => {
				if (openedBlockRef.current.blockLabel === title) {
					setIsDropped(true);
					setTimeout(() => {
						if (openedBlockRef.current.blockLabel === title) {
							setIsStretched(true);
						}
					}, 350);
				}
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
					setOpenedBlock({...rest, blockLabel: ''})
				}}
			>
				<XMarkIcon style={{width: '35px', color: '#1976D2'}}/>
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