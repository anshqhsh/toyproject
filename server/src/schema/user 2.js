import { gql } from 'apollo-server-express';

const userSchema = gql`
  type User {
    id: ID!
    nickname: String!
  }
  extend type Query {
    users: [User!]! # 기존의 데이터가 객체형 보내줄때 배열 값으로 바꿔준다
    user(id: ID!): User
  }
`;

export default userSchema;
