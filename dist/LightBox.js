import React from "react";
import "./LightBox.css";

const LightBox = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.hidden ? 'lightbox-container hidden' : 'lightbox-container'
  }, /*#__PURE__*/React.createElement("div", {
    className: "lightbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "close",
    onClick: props.onClick
  }, props.close), props.content));
};

export default LightBox;