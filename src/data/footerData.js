import logo from "@/images/resources/footer-logo.png";
import logo3 from "@/images/resources/footer-logo1.svg";

const social = [
  { icon: "fa-twitter", link: "https://twitter.com/Nomdic_tribe_" },
  { icon: "fa-facebook-square", link: "https://facebook.com/NomadicTribeOfficial/" },
  { icon: "fa-youtube", link: "https://www.youtube.com/channel/UCjiWnKqifogDCnrxh_-w2VA" },
  { icon: "fa-instagram", link: "https://www.instagram.com/nomadictribeofficial/" },
];

const footerData = {
  logo,
  logo3,
  social,
  year: new Date().getFullYear(),
  author: "Nomadic Tribe",
  about:
    "A respectful and safe community for like-minded travelers. Explore. Connect. And book life-changing journeys that let you encounter authentic indigenous cultures.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+ 92 666 999 0000",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "support@nomadictribe.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "666 road, broklyn street new york",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    { id: 2, link: "#", title: "Community Blog" },
    { id: 3, link: "#", title: "Rewards" },
    { id: 4, link: "#", title: "Work with Us" },
    { id: 5, link: "#", title: "Meet the Team" },
  ],
  explore: [
    { id: 1, link: "/privacy-policy", title: "Privacy Policy" },
    { id: 2, link: "/terms-and-conditions", title: "Terms and Conditions" },
    { id: 3, link: "/code-of-ethics", title: "Code of Ethics" },
    { id: 4, link: "/community-standards", title: "Community Standards" },
    { id: 5, link: "/environmental-policy", title: "Environmental Policy" },
  ],
};

export default footerData;
