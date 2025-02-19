import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import UserLogin from '../pages/users/auth/Login';
import UserSignUp from '../pages/users/auth/SignUp';
import OtpVerification from '../pages/users/auth/OtpVerification';
import OwnerLogin from '../pages/owners/auth/Login';
import OwnerSignUp from '../pages/owners/auth/SignUp';
import OtpVerificationOwner from '../pages/owners/auth/OtpVerificationOwner';
import LandingPage from '../pages/users/LandingPage';
import BookSlot from '../pages/users/BookSlot';
import QuickTimeUI from '../pages/owners/Landing';

// Helper function to simplify dynamic navbar rendering
const getNavbarType = (path) => {
  switch (path) {
    case '/':
      return 'home';
    case '/users/landing':
      return 'user-landing';
    case '/users/bookslot':
      return 'user-bookslot';
    case '/owners/landing':
      return 'owner-landing';
    default:
      return 'default';
  }
};

// eslint-disable-next-line react/prop-types
const AppLayout = ({ children }) => {
  const location = useLocation();

  const navbarType = getNavbarType(location.pathname);

  return (
    <>
      <Navbar type={navbarType} />
      <main>{children}</main>
    </>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/login" element={<UserLogin />} />
          <Route path="/users/signup" element={<UserSignUp />} />
          <Route path="/users/otp-verify" element={<OtpVerification />} />
          <Route path="/owners/login" element={<OwnerLogin />} />
          <Route path="/owners/signup" element={<OwnerSignUp />} />
          <Route path="/owners/otp-verify" element={<OtpVerificationOwner />} />
          <Route path="/users/landing" element={<LandingPage />} />
          <Route path="/users/bookslot" element={<BookSlot />} />
          <Route path="/owners/landing" element={<QuickTimeUI />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default AppRoutes;
