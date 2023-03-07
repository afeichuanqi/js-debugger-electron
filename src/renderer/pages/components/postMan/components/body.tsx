import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { jsonLanguage } from '@codemirror/lang-json';
import { usePost } from '@/context/usePost';

function App() {
  const { body, setBody } = usePost();
  const onChange = React.useCallback((value, viewUpdate) => {
    setBody(value);
  }, []);
  return (
    <CodeMirror
      theme="dark"
      height="200px"
      extensions={[jsonLanguage]}
      onChange={onChange}
      editable
    />
  );
}
export default App;
