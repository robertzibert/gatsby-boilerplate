import React from "react"
import MuiButton from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

export const Button = ({ children, ...props }) => {
  const useStyles = makeStyles({
    root: {
      borderRadius: props.borderRadius || 34,
      border: 0,
      height: props.height || 44,
      padding: "0 30px",
      boxShadow: "0 7px 20px 0 rgba(50, 50, 93, 0.15)",
      ...(!!props.background && { background: props.background }),
    },
    label: {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  })

  const classes = useStyles()

  return (
    <MuiButton
      classes={{
        root: classes.root,
        label: classes.label,
      }}
      variant="contained"
      {...props}>
      {children}
    </MuiButton>
  )
}

export const SmallButton = ({ children, ...props }) => {
  return (
    <Button borderRadius={7} height={33} color="primary" {...props}>
      {children}
    </Button>
  )
}
