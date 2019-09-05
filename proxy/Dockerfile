FROM golang:1.8

WORKDIR /go/src/proxy
COPY . .

RUN go get -d -v ./...
RUN go install -v ./...

CMD ["proxy"]
