import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import ConnectForm from "./ConnectForm"

export default function Text({ name, register, label, ...props }) {
  const useStyles = makeStyles(theme => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: "0.25rem",
      outline: "none",
      position: "relative",
      backgroundColor: "#f6f9fc",
      color: "#222b45",
      fontSize: "0.9375rem",
      fontWeight: 600,
      width: "auto",
      border: "2px solid #e0e0e0",
      padding: "10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow", "background-color"]),
      "&::placeholder": {
        color: "#C5CEE0",
      },
      "&:focus": {
        borderColor: "#FED4A4",
        backgroundColor: "#ffffff",
      },
    },
    label: {
      fontSize: 14,
      fontWeight: 700,
      position: "relative",
      marginBottom: 30,
    },
  }))

  const classes = useStyles()

  return (
    <FormControl fullWidth>
      {label && (
        <InputLabel className={classes.label} color="primary" htmlFor={`${name}-input`}>
          {label}
        </InputLabel>
      )}
      <ConnectForm>
        {({ register }) => (
          <input className={classes.input} name={name} ref={register} {...props} />
        )}
      </ConnectForm>
    </FormControl>
  )
}
