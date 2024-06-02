#!/bin/bash
npm install


while true; do
  node send_universal.js --api tonapi --bin ./pow-miner-cuda
  sleep 1;
done;
