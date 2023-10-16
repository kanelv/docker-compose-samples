# Sample

## Commands
```bash
aws --endpoint-url=http://localhost:4566 --profile localstack ssm put-parameter \
    --name "MyStringParameter" \
    --type "String" \
    --value "Vici" \
    --overwrite

aws --endpoint-url=http://localhost:4566 --profile localstack ssm put-parameter \
    --name "MyStringParameter" \
    --type "String" \
    --value "Vici2" \
    --overwrite

aws --endpoint-url=http://localhost:4566 --profile localstack ssm get-parameter --name "MyStringParameter" --with-decryption
```

## References
https://dev.to/bennycode/how-to-use-mjs-files-in-node-js-23ep
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getparametercommand.html
https://docs.aws.amazon.com/cli/latest/reference/ssm/put-parameter.html
https://docs.aws.amazon.com/systems-manager/latest/userguide/param-create-cli.html#param-create-cli-string
https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ssm/get-parameters.html
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/PutParameterCommand/
https://blog.knoldus.com/create-get-and-delete-secrets-in-aws-parameter-store-using-cli/
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetParameterCommand/