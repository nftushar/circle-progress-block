import { useEffect } from "react";
import { initCircleProgress } from "./utils/functions";

const CircleProgress = ({ attributes, clientId }) => {
    useEffect(() => {
        initCircleProgress(attributes, clientId);
    }, [attributes]);

    return <div className="bBlocksCircleProgress" >
        <div className="circleProgress">
            <strong></strong>
        </div>
    </div>
}
export default CircleProgress;