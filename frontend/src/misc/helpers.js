export const findIndex = (path, routesArray) => {
  const indexObject = routesArray.filter(
    (routeObject) => routeObject.link === path
  );

  if (indexObject.length > 0) {
    return indexObject[0].index;
  } else {
    return 0;
  }
};
