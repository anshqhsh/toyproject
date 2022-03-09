import { gql } from 'apollo-server-express';

// 문자열을 graphql로 인식 ! 꼭들어가야하는것
const messageSchema = gql`
  type Message {
    id: ID!
    text: String!
    userId: ID!
    user: User!
    timestamp: Float #13자리 숫자
  }

  extend type Query {
    messages(cursor: ID): [Message!]! # = getMessages 커서는 필수x 메세지 필수, 배열 형태
    message(id: ID!): Message! # = getMessage
  }

  extend type Mutation {
    createMessage(text: String!, userId: ID!): Message!
    updateMessage(id: ID!, text: String!, userId: ID!): Message!
    deleteMessage(id: ID!, userId: ID!): ID!
  }
`;

export default messageSchema;
