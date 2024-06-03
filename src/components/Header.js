import {useNavigate} from "react-router-dom";
import "../styles/header.css";
import {useEffect, useState} from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
<<<<<<< HEAD
=======

>>>>>>> f8138f00a9de77ef3c26ce34f8667ec938a58398
  const logout = () => {
    window.sessionStorage.removeItem("session");
    setIsLogin(false);
  };
<<<<<<< HEAD
=======

>>>>>>> f8138f00a9de77ef3c26ce34f8667ec938a58398
  useEffect(() => {
    if (window.sessionStorage.getItem("session")) {
      setIsLogin(true);
    }
  }, []);
<<<<<<< HEAD
=======

>>>>>>> f8138f00a9de77ef3c26ce34f8667ec938a58398
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
          <div onClick={logout} className="logout">
            로그아웃
          </div>
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