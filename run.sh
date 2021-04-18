#!/bin/bash

nohup yarn start:prod -y > yarn-logs.out 2>&1 &
echo $! > yarn_pid.txt

cd nginx
sh ./run.sh
cd ..