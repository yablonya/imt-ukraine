import PageLayout from "@/components/common/layout/page-layout/PageLayout";
import { Box, Button, Fade, Typography } from "@mui/material";
import Image from 'next/image';
import * as sxStyles from './ContactUsPage.styles'
import styles from './ContactUsPage.module.scss'
import handsArt from '../../../../public/images/hands-art.png'
import writeSticker from '../../../../public/images/write-sticker.png'
import ContactLink from "@/components/pages/contact-us-page/components/contact-link/ContactLink";
import {contactLinks} from "@/components/pages/contact-us-page/constants";
import Input from "@/components/common/ui/input/Input";

const ContactUsPage = () => {
	return (
		<PageLayout>
			<Box sx={sxStyles.handsArtBlock}>
				<Image
					src={handsArt}
					alt={"Hands art image"}
					className={styles.handsArt}
				/>
				<Fade in={true} timeout={800}>
					<Typography variant='h1' sx={sxStyles.handsArtText}>
						Ми будемо раді вам допомогти
					</Typography>
				</Fade>
			</Box>
			<Box sx={sxStyles.linksBlock}>
				{contactLinks.map((link, index) => (
					<ContactLink
						key={index}
						icon={link.icon}
						title={link.title}
						text={link.message}
						href={link.href}
					/>
				))}
			</Box>
			<Box sx={sxStyles.formBlock}>
				<Typography variant='h4' sx={sxStyles.formBlockHeader}>
					Залиште своє повідомлення тут
				</Typography>
				<Box sx={sxStyles.formWithSticker}>
					<Box sx={sxStyles.form}>
						<Input label="Ім'я" placeHolder="Напишіть ваше ім'я"/>
						<Input label="Email" placeHolder="Напишіть ваш email"/>
						<Input label="Тема" placeHolder="Напишіть тему"/>
						<Input
							label="Повідомлення"
							placeHolder="Напишіть повідомлення"
							multiline={true}
							rows={4}
						/>
						 <Button variant='contained' sx={sxStyles.sendButton}>
							 Надіслати
						 </Button>
					</Box>
					<Image src={writeSticker} alt='Sticker' className={styles.writeSticker}/>
				</Box>
			</Box>
		</PageLayout>
	);
};

export default ContactUsPage