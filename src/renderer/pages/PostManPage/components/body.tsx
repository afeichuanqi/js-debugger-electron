import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { jsonLanguage } from '@codemirror/lang-json';
import { usePost } from '@/context/usePost';
import styles from './params.scss';

function App() {
  const { body, setBody } = usePost();
  const onChange = React.useCallback((value, viewUpdate) => {
    setBody(value);
  }, []);
  return (
    <div className={styles.app}>
      <CodeMirror
        value={body}
        theme="dark"
        height="200px"
        extensions={[jsonLanguage]}
        onChange={onChange}
        editable
      />
    </div>
  );
}
export default App;
