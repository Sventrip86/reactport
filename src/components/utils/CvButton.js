import React from 'react';
import Button from '@material-ui/core/Button';
import CvIcon from '../../resources/images/icons/CvIcon.png';



const CvButton = (props) => {
    return (
       <Button
            href={props.download}
            
            variant="contained"
            size="medium"
            style={{
                background: props.bck,
                color:props.color
            }}>
           <img 
                src={CvIcon}
                className="iconImage"
                alt="icon_button"></img>
              {props.text}  
       </Button>
    );
};

export default CvButton;