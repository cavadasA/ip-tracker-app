export const changeIp = (ip) => {
    return {
      type: "@ip/updated",
      payload: ip,
    };
  };
  export const changeLocation = (location) => {
    return {
      type: "@location/updated",
      payload: location,
    };
  };
  export const changeTimezone = (timezone) => {
    return {
      type: "@timezone/updated",
      payload: timezone,
    };
  };
  export const changeIsp = (isp) => {
    return {
      type: "@isp/updated",
      payload: isp,
    };
  };
  export const changeLat = (lat) => {
    return {
      type: "@lat/updated",
      payload: lat,
    };
  };
  export const changeLng = (lng) => {
    return {
      type: "@lng/updated",
      payload: lng,
    };
  };
  export const resetValues = () => {
    return {
      type: "@allValues/reset"
    };
  };
  