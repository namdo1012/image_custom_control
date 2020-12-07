// INITIAL VALUE
let currentBorderRadiusValue = 10;
let textToImgContainerStyle = {
  top: 10,
  left: 10,
};

let valueFromTop = 1;
let valueFromLeft = 1;
let textFontSize = 18;

// DOM ELEMENTS
const imageContainer = document.querySelector(".image__container");
const image = document.querySelector(".image__custom");
const inputBorderRadius = document.getElementById("borderRadiusInput");
const inputTextToImg = document.getElementById("textToImg");
const inputValueFromTop = document.getElementById("valueFromTop");
const inputValueFromLeft = document.getElementById("valueFromLeft");
const inputTextFontSize = document.getElementById("textFontSize");
const selectedBorderRadius = document.getElementById("borderRadiusSelect");
const selectBackgroundColor = document.getElementById("blendBackground");
const selectBlendMode = document.getElementById("blendMode");
const textToImgContainer = document.querySelector(".text-to-img__container");

// HANDLE FUNCTION
function increaseBorderRadius() {
  imageContainer.style.borderRadius = `${currentBorderRadiusValue++}px`;
}

function decreaseBorderRadius() {
  imageContainer.style.borderRadius = `${currentBorderRadiusValue--}px`;
}

function changeBorderRadius() {
  let inputValue = inputBorderRadius.value;
  imageContainer.style.borderRadius = `${inputValue}px`;

  // REASSIGN GLOBAL borderRadiusValue
  currentBorderRadiusValue = parseInt(inputBorderRadius);
}

function handleChangeBorderRadiusSelect() {
  const selectedValue = selectedBorderRadius.value;

  if (selectedValue === "round") {
    imageContainer.style.borderRadius = "250px";

    // REASSIGN GLOBAL borderRadiusValue
    currentBorderRadiusValue = 250;
  } else if (selectedValue === "square") {
    imageContainer.style.borderRadius = "0px";

    // REASSIGN GLOBAL borderRadiusValue
    currentBorderRadiusValue = 0;
  }
}

function handleChangeBlendBackground() {
  const selectedValue = selectBackgroundColor.value;
  imageContainer.style.backgroundColor = selectedValue;
}

function handleChangeBlendMode() {
  const selectedValue = selectBlendMode.value;
  image.style.mixBlendMode = selectedValue.toLowerCase();
}

function handleInsertTextToImg() {
  let inputValue = inputTextToImg.value;
  textToImgContainer.innerHTML = inputValue;
}

function removeInsertTextToImg() {
  textToImgContainer.innerHTML = "";
}

function changeTextPositionTop() {
  if (inputValueFromTop.value === "") {
    valueFromTop = 1;
  } else {
    valueFromTop = parseInt(inputValueFromTop.value);
  }

  textToImgContainerStyle.top += valueFromTop;
  textToImgContainer.style.top = `${textToImgContainerStyle.top}px`;
}

function changeTextPositionLeft() {
  if (inputValueFromLeft.value === "") {
    valueFromLeft = 1;
  } else {
    valueFromLeft = parseInt(inputValueFromLeft.value);
  }

  textToImgContainerStyle.left += valueFromLeft;
  textToImgContainer.style.left = `${textToImgContainerStyle.left}px`;
}

function changeTextFontSize() {
  if (inputTextFontSize === "") {
    textFontSize = 18;
  } else {
    textFontSize = parseInt(inputTextFontSize.value);
  }

  // Chage font size
  textToImgContainer.style.fontSize = `${textFontSize}px`;
}

function increaseTextFontSize() {
  textToImgContainer.style.fontSize = `${textFontSize++}px`;
}

function decreaseTextFontSize() {
  textToImgContainer.style.fontSize = `${textFontSize--}px`;
}
