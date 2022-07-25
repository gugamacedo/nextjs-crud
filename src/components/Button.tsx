interface ButtonProps {
  color?: 'green' | 'red'
  children: any
  handleAddButton?: () => void 
}
const Button = (props: ButtonProps) => {
  
  return (
  <button
    className={`
      bg-gradient-to-r from-${props.color ?? 'gray'}-500 to-${props.color ?? 'gray'}-900
      text-gray-50 px-4 py-2 rounded-md mb-4 text-base
    `}
    onClick={props.handleAddButton}
  >
    {props.children}
  </button>
  )
}

export default Button
