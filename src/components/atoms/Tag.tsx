type TagProps = {
  children: string
}

const Tag = ({ children }: TagProps) => {
  return <span className="tag">{children}</span>
}

export default Tag
