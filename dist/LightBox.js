import React from "react";
import "./LightBox.css";

const LightBox = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.hidden ? 'lightbox hidden' : 'lightbox'
  }, /*#__PURE__*/React.createElement("div", {
    className: "close",
    onClick: props.onClick,
    tabIndex: "50",
    onKeyDown: e => e.keyCode === 13 ? props.onKeyDown : null
  }, props.close), props.content);
};

export default LightBox;