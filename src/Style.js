
import { getMultiShadowCSS, getTypoCSS } from "../../Components/utils/getCSS";
import { getArrFromNum } from "./utils/functions";

const Style = ({ attributes, clientId }) => {
    const { gap, alignment, textTypo, textColor, textShadow } = attributes;

    const circleSl = `#bBlocksCircle-${clientId} .bBlocksCircle`;
    const starSl = `${circleSl} .stars .star`;
    const intAndDec = [].split('.');
    const circleInt = parseInt(intAndDec[0]);
    const circleDec = parseInt(intAndDec[1] || 0);

    return <style dangerouslySetInnerHTML={{
        __html: `
        ${getTypoCSS(``, textTypo)?.googleFontLink}
        ${getTypoCSS(`${circleSl} .circlePrefix`, textTypo)?.styles}

          ${circleSl} {
            justify-content: ${alignment};
            gap: ${gap};
            color: ${textColor}; 
          }

          ${circleSl} .circlePrefix{
            text-shadow: ${getMultiShadowCSS(textShadow, 'text')}
          }

        ${getArrFromNum(circleInt).map((index) => `${starSl}:nth-child(${index}) .starFill`).join(', ')}{
            width: 100%;
        }

        ${starSl}:nth-child(${circleInt + 1}) .starFill{
            width: ${(() => {
                switch (circleDec) {
                    case 1:
                        return 25;
                    case 2:
                        return 30;
                    case 3:
                        return 35;
                    case 4:
                        return 42.5;
                    case 5:
                        return 50;
                    case 6:
                        return 57.5;
                    case 7:
                        return 65;
                    case 8:
                        return 70;
                    case 9:
                        return 75;
                    default:
                        return 0
                }
            })()}%;
        }
    `}}
    />
}
export default Style;