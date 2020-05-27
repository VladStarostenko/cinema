export const selectRegion = (region, lang) => {
  return {
    type: "REGION_SELECTED",
    payload: { region, lang }
  };
};

export const selectMovie = (movie) => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie
  };
};

export const selectShowing = (showing) => {
  return {
    type: "SHOWING_SELECTED",
    payload: showing
  };
};

export const selectSeats = (seats) => {
  return {
    type: "SEATS_SELECTED",
    payload: seats
  };
};
