import styled from 'styled-components'

const Btn = styled.button`
    background: #1F1F1F;
    color: #FFFFFF;
    border-radius: 20px;
    border: 1.6px solid #FFFFFF;
    padding: 11px 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 23px;
    font-family: diaGothicMedium;
    width: 94px;
    height: 58px;
    margin-right: 28px;

    &:hover{
        background: #FFF960;
        color: #1F1F1F;
        border: 1.6px solid #FFF960;
    }
`;

export default Btn;