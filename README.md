# hello-world-collection

## Usage

Generate docker-compose.yml by mixing the files you want to use.

```
ruby compose.rb grpc/server/tonic grpc/client/gatsby grpc/proxy/envoy
docker-compose up --build -d
```

You can access http://localhost:8000 in a few minutes.

## License

These codes are licensed under CC0.

http://creativecommons.org/publicdomain/zero/1.0/deed.en
http://creativecommons.org/publicdomain/zero/1.0/deed.ja
