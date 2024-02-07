import {Box, Typography} from "@mui/material";
import Image from "next/image";
import services from "../../../../public/images/services.png";

import * as sxStyles from './ServicesPage.styles';
import styles from './ServicesPage.module.scss';

const ServicesPage = () => {
  return (
    <>
      <Box sx={sxStyles.servicesBlock}>
        <Image
          src={services}
          alt={"Services page image"}
          className={styles['servicesBlockImg']}
        />
        <Box sx={sxStyles.textContainer}>
          <Typography variant='h3' sx={sxStyles.textPartHeader}>
            Послуги
          </Typography>
          <Typography sx={sxStyles.textPartContent}>
            Окрім виробництва протезів VHP, ми також надаємо підбірку та навчання користувачам, як використовувати
            протези рук і доглядати за ними.
            <br />
            <br />
            Ми також проводимо навчання для місцевих постачальників медичних послуг, які зацікавлені у співпраці з IMTU
            як клінічним партнером. Ми навчимо вас робити 3D-сканування стоп, проводити остаточну примірку, проводити
            навчання та реабілітацію пацієнтів. Ми також можемо надати нашим клінічним партнерам 3D-сканер, комп’ютер,
            інструменти та запчастини для обслуговування та ремонту протезів рук.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ServicesPage;