import { useEffect } from 'react';

export default function useMousewheelOutside(refs:any[], callBackFn:(val:any)=>void) {
  useEffect(() => {
    const listener = (event:any) => {
      if (!Array.isArray(refs) || refs.find((ref) => ref?.contains(event.target))) {
        return;
      }
      callBackFn(event);
    };
    document.addEventListener('wheel', listener, true);
    return () => {
      document.removeEventListener('wheel', listener, true);
    };
  }, [refs, callBackFn]);
}
