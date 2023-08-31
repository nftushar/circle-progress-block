export const circleProgressConfig = (attributes) => {
    const { value, size, startAngle, reverse, thickness, lineCap, fill, emptyFill, animation, insertMode } = attributes;
    const { enabled, duration, startAt } = animation;
    // console.log(enabled);
    return {
        value,
        size,
        startAngle: Math.PI * ((startAngle / 360) * 2 - 0.5),
        reverse,
        thickness,
        lineCap,
        fill,
        emptyFill,
        animation: enabled ? { duration } : false,
        // animationStartValue: enabled ? startAt : 0.0,
        animationStartValue: 0,
        insertMode
    }
}