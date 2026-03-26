import SectionKicker from "../atoms/SectionKicker"

type SectionHeadingProps = {
  kicker: string
  title: string
}

const SectionHeading = ({ kicker, title }: SectionHeadingProps) => {
  return (
    <div className="section-heading">
      <SectionKicker>{kicker}</SectionKicker>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionHeading
