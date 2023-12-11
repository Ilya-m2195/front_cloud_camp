import { FC } from 'react';
import iconFolder from '../../img/iconFolder.jpg';
import styles from './link.module.css';

type Props = {
  nameResource: string;
  href?: string;
};

export const Link: FC<Props> = ({ nameResource, href }) => {
  return (
    <a href={href || '#'} className={styles.linkWrapper}>
      <img src={iconFolder} alt='iconFolder' className={styles.img} />
      <span>{nameResource}</span>
    </a>
  );
};
