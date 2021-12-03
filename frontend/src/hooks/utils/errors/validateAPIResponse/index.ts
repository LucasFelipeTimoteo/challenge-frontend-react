const validateAPIResponse = (response: any) => {
  if(!("data" in response)) {
    throw new Error('API ERROR: API is not returning data');
  }
}

export default validateAPIResponse