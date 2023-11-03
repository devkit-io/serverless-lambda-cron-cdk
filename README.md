# AWS Lambda Cron Jobs Starter Kit

## Overview

This repository provides a starter kit for setting up cron jobs using AWS Lambda. It includes the necessary AWS Cloud Development Kit (CDK) deployment code, a CI/CD pipeline, as well as the source code for the Lambda function.

The kit is designed to be easily configurable and deployable, allowing for quick setup and iteration. It's ideal for developers looking to automate tasks on a schedule using AWS Lambda.

## Prerequisites

Before using this starter kit, ensure you have the following:

- AWS CLI installed and configured with appropriate permissions.
- Node.js and npm installed.
- AWS CDK installed.
- Git configured for access to the repository.

## Structure

- `/deployment`: Contains the AWS CDK code required to deploy the AWS resources.
- `/source`: Contains the source code for the Lambda function that will be executed as a cron job.

## Configuration

To configure the starter kit, update the `configuration` object in `deployment/config.ts` with your specific values:

```javascript
export const configuration = {
  repoOwner: "__REPO_OWNER__", // The owner of the repository
  repoName: "__REPO_NAME__", // The name of the repository
  codeBranch: "__CODE_BRANCH__", // The branch with the Lambda code
  connectionArn: "__CONNECTION_ARN__", // The ARN of the CodeStar connection
  account: "__ACCOUNT__", // Your AWS account ID
  region: "__REGION__", // AWS region where resources will be deployed
};
```

## Deployment

To deploy the cron jobs, run the following commands:

1. Navigate to the `deployment` directory:

```sh
cd deployment
```

2. Install the dependencies:

```sh
npm install
```

3. Deploy the stack to your AWS account:

```sh
cdk deploy
```

Ensure you have the necessary permissions to create the resources defined in the CDK code.

## Usage

Once deployed, the AWS Lambda function will run according to the schedule defined in the CDK code. You can modify the schedule by editing the `events.Rule` properties within the CDK code.

The Lambda function's source code can be found under `/source` and can be modified to perform the desired actions when triggered.

## Support and Contribution

If you encounter any issues or require assistance, please open an issue in the repository.

Contributions to the starter kit are welcome! Please submit a pull request with your proposed changes or enhancements.

## License

This starter kit is released under the MIT license. See the LICENSE file for more details.
