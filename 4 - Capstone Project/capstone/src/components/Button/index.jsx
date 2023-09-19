// eslint-disable-next-line react/prop-types
const Button = ({ classname, children, ...props }) => {
  return (
    <button className={classname} {...props}>
      {children}
    </button>
  )
}

export default Button
