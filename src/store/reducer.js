export const universalReducer = (state = {}, action) => {
    switch (action.type) {
      case "@ip/updated":
        const newIp = action.payload;
        return {
          ...state,
          ipAddress: newIp,
        };
      case "@location/updated":
        const newLocation = action.payload;
        return {
          ...state,
          location: newLocation,
        };
      case "@timezone/updated":
        const newTimezone = action.payload;
        return {
          ...state,
          timezone: newTimezone,
        };
      case "@isp/updated":
        const newIsp = action.payload;
        return {
          ...state,
          isp: newIsp,
        };
      case "@lat/updated":
        const newLat = action.payload;
        return {
          ...state,
          lat: newLat,
        };
      case "@lng/updated":
        const newLng = action.payload;
        return {
          ...state,
          lng: newLng,
        };
      case "@allValues/reset":
        return {
          ...state,
          bill: "",
          persons: "",
          selectedButton: "",
          tipAmount: 0,
          personAmount: 0,
          personAlert: false,
        };
      default: {
        return {
          ...state,
        };
      }
    }
  };
  