import CMS from "netlify-cms-app"
// Example: live preview of your homepage text
CMS.registerPreviewTemplate("site", ({ entry }) => {
  const title = entry.getIn(["data", "title"]) || "CheysChannel"
  const welcome = entry.getIn(["data", "welcome"]) || "Welcome to my site!"
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>{title}</h1>
      <p>{welcome}</p>
    </div>
  )
})