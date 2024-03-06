import "../styles/header.css";

const Header = () => {
  return (
    <div className="wrap">
      <div className="logo">LOGO</div>
      <div className="menu">
        <div className="login">로그인</div>
        <div className="register">회원가입</div>
      </div>
    </div>
  );
};

export default Header;
