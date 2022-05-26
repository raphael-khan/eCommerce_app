import { Helmet } from "react-helmet"
import React from "react"

const Meta = ({ title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
      </Helmet>
    </div>
  )
}

Meta.defaultProps = {
  title: "Welcome to Roast Riders.",
  description: "We sell the best organic coffee for cheap !",
  keywords: "coffee, organic coffee, caffeine",
}

export default Meta
