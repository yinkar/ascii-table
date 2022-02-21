#!/bin/bash

yq eval -o=j -I=0 ./ascii.yml > ./src/ascii.json