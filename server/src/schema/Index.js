import { gql } from 'apollo-server-express';
import messageSchema from './messages';
import userSchema from './user';

// 타입정의를 한곳에서 처리 하기 위함
const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export default [userSchema, messageSchema, userSchema];
