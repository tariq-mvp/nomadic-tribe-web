import logo from "@/images/resources/footer-logo.png";

const social = [
  { icon: "fa-twitter", link: "https://twitter.com/Nomdic_tribe_" },
  { icon: "fa-facebook-square", link: "https://facebook.com/NomadicTribeOfficial/" },
  { icon: "fa-youtube", link: "https://www.youtube.com/channel/UCjiWnKqifogDCnrxh_-w2VA" },
  { icon: "fa-instagram", link: "https://www.instagram.com/nomadictribeofficial/" },
];

const footerData = {
  logo,
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
    { id: 1, link: "#", title: "Account" },
    { id: 2, link: "#", title: "Legal" },
    { id: 3, link: "#", title: "Contact" },
    { id: 4, link: "#", title: "Affilitate Program" },
    { id: 5, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
