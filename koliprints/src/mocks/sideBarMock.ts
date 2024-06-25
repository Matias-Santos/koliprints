import { SideBarT } from "../types/sideBar.type";
import { filtersMock } from "./filtersMock";

export const sideBarMock: SideBarT[] = [
  {
    title: "Filters",
    filters: [...filtersMock],
  },
];
