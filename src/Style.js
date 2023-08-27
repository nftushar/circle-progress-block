import { getMultiShadowCSS, getTypoCSS } from "../../Components/utils/getCSS";
import { getArrFromNum } from "./utils/functions";

const Style = ({ attributes, clientId }) => {
    const { rating, gap, alignment, textTypo, textColor, textShadow } = attributes;

    const ratingSl = `#bBlocksRating-${clientId} .bBlocksRating`;
    const starSl = `${ratingSl} .stars .star`;
    const intAndDec = (rating + '').split('.');
    const ratingInt = parseInt(intAndDec[0]);
    const ratingDec = parseInt(intAndDec[1] || 0);
 
    return <style dangerouslySetInnerHTML={{
        __html: `
        ${getTypoCSS(``, textTypo)?.googleFontLink}
        ${getTypoCSS(`${ratingSl} .ratingPrefix`, textTypo)?.styles}

          ${ratingSl} {
            justify-content: ${alignment};
            gap: ${gap};
            color: ${textColor}; 
          }

          ${ratingSl} .ratingPrefix{
            text-shadow: ${getMultiShadowCSS(textShadow, 'text')}
          }

        ${getArrFromNum(ratingInt).map((index) => `${starSl}:nth-child(${index}) .starFill`).join(', ')}{
            width: 100%;
        }

        ${starSl}:nth-child(${ratingInt + 1}) .starFill{
            width: ${(() => {
                switch (ratingDec) {
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