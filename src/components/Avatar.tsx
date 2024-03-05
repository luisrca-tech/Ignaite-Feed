import styles from './Avatar.module.css';
import {ImgHTMLAttributes} from 'react'

interface avatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar ({hasBorder = true, ...props}: avatarProps) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    {...props}
    />
  );
}