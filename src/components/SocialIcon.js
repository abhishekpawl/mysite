import React from "react";

const SocialIcon = ({url, icon}) => {
  return (
    <li>
      <a href={url}>
        {icon}
      </a>
    </li>
  )
}

export default SocialIcon