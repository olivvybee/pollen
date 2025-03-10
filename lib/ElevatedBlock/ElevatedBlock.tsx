import { ReactNode } from 'react';
import styles from './ElevatedBlock.module.css';

export interface ElevatedBlockProps {
  children?: ReactNode;
}

export const ElevatedBlock = ({ children }: ElevatedBlockProps) => (
  <div className={styles.elevatedBlock}>{children}</div>
);
