import { useRef } from 'react';
const MsgInput = ({ mutate }) => {
  const textRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation(); // 이벤트 버블링 제어
    const text = textRef.current.value;
    textRef.current.value = '';
    mutate(text);
  };
  return (
    <form className="messages__input" onSubmit={onSubmit}>
      <textarea ref={textRef} placeholder="내용을 입력하세요" />
      <button type="submit">완료</button>
    </form>
  );
};

export default MsgInput;