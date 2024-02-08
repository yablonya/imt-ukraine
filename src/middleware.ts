import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: ['uk', 'en', 'fr', 'de'],
	defaultLocale: 'uk'
});

export const config = {
	matcher: ['/', '/(uk|en|fr|de)/:path*']
};