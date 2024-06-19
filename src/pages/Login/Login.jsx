import React, { useState } from 'react';
import './Login.css';
import Footer from '../../components/footer/Footer.jsx';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();

    const handleMainPageClick = () => {
        navigate('/');
    };

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value);
    };

    const handleInputPassword = (e) => {
        setInputPassword(e.target.value);
    }

    const onClickLogin = () => {
        axios.post("http://localhost:8080/members/sign-in",{
            email: inputEmail,
            password: inputPassword
        })
        .then((res) => {
            console.log(res);
            if(res.data.status == "SUCCESS"){
                alert("로그인에 성공하였습니다.");
                document.location.href = "/";
            }
        })
        .catch();
    }

    return (
        <div>
            <div className="login-container">
                <a href='/'><h2 className="login-title" onClick={handleMainPageClick}>DAMAYO</h2></a>

                <div className="login-input-container">
                <div className="login-input">
                    <input type="email" id="email" name="email" value={inputEmail} onChange={handleInputEmail} placeholder="이메일 주소를 입력해주세요" />
                </div>
                <div className="login-input">
                    <input type="password" id="password" name="password" value={inputPassword} onChange={handleInputPassword} placeholder="비밀번호를 입력해주세요" />
                </div>
                </div>
            
                 <button className="login-button" onClick={onClickLogin}>로그인</button>

            

                <div class="hr-sect">
                    <div class="hr-line"></div>
                    <div class="hr-text">간편 로그인</div>
                    <div class="hr-line"></div>
                </div>
                    
                <div className="social-login">
                    <div className="social-button-container">
                        <button className="social-button google"></button>
                        <div className="social-text">구글</div>
                    </div>
                    
                    <div className="social-button-container">
                        <button className="social-button naver"></button>
                        <div className="social-text">네이버</div>
                    </div>

                    <div className="social-button-container">
                        <button className="social-button kakao"></button>
                        <div className="social-text">카카오</div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>

      
       
    );
}

export default Login;