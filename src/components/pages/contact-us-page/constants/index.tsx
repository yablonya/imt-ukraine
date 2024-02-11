import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/outline";

export const contactLinks = [
	{
		icon: <PhoneIcon strokeWidth={1}/>,
		title: 'phone_link',
		message: 'phone',
		href: 'tel:380970686901%20',
	},

	{
		icon: <EnvelopeIcon strokeWidth={1}/>,
		title: 'email_link',
		message: 'email',
		href: 'mailto:info@invictusmedical.com.ua'
	},

	{
		icon: <MapPinIcon strokeWidth={1}/>,
		title: 'address_link',
		message: 'address',
		href: 'https://maps.app.goo.gl/wA6pe6UL5N4j8TWa6'
	}
]