const convertISBN = isbn => {
  let total = 0;

  let result = isbn.substring(3, 12);
  for (let x = 0; x < 9; x += 1) {
    total = total + (result.charAt(x) * (10 - x));
  }

  let z = (11 - (total % 11)) % 11;
  if (z === 10) { z = "X"; }

  return result + z;
}

export default convertISBN;
