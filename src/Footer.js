import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export default function Footer() {
  return (
    <div className="Footer">
      <FontAwesomeIcon icon="fa-brands fa-github" />
      <FontAwesomeIcon icon="fa-brands fa-linkedin" />
    </div>
  );
}
