import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const navbar = [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
]

export const contact =  {
    email: "ivan.tomdieu@gmail.com",
    // tel: "+237650039773",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Tomdieu",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tomdieuivan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/navicorp_",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/channel/UCqkkqlqY2WXx7gVmFe7htuQ",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    }
}