import nodemailer from "nodemailer";

const email = 'dnlablonskyi@gmail.com'
const pass = 'jkpysdyxbuivpqlq'

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: email,
		pass: pass,
	},
});

export const mailOptions = {
	from: email,
	to: email,
};