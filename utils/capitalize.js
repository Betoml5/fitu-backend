module.exports = capitalizeFirstName = (firstName) => {
  if (!firstName) {
    throw new Error("Missing name");
  } else if (firstName.split(" ").length === 1) {
    let firstChar = firstName.charAt(0);
    let firstCharUpper = firstChar.toUpperCase();
    let normalizedName = firstName.replace(firstChar, firstCharUpper);
    return normalizedName;
  }

  // 0          1
  // [Jesus, Alberto]
  let splitedName = firstName.split(" ");
  let firstCharFirstName = splitedName[0].charAt(0);
  let firstCharFirstNameUpper = firstCharFirstName.toUpperCase();

  let firstCharSecondName = splitedName[1].charAt(0);
  let firstCharSecondNameUpper = firstCharSecondName.toUpperCase();

  return `${firstCharFirstNameUpper} ${firstCharSecondNameUpper}`;
};

module.exports = capitalizeLastName = (firstName) => {};
