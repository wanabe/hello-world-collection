import * as React from "react"
import type { HeadFC } from "gatsby"

import { GreeterClient } from "../grpc/Hello_worldServiceClientPb"
import { HelloRequest } from "../grpc/hello_world_pb"

const pageStyles = {
  color: "#232129",
  padding: 12,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  const [name, setName] = React.useState('world');
  const [message, setMessage] = React.useState<string>('');

  let handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  React.useEffect(() => {
    if (!name) return;
    let client = new GreeterClient("http://localhost:8080");
    let request = new HelloRequest();
    request.setName(name);
    client.sayHello(request, {}, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response.toObject());
        setMessage(response.getMessage());
      }
    })
  }, [name]);


  return (
    <main style={pageStyles}>
      <input value={name} onChange={handleOnChangeName} />
      <p>{message}</p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Page</title>;
