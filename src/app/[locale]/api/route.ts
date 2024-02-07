import {mailOptions, transporter} from '@/config/nodemailer';
import {FormData} from '@/types/FormData';

const generateEmailContent = (data: FormData) => {
	const stringContent =
		`Ім'я: ${data.name} \n` +
		`Email: ${data.email} \n` +
		`Тема: ${data.subject} \n` +
		`Повідомлення: ${data.message}`;

	const htmlContent =
		`
		<div style="max-width: 800px; padding: 0 20px">
			<h2 style="margin: 20px 0 10px">Ім'я</h2><p style="font-size: 16px">${data.name}</p><hr>
		  <h2 style="margin: 20px 0 10px">Email</h2><p style="font-size: 16px">${data.email}</p><hr>
		  <h2 style="margin: 20px 0 10px">Тема</h2><p style="font-size: 16px">${data.subject}</p><hr>
		  <h2 style="margin: 20px 0 10px">Повідомлення</h2><p style="font-size: 16px">${data.message}</p>
		</div>
		`;

	return {
		text: stringContent,
		html: htmlContent,
	}
}

export async function POST(req: Request) {
	const formData: FormData = await req.json();

	try {
		await transporter.sendMail({
			...mailOptions,
			...generateEmailContent(formData),
			subject: formData.subject,
		});
	} catch (error) {
		return new Response(`${error}`, {
			status: 400
		})
	}

	return new Response('Feedback sent successfully', {
		status: 200
	})
}