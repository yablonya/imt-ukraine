'use client';

import { Box, Button, Fade, Snackbar, Typography } from "@mui/material";
import Image from 'next/image';
import handsArt from '../../../../public/images/hands-art.png'
import writeSticker from '../../../../public/images/write-sticker.png'
import ContactLink from "./components/contact-link/ContactLink";
import {contactLinks} from "./constants";
import Input from "@/components/common/ui/input/Input";
import {useState} from "react";
import {FormData} from '@/types/FormData';
import {formValidator} from "@/lib/utils/ValidateForm";
import sendEmailLetter from "@/lib/api";
import {useLocale, useTranslations} from "next-intl";

import * as sxStyles from './ContactUsPage.styles'
import styles from './ContactUsPage.module.scss'

const ContactUsPage = () => {
	const t = useTranslations('pages.contact_us');
	const locale = useLocale();
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
			await sendEmailLetter(formData, locale)
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
		<>
			<Box sx={sxStyles.handsArtBlock}>
				<Image
					src={handsArt}
					alt={"Hands art image"}
					className={styles.handsArt}
				/>
				<Fade in={true} timeout={800}>
					<Typography variant='h1' sx={sxStyles.handsArtText}>
						{t('title')}
					</Typography>
				</Fade>
			</Box>
			<Box sx={sxStyles.linksBlock}>
				{contactLinks.map((link, index) => (
					<ContactLink
						key={index}
						icon={link.icon}
						title={t(link.title)}
						text={t(link.message)}
						href={link.href}
					/>
				))}
			</Box>
			<Box sx={sxStyles.formBlock}>
				<Typography variant='h4' sx={sxStyles.formBlockHeader}>
					{t('message_title')}
				</Typography>
				<Box sx={sxStyles.formWithSticker}>
					<Box sx={sxStyles.form}>
						<Input
							label={t('name_input')}
							placeHolder={t('name_placeholder')}
							name='name'
							value={formData.name}
							data={formData}
							setData={setFormData}
							isTouched={isNameTouched}
							setIsTouched={setIsNameTouched}
						/>
						<Input
							label='Email'
							placeHolder={t('email_placeholder')}
							name='email'
							type='email'
							value={formData.email}
							data={formData}
							setData={setFormData}
							isTouched={isEmailTouched}
							setIsTouched={setIsEmailTouched}
						/>
						<Input
							label={t('subject_input')}
							placeHolder={t('subject_placeholder')}
							name='subject'
							value={formData.subject}
							data={formData}
							setData={setFormData}
							isTouched={isSubTouched}
							setIsTouched={setIsSubTouched}
						/>
						<Input
							label={t('message_input')}
							placeHolder={t('message_placeholder')}
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
							 {t('send_button')}
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
		</>
	);
};

export default ContactUsPage