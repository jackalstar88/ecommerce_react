import messages from "lib/text"
import FontIcon from "material-ui/FontIcon"
import IconButton from "material-ui/IconButton"
import React from "react"
import { Link } from "react-router-dom"

const Buttons = () => (
  <span>
    <Link to="/admin/pages/add">
      <IconButton
        touch
        tooltipPosition="bottom-left"
        tooltip={messages.settings_addPage}
      >
        <FontIcon color="#fff" className="material-icons">
          add
        </FontIcon>
      </IconButton>
    </Link>
  </span>
)

export default Buttons
