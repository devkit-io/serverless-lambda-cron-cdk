import {Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";
import {ScheduledLambda} from "@devkit-io/constructs";
import * as path from "path";

export interface DeploymentStackProps extends StackProps {
  envVars?: Record<string, string>,
}

export class DeploymentStack extends Stack {
  constructor(scope: Construct, id: string, props: DeploymentStackProps) {
    super(scope, id, props);

    new ScheduledLambda(this, 'ScheduledLambda', {
      scheduleExpression: 'rate(5 minutes)',
      codePath: path.join(__dirname, '../../source/'),
      handler: 'tasks/helloWorld.handler',
      environment: props.envVars
    });

  }
}