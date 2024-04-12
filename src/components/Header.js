import {useNavigate} from "react-router-dom";
import "../styles/header.css";
import {useEffect, useState} from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const session = window.sessionStorage.getItem("session");
  useEffect(() => {
    if (session) {
      setIsLogin(true);
    }
  }, [session]);

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
            <div
              className="login"
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </div>
            <div
              className="register"
              onClick={() => {
                navigate("/join");
              }}
            >
              회원가입
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
