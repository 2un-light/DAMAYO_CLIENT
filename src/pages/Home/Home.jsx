import React from 'react';
import damayoImage from '../../assets/damayo.gif';
import './Home.css';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import {useNavigate} from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return(
        <div className="home">
            <Header/>
            <div className="content">
                <div className="left-content">
                    <div className="text-block">
                        <h2>세상의 모든 일정을 담다, 담아요</h2>
                        <p>DAMAYO는 모든 일정을 한 곳에 모아 효율적으로 관리할 수 있는 공유 캘린더입니다.</p>
                        <p>개인과 팀의 일정을 쉽게 공유하고, 중요한 이벤트를 놓치지 마세요.</p>
                        <p>언제 어디서나 간편하게 접속하여 시간 관리를 완벽하게 할 수 있습니다.</p>
                    </div>
                    <button class="start-button" role="button" onClick={handleLoginClick}><span class="text">Press to Start</span></button>
                </div>

                <div className="right-content">
                    <div className="gif-container">
                        <img src={damayoImage} alt="damayo"/>
                    </div>
                </div>
            </div>
            <Footer/>    
        </div>  
    );
}

export default Home;