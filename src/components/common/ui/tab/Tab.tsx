import {Box, Theme, Typography} from "@mui/material";
import {FC, ReactNode} from "react";
import * as styles from './Tab.styles';
import {SxProps} from "@mui/system";
import {usePathname} from "next/navigation";

interface TabProps {
  startIcon?: ReactNode;
  label: string;
  link: string;
  sx?: SxProps<Theme>;
}

const Tab: FC<TabProps> = ({
  startIcon,
  label,
  link,
  sx= {},
}) => {
  const pathName = usePathname();

  return (
    <Box sx={styles.tabStyles(pathName.split('/')[1], link.split('/')[1])}>
      {startIcon &&
        <Box sx={styles.iconContainer}>{startIcon}</Box>
      }
      <Typography>{label}</Typography>
    </Box>
  );
};

export default Tab;