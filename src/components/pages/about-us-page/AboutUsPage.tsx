'use client';

import PageLayout from "@/components/common/layout/page-layout/PageLayout";
import {Box, List, ListItem, ListItemIcon, Typography, useMediaQuery} from "@mui/material";
import Image from 'next/image';
import styles from './AboutUsPage.module.scss'
import DesktopVHPBlock from "./vhp-block/desktop-vhp-block/DesktopVHPBlock";
import theme from "@/styles/theme/theme";
import MobileVHPBlock from "@/components/pages/about-us-page/vhp-block/mobile-vhp-block/MobileVHPBlock";
import * as sxStyles from './AboutUsPage.styles';
import aboutFirstHand from '../../../../public/images/about-first-hand.jpg';
import {CheckCircleIcon} from "@heroicons/react/24/outline";
import {featuresList} from "@/components/pages/about-us-page/constants";
import aboutInvictus from '../../../../public/images/about-invictus.png';
import DesktopAboutInvictus
	from "@/components/pages/about-us-page/about-invictus/desktop-about-invictus/DesktopAboutInvictus";
import MobileAboutInvictus
	from "@/components/pages/about-us-page/about-invictus/mobile-about-invictus/MobileAboutInvictus";

const AboutUsPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));

  return (
    <PageLayout>
	    <DesktopVHPBlock/>
	    <MobileVHPBlock/>
      <Box sx={sxStyles.technologyBlock}>
        <Box sx={sxStyles.technologyTextContent}>
	        <Typography variant='h3' sx={sxStyles.technologyHeader}>
		        Технологія проекту Victoria Hand
	        </Typography>
	        <Typography sx={sxStyles.technologyText}>
		        3D-друк дозволяє друкувати деталі для протезів рук на вимогу на місці в країні. 3D-сканування
		        використовується для захоплення унікальної форми кінцівки людини, для 3D-друку та гнізда кінцівки, яка
		        повністю налаштована для цього користувача. Рука Вікторії — це повна протезна система, яка включає кисть,
		        блок зап’ястя, спеціальне гніздо для передпліччя та джгут для приведення в дію пристрою.
						<br/>
		        <br/>
		        Окрім пластикових деталей, надрукованих на 3D-принтері, ця система використовує компоненти та кріплення з
		        нержавіючої сталі, щоб зробити всю систему міцнішою та довговічнішою. Оскільки більшість деталей протезів
		        руки є стандартними, їх ремонт і обслуговування є досить простим і зрозумілим процесом, що є ще однією
		        великою перевагою системи VHP.
		        <br/>
		        <br/>
		        VHP має можливості для встановлення трансрадіальних ампутантів (втрата нижче ліктя), трансгумеральних
		        (втрата вище ліктя) і дітей із трансрадіальною втратою. VHP також перейняла американську некомерційну
		        організацію під назвою LimbForge Technologies, яка виготовляє косметичні руки, надруковані на 3D.
	        </Typography>
        </Box>
	      <Image src={aboutFirstHand} alt='VHP prosthetic arm' className={styles.aboutFirstHand}/>
      </Box>
	    <Box sx={sxStyles.featuresBlock}>
		    <Typography variant='h3' sx={sxStyles.featuresHeader}>
			    Особливості системи Victoria Hand
		    </Typography>
		    <Typography sx={sxStyles.listHeader}>
			    Система Victoria Hand має кілька важливих особливостей:
		    </Typography>
		    <List sx={sxStyles.featuresList}>
			    {featuresList.map((feature, index) => (
				    <ListItem key={index} sx={sxStyles.listItem}>
					    <ListItemIcon sx={sxStyles.listItemIcon}>
						    <CheckCircleIcon/>
					    </ListItemIcon>
					    {feature}
				    </ListItem>
			    ))}
		    </List>
	    </Box>
	    {!isMobile ? (
		    <DesktopAboutInvictus/>
	    ) : (
		    <MobileAboutInvictus/>
	    )}
    </PageLayout>
  );
};

export default AboutUsPage;