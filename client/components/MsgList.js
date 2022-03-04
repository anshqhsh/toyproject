import { useState } from 'react';
import MsgItem from './MsgItem';
import MsgInput from './MsgInput';

const UserIds = ['kim', 'lee'];

const getRandomUserId = () => UserIds[Math.round(Math.random())];

// 50개의 arr생성
const originalMsgs = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: 50 - i,
    userId: getRandomUserId(),
    timestamp: 1234567890123 + (50 - i) * 1000 * 60,
    text: `${50 - i} mock text`,
  }));
// console.log(JSON.stringify(originalMsgs));

const MsgList = () => {
  const [msgs, setMsgs] = useState(originalMsgs);
  const [editingId, setEditingId] = useState(null);

  const onCreate = text => {
    const newMsg = {
      id: msgs.length + 1,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: `${msgs.length + 1}${text}`,
    };
    setMsgs(msgs => [newMsg, ...msgs]);
  };

  const doneEdit = () => setEditingId(null);

  const onUpdate = (text, id) => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsg = [...msgs];
      newMsg.splice(targetIndex, 1, {
        ...msgs[targetIndex],
        text,
      });
      return newMsg;
    });
    doneEdit();
  };
  const onDelete = id => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsg = [...msgs];
      newMsg.splice(targetIndex, 1);
      return newMsg;
    });
  };

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
          />
        ))}
      </ul>
    </>
  );
};
export default MsgList;
