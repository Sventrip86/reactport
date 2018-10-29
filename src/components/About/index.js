import React from 'react';
import Title from './Title';
import About_me from './About_me';
import CvButton from '../utils/CvButton';
import CV_FS from '../../resources/docs/CV_FS.pdf';

const About = () => {
    return (
        <div className="highlight_wrapper">
            <Title></Title>
            <About_me></About_me>
            <CvButton
                text="Curriculum Vitae"
                bck="white"
                color="grey"
                download="../../resources/docs/CV_FS.pdf"
                
                
                />   
                   </div>
    );
};

export default About;