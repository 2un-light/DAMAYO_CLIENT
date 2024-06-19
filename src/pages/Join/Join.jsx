import React, { useState } from 'react';
import './Join.css';
import Footer from '../../components/footer/Footer.jsx';
import axios from 'axios';

function Join () {

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputPasswordChk, setInputPasswordChk] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [loading, setLoading] = useState(false);


    const handleInputName = (e) => {
        setInputName(e.target.value);
    }

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value);
    }

    const handleInputPassword = (e) => {
        setInputPassword(e.target.value);
        setPasswordMatch(e.target.value == inputPasswordChk)
    }

    const handleInputPasswordChk = (e) => {
        setInputPasswordChk(e.target.value);
        setPasswordMatch(inputPassword == e.target.value);
    }

    //비동기 비밀번호 검증 함수
    const validatePasswords = async () => {
        return inputPassword === inputPasswordChk;
    }

    
    const onClickJoin = async () => {
        setLoading(true);

        const passwordMatch = await validatePasswords();

        if(!passwordMatch) {
            setPasswordMatch(false);
            setLoading(false);
            return;
        }

        axios.post("http://localhost:8080/members/join",{
            name: inputName,
            email: inputEmail,
            password: inputPassword
        })
        .then((res) => {
            console.log(res);
            if(res.data.status == "SUCCESS"){
                alert("회원가입에 성공하였습니다.")
            }
        })
        .catch((error) => {
            setLoading(false);
            alert("회원가입에 실패하였습니다.")
        })
        .finally(() => {
            setLoading(false);
        });
    }
            
    return (
        <div>
            <div className="join-container">
                <h3 className='join-title'> 회원 가입 </h3>

                <div className="join-input-container">

                <div className="join-text">이름 *</div>
                <div className="join-input">
                    <input type="name" id="name" name="name" value={inputName} onChange={handleInputName} placeholder="이름 입력해주세요" />
                </div>

                <div className="join-text">이메일 주소 *</div>
                <div className="join-input">
                    <input type="email" id="email" name="email" value={inputEmail} onChange={handleInputEmail} placeholder="ID@example.com" />
                </div>

                <div className="join-text">비밀번호 *</div>
                <div className="join-input">
                    <input type="password" id="password" name="password" value={inputPassword} onChange={handleInputPassword} placeholder="비밀번호" />
                </div>

                <div className="join-text">
                    비밀번호 확인 * 
                    {inputPasswordChk && (
                        <span className="password-match-message" style={{ color: passwordMatch ? 'green' : 'red', marginLeft: '10px' }}>
                            {passwordMatch ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
                        </span>
                    )}
                 </div>

                <div className="join-input">
                    <input type="password" id="passwordChk" name="passwordChk" value={inputPasswordChk} onChange={handleInputPasswordChk} placeholder="비밀번호 확인" 
                    style={{ borderColor: passwordMatch ? '' : 'red'}}/>
                    
                </div>
                </div>
                    <button className="join-button" onClick={onClickJoin}>{loading ? '처리 중...' : '확인'}</button>
            </div>
            <Footer/>
        </div>
    );
}

export default Join;