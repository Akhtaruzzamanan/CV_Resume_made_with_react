import React from 'react';
import Typewriter from 'typewriter-effect';
import mainPhoto from '../../images/main_photo.jpg';
import {
    HeaderPhoto,
    HeaderPhotoImage,
    HeaderTitleH2,
    HeaderTitleH4,
} from './HeaderContent_Style';

function HeaderContent() {
    return (
        <div>
            <HeaderPhoto>
                <HeaderPhotoImage src={mainPhoto} alt="Alex Smith" />
            </HeaderPhoto>
            <div>
                <HeaderTitleH2>Alex Smith</HeaderTitleH2>
                {/* <h4>Web Designer</h4> It was before */}
                <HeaderTitleH4>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            strings: [
                                'Web Developer',
                                'Web Designer',
                                'JavaScript Developer',
                                'React Developer',
                                'Frontend Developer',
                                'YouTuber',
                            ],
                        }}
                    />
                </HeaderTitleH4>
            </div>
        </div>
    );
}

export default HeaderContent;
