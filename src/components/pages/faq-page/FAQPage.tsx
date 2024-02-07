import {Box, Typography} from "@mui/material";
import AccordionBlock from "@/components/common/ui/accordion-block/AccordionBlock";
import { faqQuestions } from "./constants";

import * as styles from './FAQPage.styles';

const FAQPage = () => {
	return (
		<Box sx={styles.faqPage}>
			 <Typography variant='h2' sx={styles.faqHeader}>
				 Ми Готові Відповісти На Всі Ваші Запитання
			 </Typography>
			<Box sx={styles.questionsBlock}>
				{faqQuestions.map((item, index) => (
					<AccordionBlock
						key={index}
						headerText={item.question}
						mainText={item.answer}
					/>
				))}
			</Box>
		</Box>
	);
};

export default FAQPage;