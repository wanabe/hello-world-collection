import { InMemoryCache, ApolloClient } from '@apollo/client/core/core.cjs';
import { GREETING_QUERY } from './graphql/query';
import { browser } from '$app/env';

class App {
  public async sayHello(name: string): Promise<string> {
    let host = 'server';
    if (browser) {
      host = 'localhost';
    }
    const client = new ApolloClient({
      uri: 'http://' + host + ':8765/query',
      cache: new InMemoryCache()
    });
    try {
      const res = await client.query({
        query: GREETING_QUERY,
        variables: { name },
        errorPolicy: 'all',
      })
      return res?.data?.greeting?.message || '';
    } catch(e) {
      return '';
    }
  }
}

export default App;