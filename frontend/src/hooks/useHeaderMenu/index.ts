import { useState } from "react"

type IAnchorElValues = null | Element
type IHandleMenuEventHandler = React.MouseEvent<HTMLButtonElement, MouseEvent>

export default function useHeaderMenu() {
  const [anchorEl, setAnchorEl] = useState<IAnchorElValues>(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenu = (e: IHandleMenuEventHandler) => {
    setAnchorEl(e.currentTarget)
  }

  return {
    anchorEl,
    open,
    handleClose,
    handleMenu
  }
}
