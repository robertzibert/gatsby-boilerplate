import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import { makeStyles } from "@material-ui/core/styles"

export default function Form({ defaultValues, children, onSubmit }) {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "contents",
    },
  }))

  const classes = useStyles()

  const methods = useForm({ defaultValues })
  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}
