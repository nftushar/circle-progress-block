const $ = jQuery;

import { circleProgressConfig } from "./config";

export const initCircleProgress = (attributes, clientId) => {
    const progressSl = `#bBlocksCircleProgress-${clientId} .bBlocksCircleProgress .circleProgress`;

    $(progressSl)
        .circleProgress(circleProgressConfig(attributes))
        .on('circle-animation-progress', function (event, progress,stepValue) {
            $(this).find('strong').html(parseInt(stepValue * 100) + '<i>%</i>');
        });

    // document.querySelector(progressSl).addEventListener('circle-animation-progress', e => {
    //     // console.log(e);
    // })
}