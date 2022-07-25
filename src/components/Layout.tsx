import Title from './Title'

interface LayoutProps {
  title?: string
  children: any
}

const Layout = (props: LayoutProps) => (
  <div
    className={`
      flex flex-col w-3/4 
      bg-gray-50 text-gray-800
      rounded-xl
      text-2xl
      px-6 pt-2 pb-6
    `}
  >
    <Title>{props.title}</Title>
    <div>{props.children}</div>
  </div>
)

export default Layout
