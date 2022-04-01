module.exports = capitalizeFirstName = (firstName) => {
  if (!firstName || firstName === "") {
    throw new Error("Missing name");
  }
  if (firstName.split(" ").length === 1) {
    // Wrong
    let firstChar = firstName.charAt(0);
    let firstCharUpper = firstChar.toUpperCase();
    // Replace will replace all words
    let normalizedName = firstName.replace(firstChar, firstCharUpper);
    return normalizedName;
  }
  let splitedName = firstName.split(" ");
  let firstNamePart1 = splitedName[0].substring(1, splitedName[0].length);
  let firstCharFirstName = splitedName[0].charAt(0);
  let firstCharFirstNameUpper = firstCharFirstName.toUpperCase();
  let mergedName1 = firstCharFirstNameUpper + firstNamePart1;

  let firstNamePart2 = splitedName[1].substring(1, splitedName[1].length);
  let firstCharSecondName = splitedName[1].charAt(0);
  let firstCharSecondNameUpper = firstCharSecondName.toUpperCase();
  let mergedName2 = firstCharSecondNameUpper + firstNamePart2;

  return `${mergedName1} ${mergedName2}`;
};

module.exports = capitalizeLastName = (lastName) => {
  if (!lastName || lastName === "") {
    throw new Error("Missing lastname");
  }

  if (lastName.split(" ").length === 1) {
    let bigPartLastName = lastName.substring(1, lastName.length);
    let firstCharLastNameUpper = lastName.charAt(0).toUpperCase();

    return firstCharLastNameUpper + bigPartLastName;
  }

  let splitedLastName = lastName.split(" ");
  let bigPartLastName1 = splitedLastName[0].substring(
    1,
    splitedLastName[0].length
  );
  let firstCharLastNameUpper1 = splitedLastName[0].chartAt(0).toUpperCase();
  let mergedLastName1 = firstCharLastNameUpper1 + bigPartLastName1;

  let bigPartLastName2 = splitedLastName[0].substring(
    1,
    splitedLastName[0].length
  );
  let firstCharLastNameUpper2 = splitedLastName[0].chartAt(0).toUpperCase();
  let mergedLastName2 = firstCharLastNameUpper2 + bigPartLastName2;

  return mergedLastName1 + mergedLastName2;
};
