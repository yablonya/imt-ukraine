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
    label: 'Про Нас',
    link: '/about-us',
    tabs : [
      {
        label: 'Victoria Hand Project',
        link: '/about-us?tab=victoria-hand-project',
      },
      {
        label: 'Технологія проекту Victoria Hand',
        link: '/about-us?tab=victoria-hand-project-technology',
      },
      {
        label: 'Особливості системи Victoria Hand',
        link: '/about-us?tab=victoria-hand-system-features',
      },
      {
        label: 'Про Інвіктус Медичні Технології Україна',
        link: '/about-us?tab=about-imtu',
      },
    ]
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
    label: 'Зв\'яжіться з Нами',
    link: '/contact-us',
  },
];