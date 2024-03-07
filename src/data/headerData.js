import logo from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";
// import logo3 from "@/images/resources/logo-3.png";
import logo3 from "@/images/resources/logo2.svg";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [],
    // subNavItems: [
    //   {
    //     id: 1,
    //     name: "Home One",
    //     href: "/",
    //   },
    //   {
    //     id: 2,
    //     name: "Home Two",
    //     href: "/home2",
    //   },
    //   {
    //     id: 3,
    //     name: "Header Styles",
    //     href: "/",
    //     subItems: [
    //       {
    //         id: 1,
    //         name: "Header One",
    //         href: "",
    //       },
    //       { id: 2, name: "Header Two", href: "" },
    //     ],
    //   },
    // ],
  },
  {
    id: 2,
    name: "Destinations",
    href: "/destinations",
    subNavItems: [],
    // subNavItems: [
    //   { id: 1, name: "Destinations", href: "/destinations" },
    //   { id: 2, name: "Destinations Detail", href: "/destinations-details" },
    // ],
  },
  {
    id: 3,
    name: "News",
    href: "/news",
    subNavItems: [],
    // subNavItems: [
    //   { id: 1, name: "News", href: "/news" },
    //   { id: 2, name: "News Details", href: "/news-details" },
    // ],
  },
  {
    id: 4,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "https://facebook.com/NomadicTribeOfficial/" },
  { icon: "fa-twitter", link: "https://twitter.com/Nomdic_tribe_" },
  { icon: "fa-instagram", link: "https://www.instagram.com/nomadictribeofficial/" },
  { icon: "fa-youtube", link: "https://www.youtube.com/channel/UCjiWnKqifogDCnrxh_-w2VA" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+ 92 666 999 0000",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "support@nomadictribe.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
  logo3
};

export default headerData;
