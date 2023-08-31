import React from "react";
import { render } from "react-dom";
import "./style.scss";
import Style from "./Style";
import CircleProgress from "./CircleProgress";


document.addEventListener("DOMContentLoaded", () => {
    const circleEls = document.querySelectorAll(".wp-block-b-blocks-circle-progress");

    circleEls.forEach((circleEl) => {
        const attributes = JSON.parse(circleEl.dataset.attributes);
        const { cId } = attributes;

        render(<>
            <Style attributes={attributes} clientId={cId} />

            <CircleProgress attributes={attributes} clientId={cId} />
        </>, circleEl);

        circleEl?.removeAttribute("data-attributes");
    });
});
