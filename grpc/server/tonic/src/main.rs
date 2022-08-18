use tonic::transport::Server;
use tonic::{Request, Response, Status};
use std::env;

mod proto {
    tonic::include_proto!("hello_world");
}

#[derive(Default)]
pub struct MyGreeter {}

#[tonic::async_trait]
impl proto::greeter_server::Greeter for MyGreeter {
    async fn say_hello(
        &self,
        request: Request<proto::HelloRequest>,
    ) -> Result<Response<proto::HelloReply>, Status> {
        println!("Got a request from {:?}", request.remote_addr());

        let reply = proto::HelloReply {
            message: format!("Hello {}!", request.into_inner().name),
        };
        Ok(Response::new(reply))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let port = match env::var("PORT") {
       Ok(str) => str,
       Err(_) => "50051".to_string(),
    };

    let addr = ("0.0.0.0:".to_owned() + &port).parse().unwrap();
    let greeter = MyGreeter::default();

    println!("serve {}", addr);
    Server::builder()
        .add_service(proto::greeter_server::GreeterServer::new(greeter))
        .serve(addr)
        .await?;

    Ok(())
}
