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
}

function decreaseBorderRadius() {
  const image = document.querySelector(".image__custom");
  image.style.borderRadius = `${currentBorderRadiusValue--}px`;
}

function changeBorderRadius() {
  const image = document.querySelector(".image__custom");
  let inputValue = inputBorderRadius.value;
  image.style.borderRadius = `${inputValue}px`;

  // REASSIGN GLOBAL borderRadiusValue
  currentBorderRadiusValue = parseInt(inputBorderRadius);
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
}

function handleChangeBlendBackground() {
  const selectedValue = selectBackgroundColor.value;
  imageContainer.style.backgroundColor = selectedValue;
}

function handleChangeBlendMode() {
  const image = document.querySelector(".image__custom");
  const selectedValue = selectBlendMode.value;
  image.style.mixBlendMode = selectedValue.toLowerCase();
}

function handleInsertTextToImg() {
  let inputValue = inputTextToImg.value;
  textToImgContainer.innerHTML = inputValue;
}

function removeInsertTextToImg() {
  textToImgContainer.innerHTML = "";
  textToImgContainer.style.fontSize = 18;
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
});

// OUTPUT CSS HANDLER
function showOuputCss() {
  const outputCssContent = document.getElementById("css-output__content");
  const outputCssBorder = document.querySelector(".css-output-border-toggle");

  outputCssBorder.classList.remove("css-output--hide");
  outputCssBorder.classList.add("flex");
  console.log(outputCssContent);
  // const outputCssContent = document.querySelector(".css-output__content");
  // console.log(outputCssContent);
  outputCssContent.innerHTML = `borderRadius: 10px<br/>
    background-color: red<br/>
    mix-blend-mode: dark<br/>
    font-size: 10px<br/>
    top: 10px<br/>
    left: 10px <br/>`;
}

function showStyleCustom() {
  const styleCustomContainer = document.getElementById("style-custom__content");
  styleCustomContainer.classList
    .remove("style-custom--hide")
    .add("style-custom--show");
}
