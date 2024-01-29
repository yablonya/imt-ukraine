import {Box, Typography} from "@mui/material";
import * as sxStyles from './UpperFooter.styles'
import styles from '../../Footer.module.scss';
import {contactUsLinks, socialNetworksLinks} from "@/components/common/layout/footer/components/upper-footer/constants";
import Link from "next/link";
import Image from 'next/image';
import logo from '../../../../../../../public/images/logo.png'

const UpperFooter = () => {
  return (
    <Box sx={sxStyles.upperFooter}>
      <Link href={'/'}>
        <Image src={logo} alt={"IMTU logo"} className={styles['logo']}/>
      </Link>
      <Box sx={sxStyles.footerLists}>
        <Box>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Typography sx={sxStyles.linksListHeader}>Зв'яжіться з Нами</Typography>
          <Box sx={sxStyles.linksList}>
            {contactUsLinks.map((item, index) => (
              <Link key={index} href={item.link} className={styles['footerLinks']}>
                {item.text}
              </Link>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography sx={sxStyles.linksListHeader}>Наші Соц. Мережі</Typography>
          <Box sx={sxStyles.linksList}>
            {socialNetworksLinks.map((item, index) => (
              <Link key={index} href={item.link} className={styles['footerLinks']}>
                <Box sx={sxStyles.socialNetIcons}>{item.icon}</Box>
                {item.text}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UpperFooter;