'use client';

import {Box, Fade, List, ListItem, ListItemIcon, Typography} from "@mui/material";
import * as sxStyles from './MobileVHPBlock.styles';
import styles from '../../AboutUsPage.module.scss';
import Image from "next/image";
import countries from "../../../../../../public/images/countries.png";
import FlexibleTextBlock from "@/components/common/ui/flexible-text-block/FlexibleTextBlock";
import {CircleOutlined} from "@mui/icons-material";
import {useEffect, useState} from "react";

const MobileVHPBlock = () => {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setChecked(true);
		}, 1600);
		return () => clearTimeout(timer);
	}, []);

  return (
    <Box
	    sx={{
				display: {
					mobile: 'block',
					desktopSemiMedium: 'none',
				}
	    }}
    >
      <Box sx={sxStyles.vhpImageBlock(checked)}>
        <Image src={countries} alt={'Countries image'} className={styles.countriesImg} />
        <Fade in={checked} timeout={600}>
	        <Typography variant='h2' sx={sxStyles.vhpHeader}>
		        Victoria Hand Project
	        </Typography>
        </Fade>
      </Box>
      <FlexibleTextBlock sx={sxStyles.vhpText}>
        Victoria Hand Project (VHP) — це канадська некомерційна організація, заснована в липні 2015 року у Вікторії,
        Британська Колумбія, з метою забезпечення протезування верхніх кінцівок особам з ампутаціями в країнах, що
        розвиваються, які мають обмежений доступ або взагалі не мають доступу до протезування. Компанія VHP створила
        систему Victoria Hand System: серію штучних протезів, що дозволяють пацієнтам з ампутованими кінцівками
        виконувати домашні та робочі завдання та покращувати якість життя.
        <br/>
        <br/>
        Підхід VHP має три ключові особливості:
        <List>
          <ListItem>
            <ListItemIcon sx={sxStyles.listItemIcon}>
              <CircleOutlined sx={{height: '12px'}}/>
            </ListItemIcon>
            Створення виробничого/виробничого центру та навчання складанню для виготовлення 3D-друкованих протезів на
            місці в країнах, що розвиваються;
          </ListItem>
          <ListItem>
            <ListItemIcon sx={sxStyles.listItemIcon}>
              <CircleOutlined sx={{height: '12px'}}/>
            </ListItemIcon>
            Навчання та робота з клінічними та медичними працівниками для надання професійної допомоги особам з ампутаціями;
          </ListItem>
          <ListItem>
            <ListItemIcon sx={sxStyles.listItemIcon}>
              <CircleOutlined sx={{height: '12px'}}/>
            </ListItemIcon>
            Поточна підтримка операцій як для виробничого центру, так і для мережі клінічних послуг.
          </ListItem>
        </List>
        Всього 300-400 доларів США забезпечують протез руки для людини з ампутацією в країні, що розвивається.
        Це включає вартість матеріалу для створення руки та вартість сплати клінічним партнерам у країні, щоб
        зібрати та правильно підігнати руку. Отримання руки Вікторії змінює: функціональні протези рук є неймовірним
        інструментом, який допомагає особам з ампутованими кінцівками повернути незалежність, надію та можливість
        жити більш насиченим і щасливішим життям.
        <br/>
        <br/>
        Наразі проект Victoria Hand налагодив партнерство в 12 країнах – Канаді, США, Непалі, Камбоджі, Гватемалі,
        Еквадорі, Гаїті, Єгипті, Уганді, Кенії, Пакистані та нещодавно в Україні.   На сьогодні понад 300 осіб з
        ампутованими кінцівками в усьому світі отримали протези Victoria Hand, і понад 50 клініцистів навчено
        використовувати цю 3D-технологію.
        <br/>
        <br/>
        У 2022 році VHP визначив критичну потребу в протезуванні громадян України, які отримали поранення під час
        триваючої війни зі збройними силами Російської Федерації, у 2022-2023 роках було зареєстровано понад 20 000
        нових ампутованих кінцівок на додаток до 400 000 людей, які потребували протезування до війни.
        <br/>
        <br/>
        У 2022 році команда VHP почала збирати кошти на розширення проекту через ініціативу «Руки за Україну».
        Завдяки отриманим благодійним пожертвам у лютому 2023 року VHP провела пілотний проект із двома клініками
        протезування у Львові та Вінниці, який включав навчання лікарів та спеціалістів у галузі протезування та
        розуміння великої потреби в догляді. Після успішного збору коштів команда VHP повернулася в Україну в
        червні 2023 року, щоб провести ретельне навчання та завершити ці партнерські відносини, гарантуючи, що
        клініки можуть пропонувати протези Victoria Hand на постійній основі. VHP надав необхідні ресурси, зокрема
        3D-принтери, 3D-сканери, комп’ютери, набори інструментів, матеріали та кріплення, необхідні для виготовлення
        протезів рук.
        <br/>
        <br/>
        У жовтні 2023 року Victoria Hand Project розширила свою присутність у Києві, розпочавши партнерство з
        Invictus Medical Technologies Ukraine (IMTU) та Київським державним експериментальним протезно-ортопедичним
        підприємством.
      </FlexibleTextBlock>
    </Box>
  );
};

export default MobileVHPBlock;