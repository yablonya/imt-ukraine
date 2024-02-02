'use client'

import {FC, ReactNode, useEffect, useRef, useState} from "react";
import {Box, Typography} from "@mui/material";
import * as styles from './HandTypeFoldingBlock.styles';
import { XMarkIcon } from "@heroicons/react/24/outline";
import useWindowWidth from "@/hooks/use-window-width/useWindowWidth";

interface HandTypeFoldingBlockProps {
	title: string,
	mainText: string | ReactNode,
}

const HandTypeFoldingBlock: FC<HandTypeFoldingBlockProps> = ({
	title,
	mainText,
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
			// console.log(blockRef.current.getBoundingClientRect().left)
			setLeftDistance(blockRef.current.getBoundingClientRect().left);
		}
	}, [windowWidth, isOpen]);


	const toggleOpen = () => {
		if (!isOpen) {
			setIsOpen(true);
			setTimeout(() => {
				setIsDropped(true);
			}, 500);
			setTimeout(() => {
				setIsStretched(true);
			}, 850);
		} else {
			setIsStretched(false);
			setTimeout(() => {
				setIsDropped(false);
			}, 500);
			setTimeout(() => {
				setIsOpen(false);
			}, 950);
		}
	}

	return (
		<Box {...rest}>
			<Box sx={styles.closingBlock} onClick={toggleOpen}>
				<XMarkIcon style={{width: '35px', color: '#3D8361'}}/>
			</Box>
			<Box
				ref={blockRef}
				sx={styles.foldingBlock(isOpen, isDropped, leftDistance, isStretched)}
				onClick={toggleOpen}
			>
				<Typography variant='h6' sx={styles.foldingBlockTitle(isOpen)} >
					{title}
				</Typography>
				<Box sx={styles.foldingBlockMaintext(isOpen, isStretched)}>
					{mainText}
				</Box>
			</Box>
		</Box>
	);
};

export default HandTypeFoldingBlock;