import PageLayout from "@/components/common/layout/page-layout/PageLayout";
import {Box, Typography, useMediaQuery} from "@mui/material";
import Image from 'next/image';
import handSystem from '../../../../public/images/hand-system.png';
import styles from './HandsPage.module.scss';
import * as sxStyles from './HandsPage.styles';
import Link from "next/link";
import AddOnCard from "./components/add-on-card/AddOnCard";
import { addOnsDescriptions } from "./constants";
import theme from "@/styles/theme/theme";



const HandsPage = () => {
	return (
		<PageLayout>
			<Box sx={sxStyles.systemTypesBlock}>
				<Image src={handSystem} alt='VHP Hand system image' className={styles.handSystem}/>
				<Box sx={sxStyles.systemTypes}>
					<Typography variant='h3' sx={sxStyles.systemTypesTitle}>
						Типи ручної системи VHP
					</Typography>
					<Typography variant='h5' sx={sxStyles.systemTypesText}>
						Добровільне закриття руки (VC Hand)
						<br/>
						Добровільна відкрита рука (VO Hand)
						<br/>
						Мала рука
						<br/>
						Рука LimbForge
						<br/>
						Допоміжні додатки
					</Typography>
					<Link href={"/hands/hand-system-types"}>
						<Typography variant='h5' sx={sxStyles.learnMoreLink}>
							Ознайомитись...
						</Typography>
					</Link>
				</Box>
			</Box>
			<Box sx={sxStyles.addOnsBlock}>
				<Box>
					<Typography variant='h2' sx={sxStyles.addOnsHeader}>
						Допоміжні Додатки
					</Typography>
					<Typography variant='h5' sx={sxStyles.addOnsText}>
						Invictus Medical пропонує різноманітні надруковані на 3D допоміжні пристрої, які сумісні з усіма версіями
						систем Victoria Hand, щоб допомагати виконувати певні завдання, такі як письмо або їжа.
					</Typography>
				</Box>
				<Box sx={sxStyles.addOnsCards}>
					{addOnsDescriptions.map((addOn, index) => (
						<AddOnCard
							image={addOn.image}
							title={addOn.title}
							text={addOn.text}
							key={index}
						/>
					))}
				</Box>
			</Box>
		</PageLayout>
	);
};

export default HandsPage;