//import axios from "axios"; 다시
import React, { useEffect } from "react";
//import { useNavigate } from "react-router-dom"; 다시

function RedirectPage() {

    const code = new URL(window.location.href).searchParams.get("code");    // code만 추출
    // const code = new URL(dococument.location.toString()).searchParams.get('code');
    // const code = window.location.search; // all code
    //const navigate = useNavigate(); 다시

    useEffect(() => {
        console.log(process.env.REACT_APP_KAKAO_URL);
        // axios.post(); 다시
    });


  return (
    <div>
        
    </div>    
    );
}

export default RedirectPage;