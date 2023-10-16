import { SSMClient, GetParameterCommand, PutParameterCommand } from '@aws-sdk/client-ssm';

/**
   * initial an new SSMClient
   */
const buildSSMClient = () => {
  try {
    const accessKeyId = 'dummy';
    const secretAccessKey = 'dummy';
    return new SSMClient({
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
      },
      region: 'ap-northeast-1',
      endpoint: 'http://localhost:4566'
    });
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
}

/**
   * To put a set of parameter-name and parameter-value to the Amazon Simple Systems Manager.
   * @param parameter is an absolute file path treated as a Key in the Amazon S3 bucket
   * @param value is an xml content as a string
   * @returns
   */
async function putParameter(parameter, value) {
  const sSMClient = buildSSMClient();

  const input = {
    Name: parameter, // required
    Value: value, // required
    Type: 'String',
    Overwrite: true,
    Tier: 'Standard' || 'Advanced' || 'Intelligent-Tiering',
    DataType: 'text'
  };

  const putParameterCommand = new PutParameterCommand(input);

  try {
    const putParameterResult = await sSMClient.send(putParameterCommand);
    console.log(`putParameter::putParameterResult`, putParameterResult);

    return true;
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
}

/**
 * To upload a file to the Amazon S3 bucket.
 * @param filePath is an absolute file path treated as a Key in the Amazon S3 bucket
 * @param xml is an xml content as a string
 * @returns
 */
async function getParameter(parameter) {
  const sSMClient = buildSSMClient();

  const input = {
    Name: parameter
  };

  const getParameterCommand = new GetParameterCommand(input);

  try {
    const getParametersResult = await sSMClient.send(getParameterCommand);
    console.log(`getParameters::getParametersResult`, getParametersResult);

    return getParametersResult.Parameter.Value;
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
}

// put parameter
// putParameter('MyStringParameter', 'Vici3');

// get parameter
console.log(await getParameter('MyStringParameter'))