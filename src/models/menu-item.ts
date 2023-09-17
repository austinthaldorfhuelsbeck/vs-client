// import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface MenuItem {
  title: string;
  icon: any;
  action: (e: any) => any;
//   icon: IconDefinition;
//   action: () => void;
};