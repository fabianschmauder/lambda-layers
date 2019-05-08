# Lambda Layers

Basic example for AWS Lambda layers with serverless and node.
It creates a Lambda function with two layers. 
A Business layer with custom code and a dependencies layer with node libraries.

## Deploy

#### Requirements
You need a AWS account and the serverless cli and npm running.

####  Deploy Layers

To deploy the setup and deploy the layers you can run the ``setup-deploy-layers.sh`` or execute the commands on your own.

```
# link business code
(cd businesscode; npm link)
# install business code
(cd lambda-layers/businesslayer/nodejs; npm link business-code)
# install dependencies code
(cd lambda-layers/dependencieslayer/nodejs; npm install)
# deploy layers
(cd lambda-layers; sls deploy)
```
  
#### Deploy Function

To deploy the function with layers you have to update the version arn of the layers at the ``lambda-layers-functions/serverless.yml``

```
functions:
  hello:
    handler: src/app/handler.hello
    layers: # layer refs
      - 'Fn::Join': # specify the business layer arn
         - ':'
         - - 'arn:aws:lambda'
           - Ref: 'AWS::Region'
           - Ref: 'AWS::AccountId'
           - 'layer'
           - 'dev-business-layer' # layer name
           - '2' # version to update
      - 'Fn::Join': # specify the dependencies layer arn
         - ':'
         - - 'arn:aws:lambda'
           - Ref: 'AWS::Region'
           - Ref: 'AWS::AccountId'
           - 'layer'
           - 'dev-dependencies-layer' # layer name
           - '3' # version to update
```

then you can run 
``
(cd lambda-layer-functions; sls deploy)
`` to  deploy the Function

