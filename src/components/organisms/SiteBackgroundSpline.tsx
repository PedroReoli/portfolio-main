import Spline from "@splinetool/react-spline"

const SPLINE_SCENE_URL = "https://prod.spline.design/9VjFv9uoDP0nGy5D/scene.splinecode"

const SiteBackgroundSpline = () => {
  return (
    <div className="site-background-spline" aria-hidden="true">
      <Spline scene={SPLINE_SCENE_URL} className="site-background-spline__scene" renderOnDemand={false} />
    </div>
  )
}

export default SiteBackgroundSpline
