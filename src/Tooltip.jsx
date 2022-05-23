import React, { useEffect } from "react";
import "./tooltip.css";
const Tooltip = ({ children, position = "bottom", text }) => {
  useEffect(() => {
    // Getitng the passed component by id
    const toolTipComponent = document.getElementById("tooltip-component");

    // Helper fuctions for hover eventlistners
    const hoverHerlper = (tip, pos) => {
      tip.addEventListener("mouseenter", (e) => {
        document.getElementById(`tooltip-container-${pos}`).style.display =
          "block";
      });
      tip.addEventListener("mouseleave", (e) => {
        document.getElementById(`tooltip-container-${pos}`).style.display =
          "none";
      });
      return () => {
        // removing the event listners
        toolTipComponent.removeEventListener("mouseenter");
        toolTipComponent.removeEventListener("mouseleave");
      };
    };
    toolTipComponent && hoverHerlper(toolTipComponent, position);
  }, [position, text]);

  // Tooltip components as per the postion
  const toolTipTop = () => (
    <div id="tooltip">
      <div id="tooltip-container-top" className="tooltipContainer">
        <div id="tooltipText">
          <span id="hoverText">{text}</span>
        </div>
        <div id="toolArrow" className="tooltip-top"></div>
      </div>
      {children}
    </div>
  );
  const toolTipBottom = () => (
    <div id="tooltip">
      <div> {children}</div>
      <div id="tooltip-container-bottom" className="tooltipContainer">
        <div id="tooltipText">
          <span id="hoverText">{text}</span>
        </div>
        <div id="toolArrow" className="tooltip-bottom"></div>
      </div>
    </div>
  );
  const toolTipRight = () => (
    <div id="tooltip">
      <div className="tooltipRightContainer">
        <div> {children}</div>
        <div id="tooltip-container-right" className="tooltipContainer">
          <div id="tooltipText">
            <span id="hoverText">{text}</span>
          </div>
          <div id="toolArrow" className="tooltip-right"></div>
        </div>
      </div>
    </div>
  );
  const toolTipLeft = () => (
    <div id="tooltip">
      <div className="tooltipLeftContainer">
        <div id="tooltip-container-left" className="tooltipContainer">
          <div id="tooltipText">
            <span id="hoverText">{text}</span>
          </div>
          <div id="toolArrow" className="tooltip-left"></div>
        </div>
        <div> {children}</div>
      </div>
    </div>
  );

  return (
    <>
      {/* Rendering tooltip as per position */}
      {position === "right" && toolTipRight()}
      {position === "top" && toolTipTop()}
      {position === "bottom" && toolTipBottom()}
      {position === "left" && toolTipLeft()}
    </>
  );
};

export default Tooltip;
