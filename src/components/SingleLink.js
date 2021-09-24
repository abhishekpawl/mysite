import React from "react";
import { Link } from "react-router-dom";

const SingleLink = ({url, text}) => {
  return (
    <li>
      <Link to={url}>
        {text}
      </Link>
    </li>
  )
}

export default SingleLink