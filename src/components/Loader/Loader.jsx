import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <Audio height={150} width={80} color="#0d55a7" ariaLabel="Loading" />
    </div>
  );
};

export default Loader;
