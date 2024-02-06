'use client';

import PageLayout from "@/components/common/layout/page-layout/PageLayout";
import { Box, Button, Fade, Snackbar, Typography } from "@mui/material";
import Image from 'next/image';
import * as sxStyles from './ContactUsPage.styles'
import styles from './ContactUsPage.module.scss'
import handsArt from '../../../../public/images/hands-art.png'
import writeSticker from '../../../../public/images/write-sticker.png'
import ContactLink from "@/components/pages/contact-us-page/components/contact-link/ContactLink";
import {contactLinks} from "@/components/pages/contact-us-page/constants";
import Input from "@/components/common/ui/input/Input";
import {SetStateAction, useState} from "react";
import {FormData} from '@/types/FormData';
import {formValidator} from "@/lib/utils/ValidateForm";
import sendEmailLetter from "@/lib/api";

const ContactUsPage = () => {
	const [sendingResult, setSendingResult] = useState({
		isError: false,
		message: ''
	});

	const [isNameTouched, setIsNameTouched] = useState(false);
	const [isEmailTouched, setIsEmailTouched] = useState(false);
	const [isSubTouched, setIsSubTouched] = useState(false);
	const [isMesTouched, setIsMesTouched] = useState(false);

	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});


	const handleSubmit = async () => {
		try {
			await sendEmailLetter(formData)
			setSendingResult({isError: false, message: 'Лист успішно відправлено'});
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: '',
			})
			setIsNameTouched(false);
			setIsEmailTouched(false);
			setIsSubTouched(false);
			setIsMesTouched(false);
		} catch (error) {
			setSendingResult({isError: true, message: 'Щось пішло не так... Спробуйте пізніше'});
		}
	};

	const handleCloseToast = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setSendingResult({...sendingResult, message: ''});
		setTimeout(() => {
			setSendingResult({isError: false, message: ''});
		}, 400)
	};

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
						<Input
							label="Ім'я"
							placeHolder="Напишіть ваше ім'я"
							name='name'
							value={formData.name}
							data={formData}
							setData={setFormData}
							isTouched={isNameTouched}
							setIsTouched={setIsNameTouched}
						/>
						<Input
							label="Email"
							placeHolder="Напишіть ваш email"
							name='email'
							type='email'
							value={formData.email}
							data={formData}
							setData={setFormData}
							isTouched={isEmailTouched}
							setIsTouched={setIsEmailTouched}
						/>
						<Input
							label="Тема"
							placeHolder="Напишіть тему"
							name='subject'
							value={formData.subject}
							data={formData}
							setData={setFormData}
							isTouched={isSubTouched}
							setIsTouched={setIsSubTouched}
						/>
						<Input
							label="Повідомлення"
							placeHolder="Напишіть повідомлення"
							multiline={true}
							rows={4}
							name='message'
							value={formData.message}
							data={formData}
							setData={setFormData}
							isTouched={isMesTouched}
							setIsTouched={setIsMesTouched}
						/>
						 <Button
							 type='submit'
							 variant='contained'
							 sx={sxStyles.sendButton}
							 disabled={formValidator(formData)}
							 onClick={handleSubmit}
						 >
							 Надіслати
						 </Button>
					</Box>
					<Image src={writeSticker} alt='Sticker' className={styles.writeSticker}/>
				</Box>
				<Snackbar
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom'}}
					open={!!sendingResult.message}
					onClose={handleCloseToast}
					message={sendingResult.message}
					autoHideDuration={3000}
					sx={sxStyles.toast(sendingResult.isError)}
				/>
			</Box>
		</PageLayout>
	);
};

export default ContactUsPage