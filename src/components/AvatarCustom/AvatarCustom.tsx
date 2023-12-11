import { FC } from 'react';
import styles from './avatarCustom.module.css';

const firstLitter = (name: string): string | void => {
  if (typeof name === 'undefined') {
    return;
  }
  return name.split('')[0].toUpperCase();
};
type Props = {
  name?: string;
  lastName?: string;
};

export const AvatarCustom: FC<Props> = ({ name, lastName }) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{firstLitter(name!) || 'И'}</span>
      <span className={styles.text}>{firstLitter(lastName!) || 'И'}</span>
    </div>
  );
};
