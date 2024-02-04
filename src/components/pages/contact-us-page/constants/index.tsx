import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/outline";

export const contactLinks = [
	{
		icon: <PhoneIcon strokeWidth={1}/>,
		title: 'Подзвоніть нам',
		message: '+380 97 068 6901',
		href: 'tel:380970686901%20',
	},

	{
		icon: <EnvelopeIcon strokeWidth={1}/>,
		title: 'Напишіть нам',
		message: 'info@invictusmedical.com.ua',
		href: 'mailto:info@invictusmedical.com.ua'
	},

	{
		icon: <MapPinIcon strokeWidth={1}/>,
		title: 'Наше місцезнаходження',
		message: 'Україна, Київ, 04073, проспект Степана Бандери, 23, кімната 202',
		href: 'https://maps.app.goo.gl/wA6pe6UL5N4j8TWa6'
	}
]