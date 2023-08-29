export const circleProgressConfig = (attributes) => {
    const { value, size, startAngle, reverse, thickness, lineCap, fill, emptyFill, animation, insertMode } = attributes;
    const { enabled, duration, easing, startAt } = animation;

    return {
        value,
        size,
        startAngle,
        reverse,
        thickness,
        lineCap,
        fill,
        emptyFill,
        animation: enabled ? { duration, easing } : false,
        animationStartValue: enabled ? startAt : 0.0,
        insertMode 
    }
}