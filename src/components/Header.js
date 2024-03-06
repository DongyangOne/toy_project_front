import {useNavigate} from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const isLogin = false; // 로그인 되어있는 헤더 확인 시 true 변경 후 확인

  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        LOGO
      </div>
      <div className="menu">
        {isLogin ? (
          <div className="logout">로그아웃</div>
        ) : (
          <>
            <div className="login">로그인</div>
            <div className="register">회원가입</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
