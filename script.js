'use strict';

const inputedGitHub = document.getElementById('inputedGitHub');
const generationBtn = document.getElementById('generationBtn');
const uploadedImage = document.getElementById('uploadedImage');
const ticketName = document.getElementById('ticketName');
const iconUpload = document.getElementById('iconUpload');
const ticketImage = document.getElementById('ticketImage');
const clickUpload = document.getElementById('clickUpload');
const changeImage = document.getElementById('changeImage');
const removeImage = document.getElementById('removeImage');
const changeRemoveImage = document.getElementById('changeRemoveImage');
const errorUpload = document.getElementById('errorUpload');
const uploadText = document.getElementById('uploadText');
const uploadedImageContainer = document.getElementById('uploadedImageContainer');

clickUpload.addEventListener('change', (event) => {
  let file = URL.createObjectURL(clickUpload.files[0]);
  changeRemoveImage.style.display = 'block';
  iconUpload.style.display = 'none';
  uploadedImage.src = `${file}`;
  uploadedImage.style.display = 'block';
  uploadText.textContent = '';
  ticketImage.src = `${file}`;
  
  const fileSize = event.target.files[0].size;
  const convert_Kb = Math.ceil(fileSize / 1000);
  console.log(convert_Kb)
  if(convert_Kb > 500){
    errorUpload.textContent = `file must not be more than (size: 500KB).`;
    errorUpload.style.color = `hsl(7, 88%, 67%)`;
  }else{
      errorUpload.textContent = `Upload your photo (JPG or PNG, max size: 500KB).`;
      errorUpload.style.color = `white`;
  } 
});

removeImage.addEventListener('click', (event) => {
  changeRemoveImage.style.display = 'none';
  iconUpload.style.display = 'inline';
  uploadedImage.style.display = '';
  uploadText.textContent = 'Drag and drop or click to upload';
});

changeImage.addEventListener('change', (event) => {
  let file = URL.createObjectURL(clickUpload.files[0]);
  changeRemoveImage.style.display = 'block';
  iconUpload.style.display = 'none';
  uploadedImage.src = `${file}`;
  uploadedImage.style.display = 'block';
  uploadText.textContent = '';
});

const inputContainer = document.getElementById('inputContainer');
const ticketContainer = document.getElementById('ticketContainer');
const inputedName = document.getElementById('inputedName');
const inputedEmail = document.getElementById('inputedEmail');
const errorFullName = document.getElementById('errorFullName');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');
const gitHub = document.getElementById('gitHub');
const errorGitHub = document.getElementById('errorGitHub');
const emailCode = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

generationBtn.addEventListener('click', () => {
  if(clickUpload.value === ""){
    errorUpload.style.color = 'hsl(7, 88%, 67%)';
  }else{
    errorUpload.style.color = 'white';
  }
  
  if(fullName.value === ""){
    fullName.style.border = '1px solid hsl(7, 88%, 67%)';
    errorFullName.style.display = 'block';
  }else{
    fullName.style.border = '1px solid white';
    errorFullName.style.display = 'none';
    inputedName.textContent = `${fullName.value}`;
    ticketName.textContent = fullName.value;
    inputedName.style.backgroundImage = `linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))`;
  }
  
  if(email.value === ""){
    errorEmail.style.display = 'block';
    email.style.border = '1px solid hsl(7, 88%, 67%)';
  }else if(email.value.match(emailCode)){
    errorEmail.style.display = 'none';
    inputedEmail.textContent = `${email.value}`;
    email.style.border = '1px solid white';
  }
  
  if(gitHub.value === ""){
    errorGitHub.style.display = 'block';
    gitHub.style.border = '1px solid hsl(7, 88%, 67%)';
  }else{
    errorGitHub.style.display = 'none';
    ticketContainer.style.display = 'block';
    inputContainer.style.display = 'none';
    inputedGitHub.textContent = `${gitHub.value}`;
    gitHub.style.border = '1px solid white';
  }
});
