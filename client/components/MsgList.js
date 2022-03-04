import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MsgItem from './MsgItem';
import MsgInput from './MsgInput';
import fetcher from '../fetcher';

const MsgList = () => {
  const {
    query: { userId = '' },
  } = useRouter(); // userId 식별 - http://localhost:3000/?userId=joon
  const [msgs, setMsgs] = useState([]);
  const [editingId, setEditingId] = useState(null);

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
    const msgs = await fetcher('get', '/messages');
    setMsgs(msgs);
  };
  // 최초 접속시 동작 useEffect 내부에서는 async await를 직접 호출 하지 않음
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <MsgInput mutate={onCreate} />
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
          />
        ))}
      </ul>
    </>
  );
};
export default MsgList;
