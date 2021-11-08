import validateEnvVariables from "./errors/validateEnvVariables"

const getEnvVariables = () => {
  const envLimit = process.env.REACT_APP_API_LIMIT
  const envPrivateKey = process.env.REACT_APP_API_PRIVATE_KEY
  const envPublicKey = process.env.REACT_APP_API_PUBLIC_KEY

  const {
    privateKey,
    publicKey,
    limit
  } = validateEnvVariables({ envPrivateKey, envPublicKey, envLimit })

  return {
    privateKey,
    publicKey,
    limit
  }
}

export default getEnvVariables