import { gql } from '@apollo/client/core/core.cjs';

export const GREETING_QUERY = gql`
query SayHello($name: String!) {
  greeting(name: $name) {
    message
  }
}
`

