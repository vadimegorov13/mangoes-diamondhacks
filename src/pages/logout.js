import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    await router.push('/');
  };

  handleLogout()

  return null;
};

export default Logout;
