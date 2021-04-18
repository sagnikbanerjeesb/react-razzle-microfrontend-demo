#!/bin/bash

yarn install
echo 'Y' | yarn build

cd nginx
sh ./build.sh
cd ..

