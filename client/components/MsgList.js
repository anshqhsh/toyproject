import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import MsgItem from './MsgItem';
import MsgInput from './MsgInput';
import fetcher from '../fetcher';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const MsgList = ({ smsgs, users }) => {
  console.log(smsgs);
  const { query } = useRouter(); // userId 식별 - http://localhost:3000/?userId=joon
  const userId = query.userId || query.userid || ''; // 대소문자
  const [msgs, setMsgs] = useState(smsgs);
  const [editingId, setEditingId] = useState(null);
  const [hasNext, setHasNext] = useState(true); // 마지막
  const fetchMoreEl = useRef(null); //무한 스크롤 구현 이 div가 화면에 나오면 다음 부분을 불러 와라
  const intersecting = useInfiniteScroll(fetchMoreEl); // 화면상에 div태그가 들어오면 true / false

  const onCreate = async text => {
    const newMsg = await fetcher('post', '/messages', { text, userId });
    if (!newMsg) throw Error('something wrong');
    setMsgs(msgs => [newMsg, ...msgs]);
  };

  const doneEdit = () => {
    setEditingId(null);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await fetcher('put', `/messages/${id}`, { text, userId });
    if (!newMsg) throw Error('something wrong');
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsg);
      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = async id => {
    const receivedId = await fetcher('delete', `/messages/${id}`, {
      params: { userId },
    });
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === receivedId + ''); // json db에서 숫자형과 문자열의 문제
      if (targetIndex < 0) return msgs;
      const newMsg = [...msgs];
      newMsg.splice(targetIndex, 1);
      return newMsg;
    });
  };

  const getMessages = async () => {
    const newMsgs = await fetcher('get', '/messages', {
      params: { cursor: msgs[msgs.length - 1]?.id || '' }, // 현제 데이터의 마지막 id값
    });
    // 마지막값
    if (newMsgs.length === 0) {
      setHasNext(false);
      return;
    }
    setMsgs(msgs => [...msgs, ...newMsgs]);
  };
  // 최초 접속시 동작 useEffect 내부에서는 async await를 직접 호출 하지 않음

  // intersacting이 true일때 재호출 && 마지막
  useEffect(() => {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]);
  console.log('render');
  return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
      <ul className="messages">
        {msgs.map(x => (
          <MsgItem
            key={x.id}
            {...x}
            onUpdate={onUpdate}
            onDelete={() => onDelete(x.id)} // id를 넘기기 위해
            startEdit={() => setEditingId(x.id)} // edit 하는 아이디값을 set
            isEditing={editingId === x.id} // true / false
            myId={userId}
            user={users[x.userId]}
          />
        ))}
      </ul>
      <div ref={fetchMoreEl} />{' '}
    </>
  );
};
export default MsgList;
