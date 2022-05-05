import { useEffect } from 'react';

export default function useClickOutside(refs:any[], callBackFn:(val:any)=>void) {
  useEffect(() => {
    const listener = (event:any) => {
      if (!Array.isArray(refs) || refs.find((ref) => ref?.contains(event.target))) {
        return;
      }
      callBackFn(event);
    };
    document.addEventListener('mousedown', listener, true);
    return () => {
      document.removeEventListener('mousedown', listener, true);
    };
  }, [refs, callBackFn]);
}
