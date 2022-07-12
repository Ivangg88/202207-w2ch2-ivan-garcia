const strictEquals = function (value1, value2) {
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return false;
  }
  if (!value1 && !value2) {
    return true;
  }

  if (Object.is(value1, value2)) {
    return true;
  }

  return false;
};

export default strictEquals;
