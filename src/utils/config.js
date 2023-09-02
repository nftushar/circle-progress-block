import { extractGradient } from "./functions";

export const circleProgressConfig = (attributes) => {
    const { value, size, startAngle, reverse, thickness, lineCap, fill, emptyFill, animation, insertMode } = attributes;
    const { enabled, duration, startAt } = animation;
    const { type: fillType, color: fillColor, gradient: fillGradient } = fill;

    // console.log(Math.PI * ((extractGradient(fillGradient).angle / 360) * 2 - 0.5));
    return {
        value,
        size,
        startAngle: Math.PI * ((startAngle / 360) * 2 - 0.5),
        reverse,
        thickness,
        lineCap,
        fill: 'gradient' === fillType ? { gradient: extractGradient(fillGradient).colors, gradientAngle: Math.PI * ((extractGradient(fillGradient).angle / 360) * 2 - 0.5) } : fillColor,
        emptyFill,
        animation: enabled ? { duration } : false,
        animationStartValue: enabled ? startAt : 0.0,
        // animationStartValue: 0,
        insertMode
    }
}