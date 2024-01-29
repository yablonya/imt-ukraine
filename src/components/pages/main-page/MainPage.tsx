'use client';

import PageLayout from "@/components/common/layout/page-layout/PageLayout";
import {Box, Typography, useMediaQuery} from "@mui/material";
import Image from 'next/image';
import mainFirstImg from '../../../../public/images/main-first-img.jpg';
import hand1 from '../../../../public/images/hand1.jpg';
import hand2 from '../../../../public/images/hand2.jpg';
import handsInBox from '../../../../public/images/hands-in-box.jpg';
import printing from '../../../../public/images/printing.jpg';
import * as sxStyles from './MainPage.styles';
import styles from './MainPage.module.scss'
import mergeSx from "@/lib/utils/MergeSxStylesUtil";
import theme from "@/styles/theme/theme";

const MainPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));

  return (
    <PageLayout>
      <Box sx={sxStyles.firstBlock}>
        <Image
          src={mainFirstImg}
          alt={"Mane page first image"}
          className={styles['firstBlockImg']}
        />
        <Box sx={sxStyles.textContainer}>
          <Typography variant='h3' sx={sxStyles.textBlockHeader}>
            Інвіктус Медичні Технології Україна
          </Typography>
          <Typography sx={sxStyles.textBlockContent}>
            Invictus Medical Technologies Ukraine (IMTU) виготовляє високоякісні функціональні протези рук за допомогою
            технології 3D-друку, розробленої Victoria Hand Project (Канада), для хворих з ампутованими кінцівками та для
            клінічних партнерів. Функціональні протези рук є неймовірним інструментом, який допомагає особам з
            ампутованими кінцівками відновити незалежність, надію та можливість жити більш насиченим і щасливішим життям.
            <br />
            <br />
            Ми своєчасно здійснюємо післягарантійне обслуговування та ремонт систем VHP.
            <br />
            <br />
            Ми також організовуємо високотехнологічне навчання для місцевих постачальників медичних послуг, надаємо
            обладнання для 3D-друку, деталі та матеріали, необхідні для виготовлення протезів Victoria Hand.
          </Typography>
        </Box>
      </Box>
      <Box sx={sxStyles.mediaBlock}>
        <Typography variant='h3' sx={sxStyles.mediaBlockHeader}>
          Ми робимо все можливе для вашого щастя
        </Typography>
        <Box sx={sxStyles.media}>
          <Box sx={sxStyles.imageContainer}>
            <Image
              src={hand1}
              alt={"Hand 1 image"}
              className={styles['mediaImg']}
            />
          </Box>
          <Box sx={sxStyles.imageContainer}>
            <Image
              src={hand2}
              alt={"Hand 2 image"}
              className={styles['mediaImg']}
            />
          </Box>
          {!isMobile && (
            <iframe
              src="https://www.youtube.com/embed/6Pk4Fdez8LA?si=yFHGj8UuKuqojdb9"
              title="YouTube video player"
              className={styles['video']}
            ></iframe>
          )}
          <Box sx={sxStyles.imageContainer}>
            <Image
              src={handsInBox}
              alt={"Hands in a box image"}
              className={styles['mediaImg']}
            />
          </Box>
          <Box sx={mergeSx(sxStyles.imageContainer, { alignItems: 'flex-start' })}>
            <Image
              src={printing}
              alt={"Printing a hand image"}
              className={styles['mediaImg']}
            />
          </Box>
          {isMobile && (
            <iframe
              src="https://www.youtube.com/embed/6Pk4Fdez8LA?si=yFHGj8UuKuqojdb9"
              title="YouTube video player"
              className={styles['video']}
            ></iframe>
          )}
        </Box>
      </Box>
    </PageLayout>
  );
};

export default MainPage;