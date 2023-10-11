#!/bin/bash

export DEVICE_IP=$(grep DEVICE_IP .env | cut -d '=' -f 2)
export PORT=$(grep PORT .env | cut -d '=' -f 2)

python manage.py runserver $DEVICE_IP:$PORT
