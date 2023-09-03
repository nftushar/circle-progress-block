const $ = jQuery;

import { circleProgressConfig } from "./config";

export const initCircleProgress = (attributes, clientId) => {
    const progressSl = `#bBlocksCircleProgress-${clientId} .bBlocksCircleProgress .circleProgress`;

    $(progressSl)
        .circleProgress(circleProgressConfig(attributes))
        .on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('strong').html(parseInt(stepValue * 100) + '<i>%</i>');
        });

}

export const extractGradient = (str = '') => {
    const colorPattern = /rgba?\([^)]+\)|#[0-9a-fA-F]+|rgb\([^)]+\)/g;

    const colors = str.match(colorPattern);

    const anglePattern = /-?\d+deg/;

    const angleMatch = str.match(anglePattern);

    let angle = null;

    if (angleMatch) {
        angle = parseInt(angleMatch[0].replace('deg', ''));
    }

    return {
        colors: colors || [],
        angle,
    };
}