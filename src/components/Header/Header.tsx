import { FC } from 'react';
import styles from './header.module.css';
import { AvatarCustom } from '../AvatarCustom/AvatarCustom';
import { Link } from '../Link/Link';

export const Header: FC = () => {
  return (
    <header>
      <div className={styles.header}>
        <AvatarCustom />
        <div>
          <h2>Иван Иванов</h2>
          <div className={styles.linkBlock}>
            <Link nameResource={'Telegram'} />
            <Link nameResource={'GitHub'} />
            <Link nameResource={'Resume'} />
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
    </header>
  );
};
