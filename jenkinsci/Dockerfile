FROM jenkinsci/jenkins

USER root

RUN apt-get update \
&& apt-get install -y apt-utils libreadline-dev dialog build-essential vim curl \
&& curl https://deb.nodesource.com/setup_8.x -o node_installer.sh \
&& bash node_installer.sh \
&& apt-get install -y nodejs \
&& npm install -gs webpack webpack-cli babel babel-core babel-cli babel-preset-env yarn mocha serverless

EXPOSE 8080