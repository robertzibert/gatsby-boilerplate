import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const Text = ({ children, htmlTag, marginTop, marginBottom }) => {
  const classes = makeStyles({
    root: {
      marginTop: props => `${marginTop || 0}px`,
      marginBottom: props => `${marginBottom || 0}px`,
    },
  })
  const variant = htmlTag
  const component = htmlTag

  return (
    <Typography className={classes.root} {...{ variant, component }}>
      {children}
    </Typography>
  )
}

export default Text
