import * as remote from '@electron/remote';
import { useEffect } from 'react';
import icon from '@/assets/icon.svg';
import styles from './index.scss';

function IndexPage() {
  useEffect(() => {
    console.log(remote);
  }, []);
  return (
    <div>
      <div className={styles.Hello}>
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className={styles.Hello}>
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}
export default IndexPage;
