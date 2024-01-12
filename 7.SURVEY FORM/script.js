const wrapper = document.querySelector(".wrapper");
const wrapperInput = document.querySelector(".wrapper-input");
const greenBgBtn = document.querySelector(".green-bg-btn");
const greenBg = document.querySelector(".green-bg");
const form = document.querySelector(".form-wrapper");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const dateOfBirth = document.querySelector("#dateofbirth");
const country_list = document.querySelector("#country-list");
const email = document.querySelector("#email");
const mobileNumber = document.querySelector("#mobilenumber");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const gender = document.querySelector('input[name="gender"]:checked');

  const html = `<div class="wrapper-output">
  <div class="close">
    <i class="fa-solid fa-x"></i>
  </div>
  <div class="outputs">
    <div class="output output1">
      <p class="header-text">FirstName:</p>
      <p class="output-text">${firstName.value}</p>
    </div>
    <div class="output output2">
      <p class="header-text">LastName:</p>
      <p class="output-text">${lastName.value}</p>
    </div>
    <div class="output output3">
      <p class="header-text">Date of Birth:</p>
      <p class="output-text">${dateOfBirth.value}</p>
    </div>
    <div class="output output4">
      <p class="header-text">Country:</p>
      <p class="output-text">${country_list.value}</p>
    </div>
    <div class="output output5">
      <p class="header-text">Gender:</p>
      <p class="output-text">${gender.value}</p>
    </div>
    <div class="output output6">
      <p class="header-text">Email:</p>
      <p class="output-text">${email.value}</p>
    </div>
    <div class="output output7">
      <p class="header-text">Mobile Number:</p>
      <p class="output-text">${mobileNumber.value}</p>
    </div>
  </div>
</div>`;

  wrapper.insertAdjacentHTML("beforeend", html);
  wrapper.classList.add("active");
  
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".wrapper-output").remove();
    wrapper.classList.remove("active");
    form.reset();
  });
});

greenBgBtn.addEventListener("click", () => {
  wrapperInput.classList.toggle("change");
});
