interface TitleProps {
  children: any
}

const Title = (props: TitleProps) => (
  <>
    <h1 className="py-2 text-center text-4xl">{props.children}</h1>
    <hr className="border-2 border-purple-500 mb-6" />
  </>
)

export default Title
