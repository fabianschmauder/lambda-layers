#!/usr/bin/env bash
# install business code
(cd lambda-layers/businesslayer/nodejs; npm link install)
# install dependencies code
(cd lambda-layers/dependencieslayer/nodejs; npm install)
# deploy layers
(cd lambda-layers; sls deploy)
