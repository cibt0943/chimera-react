FROM node:16

ENV APP_ROOT /app/frontend

RUN apt -y update && \
    apt -y upgrade

# 言語設定
RUN apt -y install locales && \
    echo "ja_JP.UTF-8 UTF-8" >> /etc/locale.gen && \
    locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8

# 運用のために入れとく
RUN \
    # vim
    apt -y install vim

WORKDIR $APP_ROOT
