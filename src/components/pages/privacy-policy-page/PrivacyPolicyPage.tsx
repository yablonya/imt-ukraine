import {Box, Typography} from "@mui/material";

import * as styles from './PrivacyPolicyPage.styles';

const PrivacyPolicyPage = () => {
	return (
		<Box sx={styles.pageLayout}>
			<Typography variant='h4' sx={styles.title}>
				Хто ми
			</Typography>
			<Typography sx={styles.text}>
				Адреса нашого веб-сайту: https://www.invictusmedical.com.ua
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				Коментарі
			</Typography>
			<Typography sx={styles.text}>
				Коли відвідувачі залишають коментарі на сайті, ми збираємо дані, які відображаються у формі коментарів, а також
				IP-адресу відвідувача та рядок агента користувача браузера, щоб допомогти виявити спам.
				<br/>
				<br/>
				Анонімний рядок, створений з вашої адреси електронної пошти (також називається хеш), може бути надано службі
				Gravatar, щоб перевірити, чи використовуєте ви його. Політика конфіденційності служби Gravatar доступна
				тут: https://automattic.com/privacy/. Після схвалення вашого коментаря ваше зображення профілю стане доступним
				для всіх у контексті вашого коментаря.
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				ЗМІ
			</Typography>
			<Typography sx={styles.text}>
				Якщо ви завантажуєте зображення на веб-сайт, вам слід уникати завантаження зображень із вбудованими даними про
				місцезнаходження (EXIF GPS). Відвідувачі веб-сайту можуть завантажувати та отримувати будь-які дані про
				місцезнаходження із зображень на веб-сайті.
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				Cookies
			</Typography>
			<Typography sx={styles.text}>
				Якщо ви залишите коментар на нашому сайті, ви можете дозволити зберігати своє ім’я, адресу електронної пошти
				та веб-сайт у файлах cookie. Це для вашої зручності, щоб вам не довелося заповнювати свої дані знову, коли ви
				залишаєте інший коментар. Ці файли cookie триватимуть один рік.
				<br/>
				<br/>
				Якщо ви відвідаєте нашу сторінку входу, ми встановимо тимчасовий файл cookie, щоб визначити, чи підтримує ваш
				браузер файли cookie. Цей файл cookie не містить персональних даних і видаляється, коли ви закриваєте браузер.
				<br/>
				<br/>
				Коли ви входите в систему, ми також встановлюємо кілька файлів cookie, щоб зберегти вашу реєстраційну
				інформацію та ваш вибір відображення на екрані. Файли cookie для входу зберігаються два дні, а файли cookie
				параметрів екрану – рік. Якщо ви виберете «Запам’ятати мене», ваш логін зберігатиметься протягом двох тижнів.
				Якщо ви вийдете зі свого облікового запису, файли cookie для входу буде видалено.
				<br/>
				<br/>
				Якщо ви редагуєте або публікуєте статтю, у вашому браузері буде збережено додатковий файл cookie. Цей файл
				cookie не містить особистих даних і просто вказує ідентифікатор публікації статті, яку ви щойно редагували.
				Термін дії закінчується через 1 день.
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				Вбудований вміст з інших веб-сайтів
			</Typography>
			<Typography sx={styles.text}>
				Статті на цьому сайті можуть містити вбудований вміст (наприклад, відео, зображення, статті тощо). Вбудований
				вміст з інших веб-сайтів поводиться точно так само, як якщо б відвідувач відвідав інший веб-сайт.
				<br/>
				<br/>
				Ці веб-сайти можуть збирати дані про вас, використовувати файли cookie, вбудовувати додаткове стороннє
				відстеження та контролювати вашу взаємодію з цим вбудованим вмістом, зокрема відстежувати вашу взаємодію з
				вбудованим вмістом, якщо у вас є обліковий запис і ви ввійшли на цей веб-сайт.
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				З ким ми ділимося вашими даними
			</Typography>
			<Typography sx={styles.text}>
				Якщо ви подаєте запит на скидання пароля, ваша IP-адреса буде включена в електронний лист для скидання.
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				Як довго ми зберігаємо ваші дані
			</Typography>
			<Typography sx={styles.text}>
				Якщо ви залишаєте коментар, коментар і його метадані зберігаються необмежений час. Це робиться для того, щоб ми
				могли автоматично розпізнавати та затверджувати будь-які подальші коментарі, а не тримати їх у черзі модерації.
				<br/>
				<br/>
				Для користувачів, які реєструються на нашому веб-сайті (якщо такі є), ми також зберігаємо особисту інформацію,
				яку вони надають у своєму профілі користувача. Усі користувачі можуть переглядати, редагувати або видаляти
				свою особисту інформацію в будь-який час (за винятком того, що вони не можуть змінити своє ім’я користувача).
				Адміністратори веб-сайту також можуть переглядати та редагувати цю інформацію.
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				Які права ви маєте на свої дані
			</Typography>
			<Typography sx={styles.text}>
				Якщо у вас є обліковий запис на цьому сайті або ви залишили коментарі, ви можете надіслати запит на отримання
				експортованого файлу особистих даних, які ми зберігаємо про вас, включаючи будь-які дані, які ви нам надали.
				Ви також можете вимагати видалення будь-яких особистих даних про вас, які ми зберігаємо. Це не включає будь-які
				дані, які ми зобов’язані зберігати для адміністративних, юридичних цілей або безпеки.
			</Typography>

			<Typography variant='h4' sx={styles.title}>
				Куди ми надсилаємо ваші дані
			</Typography>
			<Typography sx={styles.text}>
				Коментарі відвідувачів можуть бути перевірені за допомогою автоматичної служби виявлення спаму.
			</Typography>
		</Box>
	);
}

export default PrivacyPolicyPage;