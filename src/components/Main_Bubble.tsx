import React from "react";
import Bubble from '../assets/img/Main_Bubble.png'
import { CSSProperties } from "styled-components"

function Main_Bubble () {

    const textStyles : CSSProperties = {
        position: 'absolute',
        top: '35%',
        transform: 'translate(10%, -50%)',
        color: '#FFFFFF',
        fontSize: '18px',
        fontFamily: 'diaGothicMedium',
    }
    const Styles : CSSProperties = {
        float: 'left',
        position: 'absolute',
        objectFit: 'cover',
        left: '354px',
        // bottom: '-220px',
        width: '253px', 
        height: '62px',
        // trangition: 'background-color 0.3s ease',
    }
    const imgStyles : CSSProperties = {
        width: '100%', 
        height: '100%',
        objectFit: 'cover'
    }
    return(
        <div 
            style={Styles}
        >
            <img
                src={Bubble}
                alt="Btn Dia"
                style={imgStyles}
            />
            <div style= {textStyles}>
                오늘 쓴 금액을 등록해보세요!
            </div>
        </div>
    );
}

export default Main_Bubble;