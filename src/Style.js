const Style = ({ attributes, clientId }) => {
    const { alignment, size, elements } = attributes;
    const {showPercentage} = elements;
console.log(showPercentage);
    const mainSl = `#bBlocksCircleProgress-${clientId}`;

    return (
        <style
            dangerouslySetInnerHTML={{
                __html: `
            ${mainSl} .bBlocksCircleProgress {
                text-align: ${alignment};
            }
            ${mainSl} .bBlocksCircleProgress .circleProgress{
                width: ${size}px;
                height: ${size}px;
            }
            ${mainSl} .bBlocksCircleProgress .circleProgress strong{ 
                display: ${showPercentage ? 'none' : 'block'}  }} 
            }
        }`,
            }}
        />
    );
};
export default Style;
