import { Banner } from '../../../shared/ui/src/lib/banner/banner';
import { Link } from 'react-router-dom';
import styles from './cart.module.css';

/* eslint-disable-next-line */
export interface RoutesCartProps {}

export function RoutesCart(props: RoutesCartProps) {
  return (
    <div className={styles['container']}>
      <Banner text="Welcome to the cart." />
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default RoutesCart;