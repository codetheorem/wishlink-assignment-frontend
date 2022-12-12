import { useEffect } from 'react';

const useScroll = (update) => {
     
    useEffect(() => {
        window.addEventListener('scroll', () => {
          if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            update();
          }
        });
        return () => {
        window.removeEventListener('scroll', () => {
          if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            update();
          }
          });}
      }, []);

      return null;
}

export default useScroll;