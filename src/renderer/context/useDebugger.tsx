/* eslint-disable no-underscore-dangle */
import { createContainer, useContainer } from '@/utils/unstated-next';
import { useState, useRef } from 'react';

const Post = () => {
  const [resizableDe, setResizableDe] = useState<any>({ width: 0, height: 0 });
  const dataRef = useRef({
    cacheResizableDe: { width: 0, height: 0 },
  });
  const _setResizableDe = (_resizableDe) => {
    setResizableDe({
      ...resizableDe,
      height: dataRef.current.cacheResizableDe.height + _resizableDe.height,
    });
  };
  const onResizeStart = () => {
    dataRef.current.cacheResizableDe = resizableDe;
  };
  return {
    setResizableDe: _setResizableDe,
    onResizeStart,
    resizableDe,
  };
};

export const DebuggerContainer = createContainer(Post);

export function useDebugger() {
  return useContainer(DebuggerContainer);
}
