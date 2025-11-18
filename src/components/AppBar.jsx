import { useContext } from 'react';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import authContext from '../components/context/context';
import styles from './css/AppBar.module.css';

export default function Appbar() {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);

  return (
    <header className={styles.header}>
      <Navigation />

      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <button type="button" onClick={onLogIn}>
          Залогінитись
        </button>
      )}
    </header>
  );
}