// INITIAL VALUE
let currentBorderRadiusValue = 10;
let textToImgContainerStyle = {
  top: 10,
  left: 10,
};

let valueFromTop = 1;
let valueFromLeft = 1;
let textFontSize = 18;

// APP STATES
const state = {
  borderRadius: 0,
  backgroundColor: "",
  mixBlendMode: "",
  fontSize: 16,
  top: 0,
  left: 0,
};

// DOM ELEMENTS
const imageContainer = document.querySelector(".uploaded_file_view");

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
  const image = document.querySelector(".image__custom");
  image.style.borderRadius = `${currentBorderRadiusValue++}px`;

  // Update state
  state.borderRadius = currentBorderRadiusValue;
}

function decreaseBorderRadius() {
  const image = document.querySelector(".image__custom");
  image.style.borderRadius = `${currentBorderRadiusValue--}px`;

  // Update state
  state.borderRadius = currentBorderRadiusValue;
}

function changeBorderRadius() {
  const image = document.querySelector(".image__custom");
  let inputValue = inputBorderRadius.value;
  image.style.borderRadius = `${inputValue}px`;

  // REASSIGN GLOBAL borderRadiusValue
  currentBorderRadiusValue = parseInt(inputValue);

  // Update state
  console.log("currentBorderRadiusValue", currentBorderRadiusValue);
  state.borderRadius = currentBorderRadiusValue;
}

function handleChangeBorderRadiusSelect() {
  const image = document.querySelector(".image__custom");
  const selectedValue = selectedBorderRadius.value;

  if (selectedValue === "round") {
    image.style.borderRadius = "250px";

    // REASSIGN GLOBAL borderRadiusValue
    currentBorderRadiusValue = 250;
  } else if (selectedValue === "square") {
    image.style.borderRadius = "0px";

    // REASSIGN GLOBAL borderRadiusValue
    currentBorderRadiusValue = 0;
  }

  // Update state
  state.borderRadius = currentBorderRadiusValue;
}

function handleChangeBlendBackground() {
  const selectedValue = selectBackgroundColor.value;
  imageContainer.style.backgroundColor = selectedValue;

  // Update state
  state.backgroundColor = selectedValue;
}

function handleChangeBlendMode() {
  const image = document.querySelector(".image__custom");
  const selectedValue = selectBlendMode.value;
  image.style.mixBlendMode = selectedValue.toLowerCase();

  // Update state
  state.mixBlendMode = selectedValue.toLowerCase();
}

function handleInsertTextToImg() {
  let inputValue = inputTextToImg.value;
  textToImgContainer.innerHTML = inputValue;
}

function removeInsertTextToImg() {
  textToImgContainer.innerHTML = "";
  textToImgContainer.style.fontSize = 18;

  // Update state
  state.fontSize = 18;
}

function changeTextPositionTop() {
  if (inputValueFromTop.value === "") {
    valueFromTop = 1;
  } else {
    valueFromTop = parseInt(inputValueFromTop.value);
  }

  textToImgContainerStyle.top += valueFromTop;
  textToImgContainer.style.top = `${textToImgContainerStyle.top}px`;

  // Update state
  state.top = textToImgContainerStyle.top;
}

function changeTextPositionLeft() {
  if (inputValueFromLeft.value === "") {
    valueFromLeft = 1;
  } else {
    valueFromLeft = parseInt(inputValueFromLeft.value);
  }

  textToImgContainerStyle.left += valueFromLeft;
  textToImgContainer.style.left = `${textToImgContainerStyle.left}px`;

  // Update state
  state.left = textToImgContainerStyle.left;
}

function changeTextFontSize() {
  if (inputTextFontSize === "") {
    textFontSize = 18;
  } else {
    textFontSize = parseInt(inputTextFontSize.value);
  }

  // Chage font size
  textToImgContainer.style.fontSize = `${textFontSize}px`;

  // Update state
  state.fontSize = textFontSize;
}

function increaseTextFontSize() {
  textToImgContainer.style.fontSize = `${textFontSize++}px`;

  // Update state
  state.fontSize = textFontSize;
}

function decreaseTextFontSize() {
  textToImgContainer.style.fontSize = `${textFontSize--}px`;

  // Update state
  state.fontSize = textFontSize;
}

// Handle upload image
const btnUpload = $("#upload_file");
const btnOuter = $(".button_outer");
btnUpload.on("change", function (e) {
  var ext = btnUpload.val().split(".").pop().toLowerCase();
  if ($.inArray(ext, ["gif", "png", "jpg", "jpeg"]) == -1) {
    $(".error_msg").text("Not an Image...");
  } else {
    $(".error_msg").text("");
    btnOuter.addClass("file_uploading");
    setTimeout(function () {
      btnOuter.addClass("file_uploaded");
    }, 3000);
    var uploadedFile = URL.createObjectURL(e.target.files[0]);
    setTimeout(function () {
      $("#uploaded_view")
        .append(
          '<img class="image__custom" alt="image__custom" src="' +
            uploadedFile +
            '" />'
        )
        .addClass("show");
    }, 3500);
  }
});
$(".file_remove").on("click", function (e) {
  $("#uploaded_view").removeClass("show");
  $("#uploaded_view").find("img").remove();
  btnOuter.removeClass("file_uploading");
  btnOuter.removeClass("file_uploaded");

  // Remove text

  document.querySelector(".text-to-img__container").innerHTML = "";
});

// OUTPUT CSS HANDLER
function showOuputCss() {
  const outputCssContent = document.getElementById("css-output__content");
  const outputCssBorder = document.querySelector(".css-output-border-toggle");

  outputCssBorder.classList.remove("css-output--hide");
  outputCssBorder.classList.add("flex");
  outputCssContent.innerHTML = `borderRadius: ${state.borderRadius}px<br/>
    background-color: ${state.backgroundColor} <br/>
    mix-blend-mode: ${state.mixBlendMode}<br/>
    font-size: ${state.fontSize}px<br/>
    top: ${state.top}px<br/>
    left: ${state.left}px<br/>`;
}

function showStyleCustom() {
  const styleCustomContainer = document.getElementById("style-custom__content");
  styleCustomContainer.classList.remove("style-custom--hide");
  styleCustomContainer.add("style-custom--show");
}
