import { IHandleMenuEventHandler } from "../../../../hooks/useHeaderMenu/types";

export interface IHamburguerMenuButtonProps {
  handleMenu: (e: IHandleMenuEventHandler) => void,
  open: boolean
}