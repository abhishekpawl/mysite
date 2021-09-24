import React from "react";

const SingleLink = ({url, text}) => {
  return (
    <li>
      <a href={url}>
        {text}
      </a>
    </li>
  )
}

export default SingleLink