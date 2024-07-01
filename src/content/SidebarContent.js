import { MdSpaceDashboard,MdOutlineAccountBox   } from "react-icons/md";
import { TbDeviceIpadHorizontalPlus } from "react-icons/tb";


const menu = [
  {
    title: "Dashboard",
    icon: <MdSpaceDashboard />,
    path: "/dashboard",
  },
  {
    title: "Add Device",
    icon: <TbDeviceIpadHorizontalPlus />,
    path: "/addproduct",
  },
  {
    title: "Account",
    icon: <MdOutlineAccountBox   />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/editprofile",
      },
    ],
  },

];

export default menu;