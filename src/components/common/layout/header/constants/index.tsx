import {
  ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightIcon,
  Cog8ToothIcon,
  HandRaisedIcon,
  HomeIcon,
  QuestionMarkCircleIcon
} from "@heroicons/react/24/outline";

export const mainLinks = [
  {
    icon: <HomeIcon/>,
    label: 'Головна',
    link: '/',
  },
  {
    icon: <ChatBubbleBottomCenterTextIcon/>,
    label: 'Про нас',
    link: '/about-us',
  },
  {
    icon: <HandRaisedIcon/>,
    label: 'Руки',
    link: '/hands',
  },
  {
    icon: <Cog8ToothIcon/>,
    label: 'Послуги',
    link: '/services',
  },
  {
    icon: <QuestionMarkCircleIcon/>,
    label: 'FAQ',
    link: '/faq',
  },
  {
    icon: <ChatBubbleLeftRightIcon/>,
    label: "Зв'яжіться з нами",
    link: '/contact-us',
  },
];