const Style = ({ attributes, clientId }) => {
    const { alignment, size } = attributes;

    const mainSl = `#bBlocksCircleProgress-${clientId}`;

    return <style dangerouslySetInnerHTML={{
        __html: `
        ${mainSl} .bBlocksCircleProgress {
            text-align: ${alignment};
        }
        ${mainSl} .bBlocksCircleProgress .circleProgress{
            width: ${size}px;
            height: ${size}px;
        }
    `}}
    />
}
export default Style;