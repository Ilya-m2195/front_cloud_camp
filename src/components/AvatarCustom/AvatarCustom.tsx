import { FC } from 'react';
import styles from './avatarCustom.module.css';
import { firstLitterHelper } from '../../helpers/firstLitterHelper';

type Props = {
  name: string | undefined;
  surname: string | undefined;
};

const DEFAULT_LITTER = 'и';

export const AvatarCustom: FC<Props> = ({ name, surname }) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{firstLitterHelper(name!) || DEFAULT_LITTER}</span>
      <span className={styles.text}>{firstLitterHelper(surname!) || DEFAULT_LITTER}</span>
    </div>
  );
};
