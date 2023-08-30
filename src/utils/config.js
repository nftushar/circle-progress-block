export const circleProgressConfig = (attributes) => {
    const { value, size, startAngle, reverse, thickness, lineCap, fill, emptyFill, animation, insertMode } = attributes;
    const { enabled, duration, easing, startAt } = animation;

    return {
        value,
        size,
        // startAngle,
        startAngle: Math.PI * 1.5, // -0.5 to 1.5
        reverse,
        thickness,
        lineCap,
        fill,
        emptyFill,
        animation: enabled ? { duration, easing } : false,
        // animationStartValue: enabled ? startAt : 0.0,
        animationStartValue: 0,
        insertMode
    }
}