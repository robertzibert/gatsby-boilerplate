import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

export default function useIsMobile() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  return matches
}
