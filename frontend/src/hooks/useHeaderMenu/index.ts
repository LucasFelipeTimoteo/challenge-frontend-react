import { useState } from "react"
import { IAnchorElValues, IHandleMenuEventHandler } from "./types"

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
