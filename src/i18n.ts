import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['uk', 'en', 'fr', 'de'];

export default getRequestConfig(async ({locale}) => {
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (await import(`../locales/${locale}/${locale}.json`)).default
	};
});