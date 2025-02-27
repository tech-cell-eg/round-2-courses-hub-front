import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const NavBtn = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const clickHandler = () => {
    if (token !== null) {
      logout();
      navigate('/');
      window.location.reload();
    } else {
      navigate('/auth/login');
    }
  };
  return (
    <button
      type="button"
      className="sm:text-sm md:text-md lg:text-lg px-4 py-2 bg-[rgba(112,79,230,1)] hover:bg-[rgba(112,79,230,0.8)] text-white rounded-lg cursor-pointer transition duration-300"
      onClick={clickHandler}
    >
      {token !== null ? 'Logout' : 'Login'}
    </button>
  );
};

export default NavBtn;
