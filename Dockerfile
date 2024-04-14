FROM node:18.14.2-slim

WORKDIR /var/olgitbridge/
COPY . .

# http://deb.debian.org/debian 换源阿里云
RUN sed -i 's/deb.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list
RUN sed -i 's/security.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list

RUN apt-get update && apt-get upgrade -y && apt-get install --no-install-recommends git ca-certificates -y && apt-get clean


RUN npm config set registry https://registry.npmmirror.com
RUN npm install
RUN git config --global user.email "overleaf-git-bridge@system.changeme.invalid" && git config --global user.name "Overleaf Git Bridge"

EXPOSE 5000
ENTRYPOINT [ "node", "src/server.js" ]

