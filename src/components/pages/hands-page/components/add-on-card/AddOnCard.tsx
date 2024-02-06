import {StaticImageData} from "next/image";
import {FC} from "react";
import {Box, Typography} from "@mui/material";
import Image from 'next/image';
import styles from '../../HandsPage.module.scss';
import * as sxStyles from './AddOnCard.styles';

interface AddOnCardProps {
	image: StaticImageData,
	title: string,
	text: string,
	cardColor: string,
}

const AddOnCard: FC<AddOnCardProps> = ({
	image,
	title,
	text,
	cardColor,
	...rest
}) => {
	return (
		<Box sx={sxStyles.addOnCard(cardColor)} {...rest}>
			<Image src={image} alt={title} className={styles.addOn}/>
			<Box sx={sxStyles.addOnCardTextBox}>
				<Typography variant='h5'>
					{title}
				</Typography>
				<Typography sx={sxStyles.addOnCardText}>
					{text}
				</Typography>
			</Box>
		</Box>
	);
};

export default AddOnCard;