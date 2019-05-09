export const showBirthDay = text => {
  return {
    type: "BIRTHDAY",
    text
  };
};

export const showWeddingDay = text => {
  return {
    type: "WEDDINGDAY",
    text
  };
};
