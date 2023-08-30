const Style = ({ attributes, clientId }) => {
    const { alignment } = attributes;

    const mainSl = `#bBlocksCircleProgress-${clientId}`;

    return <style dangerouslySetInnerHTML={{
        __html: `
        ${mainSl} .circleProgress {
            text-align: ${alignment};
        }
    `}}
    />
}
export default Style;