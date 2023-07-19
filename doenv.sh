#!/bin/bash


while getopts e: flag
do
    case "${flag}" in
        e) ENVIRONMENT=${OPTARG};;
    esac
done

case $ENVIRONMENT in
  dev)
    cat ./app/config/environments/.env.dev > .env
    ;;
  prod)
    cat ./app/config/environments/.env.prod > .env
    ;;
  stage)
    cat ./app/config/environments/.env.staging > .env
    ;;
  local)
    cat ./app/config/environments/.env.local > .env
    ;;
  *)
    echo -n "unknown"
    ;;
esac