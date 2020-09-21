import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import { H2 } from "./Text"

const Title = ({ label }) => {
  const useStyles = makeStyles(theme => ({
    title: {
      margin: "20px 0px",
    },
  }))

  const classes = useStyles()

  return (
    <AppBar position="static" color="primary" className={classes.title}>
      <Toolbar>
        <H2 color="secondary">{label}</H2>
      </Toolbar>
    </AppBar>
  )
}

export default Title
