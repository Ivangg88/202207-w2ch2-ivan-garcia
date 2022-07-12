const strictEquals = function (value1, value2) {
  console.log(value1.toString().includes("-"));

  if (-0 < 0) {
    console.log("-0");
  } else {
    console.log("0");
  }

  if (Object.is(value1, value2)) {
    return true;
  } else {
    return false;
  }
};

console.log(strictEquals(0, -0));

console.log(strictEquals(-0, 0));

export default strictEquals;
