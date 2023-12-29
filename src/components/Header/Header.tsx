import { FC } from 'react';
import styles from './header.module.css';
import { AvatarCustom } from '../AvatarCustom/AvatarCustom';
import { Link } from '../Link/Link';

type Props = {
  name?: string;
  surname?: string;
};

export const Header: FC<Props> = ({ name, surname }) => {
  return (
    <header>
      <div className={styles.header}>
        <AvatarCustom name={name} surname={surname} />
        <div>
          <h2>{name && surname ? `${name} ${surname}` : 'Иван Иванов'}</h2>
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
