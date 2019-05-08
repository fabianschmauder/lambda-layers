#!/usr/bin/env bash
# link business code
(cd businesscode; npm link)
# install business code
(cd lambda-layers/businesslayer/nodejs; npm link business-code)
# install dependencies code
(cd lambda-layers/dependencieslayer/nodejs; npm install)
# deploy layers
(cd lambda-layers; sls deploy)
