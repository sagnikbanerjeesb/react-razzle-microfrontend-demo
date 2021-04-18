#!/bin/bash

kill $(cat yarn_pid.txt)

cd nginx
sh ./stop.sh
cd ..