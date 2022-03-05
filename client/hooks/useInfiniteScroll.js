import { useCallback, useEffect, useRef, useState } from 'react';

const useInfiniteScroll = targetEl => {
  console.log(targetEl);
  const observerRef = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  // 메세지 리스트에서 한번만 실행 되는것이 아니므로
  const getObserver = useCallback(() => {
    // 최초의 실행시 initializing
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(entries =>
        setIntersecting(entries.some(entry => entry.isIntersecting))
      );
    }
    return observerRef.current;
  }, [observerRef.current]); // ObserberRef.current가 변경될때만 이변경 사항을 실행

  useEffect(() => {
    if (targetEl.current) getObserver().observe(targetEl.current);
    return () => {
      getObserver().disconnect();
    };
  }, [targetEl.current]);
  return intersecting;
};

export default useInfiniteScroll;
