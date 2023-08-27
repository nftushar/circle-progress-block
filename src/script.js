import { render } from 'react-dom';

import "./style.scss";
import Style from "./Style";
import Rating from './Rating';


document.addEventListener("DOMContentLoaded", () => {
    const iframeEls = document.querySelectorAll(".wp-block-b-blocks-circle-progress");
    iframeEls.forEach((iframeEl) => {
        const attributes = JSON.parse(iframeEl.dataset.attributes);
        const { cId } = attributes;

        render(<>
            <Style attributes={attributes} clientId={cId} />
            <Rating attributes={attributes} />
        </>, iframeEl);

        iframeEl?.removeAttribute("data-attributes");
    });
});

