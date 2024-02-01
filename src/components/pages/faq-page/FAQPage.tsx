import PageLayout from "@/components/common/layout/page-layout/PageLayout";
import {Box, Typography} from "@mui/material";
import * as styles from './FAQPage.styles';
import AccordionBlock from "@/components/common/ui/accordion-block/AccordionBlock";
import { faqQuestions } from "./constants";


const FAQPage = () => {
	return (
		<PageLayout sx={styles.faqPage}>
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
		</PageLayout>
	);
};

export default FAQPage;