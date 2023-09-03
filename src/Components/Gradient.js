import { GradientPicker } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

const MyGradientPicker = () => {
    const [gradient, setGradient] = useState(null);
    const [circleProgress, setCircleProgress] = useState(0.75);

    // Apply the gradient when the component mounts
    useEffect(() => {
        setGradient({
            gradient: [
                ['#0681c4', 0.5],
                ['#4ac5f8', 0.5],
            ],
            gradientAngle: Math.PI / 4,
        });

        // Simulate circle animation progress
        const interval = setInterval(() => {
            setCircleProgress((prevProgress) => {
                const newProgress = prevProgress + 0.01;
                if (newProgress >= 1) {
                    clearInterval(interval);
                    return 1;
                }
                return newProgress;
            });
        }, 100);
    }, []);

    return (
        <>
            <GradientPicker
                __nextHasNoMargin
                value={gradient}
                onChange={(currentGradient) => setGradient(currentGradient)}
                gradients={[
                    {
                        name: 'JShine',
                        gradient:
                            'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                        slug: 'jshine',
                    },
                    {
                        name: 'Moonlit Asteroid',
                        gradient:
                            'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
                        slug: 'moonlit-asteroid',
                    },
                    {
                        name: 'Rastafarie',
                        gradient:
                            'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
                        slug: 'rastafari',
                    },
                ]}
            />
            <div>
                {/* Display the circle animation progress */}
                <strong>{circleProgress.toFixed(2).substr(1)}</strong>
            </div>
        </>
    );
};

export default MyGradientPicker;
