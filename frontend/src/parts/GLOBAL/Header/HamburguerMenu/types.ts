import { IAnchorElValues } from "../../../../hooks/useHeaderMenu/types";

export interface IHamburguerMenuProps {
  open: boolean,
  anchorEl: IAnchorElValues,
  handleClose: () => void,
  teamPage?: boolean
}