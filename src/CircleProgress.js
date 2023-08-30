import { useEffect } from "react";
import { circleProgressConfig } from "./utils/config";


const $ = jQuery;

const CircleProgress = ({ attributes, clientId }) => {
    // console.log(attributes);

    const { alignment, value, size, startAngle, reverse, thickness, lineCap, fill, circleScale, emptyFill, animation, insertMode } = attributes;
    const { enabled, duration, easing, startAt } = animation;
    // console.log(fill);
    useEffect(() => {
        $(`#bBlocksCircleProgress-${clientId} .bBlocksCircleProgress .circleProgress`).circleProgress(circleProgressConfig(attributes));
    }, []);

    return <div className="bBlocksCircleProgress" >
        <div className="circleProgress" />
    </div>
}


export default CircleProgress;