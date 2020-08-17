"use strict";

const form = document.getElementById("form");
const formArea = document.getElementsByClassName("form-area");

const appendErrorMessage = (element, message) => {
  const div = document.createElement("div");
  div.textContent = message;
  div.className = "error-message";
  element.appendChild(div);
};

const validationName = (name) => {
  if (name === "") {
    appendErrorMessage(formArea[0], "名前を入力してください。");
    return false;
  } else if (name.lenght > 250) {
    appendErrorMessage(formArea[0], "名前は250字以下で入力してください。");
    return false;
  } else {
    return true;
  }
};

const validationEmail = (email) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email === "") {
    appendErrorMessage(formArea[1], "メールアドレスを入力してください。");
    return false;
  } else if (email.match(regex) === null) {
    appendErrorMessage(formArea[1], "正しいメールアドレスを入力してください。");
    return false;
  } else {
    return true;
  }
};

const validationGender = (gender) => {
  const initGender = ["男性", "女性", "その他", "無回答"];
  if (gender === "") {
    appendErrorMessage(formArea[2], "性別を選択してください。");
    return false;
  } else if (initGender.indexOf(gender) === -1) {
    appendErrorMessage(formArea[2], "正しくない値が入力されています。");
    return false;
  } else {
    return true;
  }
};

const validationAge = (age) => {
  const initAge = ["20歳未満", "20-29歳", "30-39歳", "40-49歳", "50-59歳", "60-69歳", "70-79歳", "80歳以上"];
  if (age === "") {
    appendErrorMessage(formArea[3], "年齢を選択してください。");
    return false;
  } else if (initAge.indexOf(age) === -1) {
    appendErrorMessage(formArea[3], "正しくない値が入力されています。");
    return false;
  } else {
    return true;
  }
};

const validationContact = (contact) => {
  if (contact === "") {
    appendErrorMessage(formArea[4], "お問い合わせ内容を入力してください。");
    return false;
  } else if (contact.lenght > 500) {
    appendErrorMessage(formArea[4], "お問い合わせ内容は500字以下で入力してください。");
    return false;
  } else {
    return true;
  }
};

const removeErrorMessage = () => {
  const errorMessages = document.getElementsByClassName("error-message");
  if (errorMessages.length !== 0) {
    for (let i = errorMessages.length - 1; 0 <= i; i--) {
      errorMessages[i].remove();
    }
  }
};

const onSubmit = (event) => {
  removeErrorMessage();
  const nameChecked = validationName(form.name.value);
  const emailChecked = validationEmail(form.email.value);
  const genderChecked = validationGender(form.gender.value);
  const ageChecked = validationAge(form.age.value);
  const contactChecked = validationContact(form.contact.value);
  if (nameChecked && emailChecked && genderChecked && ageChecked && contactChecked) {
    alert("送信しました。");
  } else {
    alert("エラーが発生しました。");
  }
  event.preventDefault();
};

form.addEventListener("submit", onSubmit);
