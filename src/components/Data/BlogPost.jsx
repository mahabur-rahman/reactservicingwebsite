// img
import blog1 from "../../img/b4.jpg";
import blog2 from "../../img/b2.jpg";
import blog3 from "../../img/b3.jpg";
import profile1 from "../../img/profile1.svg";
import profile2 from "../../img/profile2.svg";
import profile3 from "../../img/profile1.svg";
// react icons
import { FaHeart } from "react-icons/fa";

const blogData = [
  {
    id: 1,
    imgSrc: blog1,
    title: " Online Marketing",
    min: "~ 5 min ago",
    heading: "How teamwork activities help to build a strong team spirit",
    text: "I remember that when i joined live chat, we have about 30employees working in a small, quite dingy house.",
    icon: <FaHeart />,
    countNumber: "214",
    profileImg: profile1,
    name: "Aloga kotodynska",
    date: "on 25 of july",
    link: "/services",
    duration: "1000",
  },
  {
    id: 2,
    imgSrc: blog2,
    title: " Digital Marketing",
    min: "~ 15 min ago",
    heading: "How teamwork activities help to build a strong team spirit",
    text: "I remember that when i joined live chat, we have about 30employees working in a small, quite dingy house.",
    icon: <FaHeart />,
    countNumber: "254",
    profileImg: profile2,
    name: "Adam Smith",
    date: "on 25 of sept",
    link: "/services",
    duration: "1500",
  },
  {
    id: 3,
    imgSrc: blog3,
    title: " Service Tracker",
    min: "~ 1 hour ago",
    heading: "How teamwork activities help to build a strong team spirit",
    text: "I remember that when i joined live chat, we have about 30employees working in a small, quite dingy house.",
    icon: <FaHeart />,
    countNumber: "245",
    profileImg: profile3,
    name: "Manisha Demmy",
    date: "on 13 of Nov",
    link: "/services",
    duration: "2000",
  },
];

export default blogData;
