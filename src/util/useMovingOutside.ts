import { useEffect } from 'react';

export default function useMovingOutside(refs:any[], callBackFn:(val:any)=>void) {
  useEffect(() => {
    const listener = (event:any) => {
      if (!Array.isArray(refs) || refs.find((ref) => ref?.contains(event.target))) {
        return;
      }
      callBackFn(event);
    };
    document.addEventListener('mousemove', listener, true);
    return () => {
      document.removeEventListener('mousemove', listener, true);
    };
  }, [refs, callBackFn]);
}
