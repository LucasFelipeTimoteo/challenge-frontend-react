import { IThrowEnvErrorsprops } from "./types";

const validateEnvVariables = ({ envPrivateKey, envPublicKey, envLimit }: IThrowEnvErrorsprops) => {
  if (!envPrivateKey) {
    throw new Error('"PrivateKey" env variable cannot be accessed.');
  }
  if (!envPublicKey) {
    throw new Error('"PublicKey" env variable cannot be accessed.');
  }
  if (!envLimit) {
    throw new Error('"Limit" env variable cannot be accessed.');
  }

  const validatedEnvVariables = {
    privateKey: envPrivateKey,
    publicKey: envPublicKey,
    limit: envLimit
  }

  return validatedEnvVariables
}

export default validateEnvVariables