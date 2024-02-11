'use client';

import {AppBar, Link, Toolbar} from "@mui/material";
import Image from 'next/image';
import logoSmall from '../../../../../../../public/images/logo-small.png';
import {useLocale, useTranslations} from "next-intl";
import DesktopHeaderLink from "./components/desktop-header-link/DesktopHeaderLink";

import * as styles from './DesktopHeader.styles'
import LangSwitcher from "@/components/common/ui/lang-switcher/LangSwitcher";

const DesktopHeader = () => {
	const t = useTranslations('navigation.header');
	const locale = useLocale();

	return (
		<AppBar sx={styles.headerContainer}>
			<Link href={'/'} sx={styles.logoLink}>
				<Image src={logoSmall} alt={"IMTU logo"} height={52} width={136}/>
			</Link>
			<Toolbar sx={styles.menu}>
				<DesktopHeaderLink label={t('main')} href={`/${locale}`}/>
				<DesktopHeaderLink label={t('about_us')} href={`/${locale}/about-us`}/>
				<DesktopHeaderLink label={t('hands')} href={`/${locale}/hands`}/>
				<DesktopHeaderLink label={t('services')} href={`/${locale}/services`}/>
				<DesktopHeaderLink label='FAQ' href={`/${locale}/faq`}/>
				<DesktopHeaderLink label={t('contact_us')} href={`/${locale}/contact-us`}/>
			</Toolbar>
			<LangSwitcher locale={locale}/>
		</AppBar>
	);
};

export default DesktopHeader;