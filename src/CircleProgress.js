import { useState, useEffect } from "react";
const $ = jQuery;

import { initCircleProgress } from "./utils/functions";

const CircleProgress = ({ attributes, clientId }) => {
    const { size, thickness } = attributes;

    const [newSize, setNewSize] = useState(size);

    useEffect(() => {
        const elSize = $(`#bBlocksCircleProgress-${clientId} .bBlocksCircleProgress`).width();
        setNewSize(elSize < size ? elSize : size);

        if (newSize >= (thickness * 2)) {
            initCircleProgress({ ...attributes, size: newSize }, clientId);
        }
    }, [newSize, attributes]);

    return <div className="bBlocksCircleProgress" id={`bBlocksCircleProgress-${clientId}`}>
        <div className="circleProgress">
            <strong></strong>
        </div>
    </div>
}
export default CircleProgress;