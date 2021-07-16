import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-west-1_HeqgfA4eg",
  ClientId: "6m595ml967p1qnm8783pics16o",
};

export default new CognitoUserPool(poolData);
