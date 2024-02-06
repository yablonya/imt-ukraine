import {FormData} from '@/types/FormData';

const sendEmailLetter = async (data: FormData) => fetch('/api', {
	method: 'POST',
	body: JSON.stringify(data),
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	}
}).then((res) => {
	if (!res.ok) throw new Error('Failed to send message');

	return res.status;
})

export default sendEmailLetter;