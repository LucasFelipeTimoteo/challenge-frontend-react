const getURLPathId = () => {
  const pathLocation = window.location.pathname
  const pathLocationCondition = pathLocation.includes('/character/')
  const path = pathLocationCondition ? pathLocation.split('/') : null
  const pathId = path ? Number(path[2]) : null

  return pathId
}

export default getURLPathId
