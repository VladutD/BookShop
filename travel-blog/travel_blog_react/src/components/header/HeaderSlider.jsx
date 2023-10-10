/*import React from 'react';
import HeaderSlider { Slide } from '../header/HeaderSlider';
import '../../components/header/HeaderSlider.css';
import HeaderSlider from '../header/Header';

//images
const denmark = '../../assets/articleimg1.jpg';
const marinaDiPisa = '../../assets/articleimg2.JPG';
const copenhagen = '../../assets/articleimg3.jpg';

HeaderSlider = () => {
    return (
        <HeaderSlider
            slidingAnimation="left_to_right"
            orientation="horizontal"
            onBeforeChange={(previousSlide, nextSlide) =>
                console.log('onBeforeChange', previousSlide, nextSlide)
            }
            onChange={(nextSlide) => console.log('onChange', nextSlide)}
            onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.33)',
            }}
            settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 5000,
                height: '100vh',
            }}
        >
            <Slide>
                background=
                {{
                    backgroundImg: denmark,
                    backgroundAttachemnt: 'fixed',
                }}
            </Slide>

            <Slide>
                background=
                {{
                    backgroundImg: marinaDiPisa,
                    backgroundAttachemnt: 'fixed',
                }}
            </Slide>

            <Slide>
                background=
                {{
                    backgroundImg: copenhagen,
                    backgroundAttachemnt: 'fixed',
                }}
            </Slide>
        </HeaderSlider>
    );
};

export default HeaderSlider;*/
