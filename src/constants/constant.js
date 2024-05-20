import { MdPlayArrow } from "react-icons/md";
import {
  design,
  planning,
  projects,
  interior,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  gal1,
  gal2,
  gal3,
  gal4,
  gal5,
  gal6,
} from "../../public/images";

// SIDEBAR
const sideBar = [
  {
    name: "Home Page",
    url: "#",
  },
  {
    name: "Landing",
    url: "#",
  },
  {
    name: "Projects",
    url: "#",
  },
  {
    name: "Our Team",
    url: "#",
  },
  {
    name: "About Us",
    url: "#",
  },
  {
    name: "Contact Us",
    url: "#",
  },
];

// FRONT BELOW
const frontBelow = [
  {
    icon: design,
    name: "DESIGN",
    alt: "design-image",
  },
  {
    icon: planning,
    name: "PLANNING",
    alt: "planning-image",
  },
  {
    icon: interior,
    name: "INTERIOR",
    alt: "interior-image",
  },
  {
    icon: projects,
    name: "PROJECTS",
    alt: "projects-image",
  },
];

// DESIGN SERVICE
const designService = [
  {
    title: "Innovations",
    picture: pic1,
    alt: "innovation-pic",
    descrption:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    more: "MORE",
    link: "#",
  },
  {
    title: "Our Works",
    picture: pic2,
    alt: "works-pic",
    descrption:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    more: "MORE",
    link: "#",
  },
  {
    title: "Our Vision",
    picture: pic3,
    alt: "vision-pic",
    descrption:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    more: "MORE",
    link: "#",
  },
  {
    title: "Home Office",
    picture: pic4,
    alt: "office-pic",
    descrption:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    more: "MORE",
    link: "#",
  },
  {
    title: "Cozy Spaces",
    picture: pic5,
    alt: "spaces-pic",
    descrption:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    more: "MORE",
    link: "#",
  },
  {
    title: "Luxurious Furniture",
    picture: pic6,
    alt: "furniture-pic",
    descrption:
      "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    more: "MORE",
    link: "#",
  },
];

// EXTRAORDINARY
const extraordinary = [
  {
    image: pic7,
    title: "Apartment - Ground Floor",
    m2: "44 m²",
    description:
      "This apartment features a electric kettle, sofa and private entrance.",
    booking: "BOOK ROOM",
    alt: "apartment",
    link: "#",
  },
  {
    image: pic8,
    title: "Double Deluxe Room",
    m2: "55 m²",
    description: "In the room, designed by Space Copenhagen, every detail is",
    booking: "BOOK ROOM",
    alt: "deluxe",
    link: "#",
  },
  {
    image: pic9,
    title: "Apartment with Park View",
    m2: "74 m²",
    description:
      "This apartment has a dining area, private entrance and kitchen.",
    booking: "BOOK ROOM",
    alt: "park",
    link: "#",
  },
];

// COMPANY
const company = [
  {
    name: "Interior Design",
  },
  {
    name: "Creative Team",
  },
  {
    name: "Project Management",
  },
  {
    name: "Creative Direction",
  },
  {
    name: "About Studio",
  },
];

//GALLERY
const gallery = [
  {
    image: gal1,
    alt: "brown sofa",
  },
  {
    image: gal2,
    alt: "salon",
  },
  {
    image: gal3,
    alt: "laptop and lamp",
  },
  {
    image: gal4,
    alt: "dark grey room",
  },
  {
    image: gal5,
    alt: "couple",
  },
  {
    image: gal6,
    alt: "white salon",
  },
];

export { sideBar, frontBelow, designService, extraordinary, company, gallery };
