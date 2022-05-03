FROM ubuntu:20.04

RUN apt update && \
apt-get update && \
apt install curl -y && \
curl -sL https://deb.nodesource.com/setup_14.x -o /tmp/nodesource_setup.sh && \
bash /tmp/nodesource_setup.sh && \
apt install nodejs && \
apt install python3-pip -y && \
pip3 install numpy pandas joblib nltk sklearn matplotlib seaborn dill datetime

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install

EXPOSE 5000
CMD ["npm", "start"]