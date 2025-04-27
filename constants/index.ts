import { SidebarLink, SidebarDashLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];


export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/ticket",
    label: "Ticket",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/task",
    label: "Task",
  },
  
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/dashboard",
    label: "Dashbord",
  },
  
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};


// Dashboards

export const sidebardashLinks: SidebarDashLink[] = [
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/templates",
    label: "Templates",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/rulings",
    label: "Rules & Procdures",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/pendency",
    label: "Pendency",
  },
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  
];
