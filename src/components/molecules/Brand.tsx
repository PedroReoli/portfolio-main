type BrandProps = {
  name: string
  role: string
}

const Brand = ({ name, role }: BrandProps) => {
  return (
    <a className="brand" href="#home">
      <span className="brand__mark">PR</span>
      <span className="brand__text">
        <strong>{name}</strong>
        <small>{role}</small>
      </span>
    </a>
  )
}

export default Brand
