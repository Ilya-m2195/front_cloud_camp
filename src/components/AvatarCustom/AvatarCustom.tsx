import { FC } from 'react';
import styles from './avatarCustom.module.css';

type Props = {
  name: string | undefined;
  surname: string | undefined;
};

const firstLitter = (name: string): string | void => {
  if (name.length === 0) {
    return;
  }
  return name.split('')[0].toUpperCase();
};

export const AvatarCustom: FC<Props> = ({ name, surname }) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{firstLitter(name!) || 'И'}</span>
      <span className={styles.text}>{firstLitter(surname!) || 'И'}</span>
    </div>
  );
};
