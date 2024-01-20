let screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

let mainImg = document.getElementById("main-image");
const smallImg =
  "https://static.wixstatic.com/media/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg/v1/fill/w_619,h_420,al_c,q_80,enc_auto/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg";
const mediumImg =
  "https://static.wixstatic.com/media/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg/v1/fill/w_1822,h_420,al_c,q_85,enc_auto/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg";
const largeImg =
  "https://static.wixstatic.com/media/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg/v1/fill/w_1920,h_166,al_c,q_80,enc_auto/93e8a3_9fa23196ddf6427a9da574e2b31a13d2~mv2.jpg";


let coursesDiv = document.getElementById("courses-div")




if (screenWidth < 600) {
  mainImg.src = smallImg;
  mainImg.style.height = " 317px";
} else if (screenWidth < 2300) {
  mainImg.src = mediumImg;
  mainImg.style.height = "352px";
} else {
  mainImg.src = largeImg;
}

const coursesArray = [
  {
    img: "https://static.wixstatic.com/media/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg",
    name: "iOS Development"
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg",
    name: "React"
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg",
    name: "Intro to Python"
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg",
    name: "Advanced Python"
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg",
    name: "Advanced Cybersecurity Course"
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg",
    name: "ToT - Training of Trainers"
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg",
    name: "Blockchain"
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg",
    name: "DevOps"
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg",
    name: "Information Security Governance"
  },
];

let courses = coursesArray.map((course)=>{
  return `<div class="course">
  <img
    src=${course.img}
  />
  <div class="course-info-wrapper">

    <div class="course-name-wrapper">
      <h3>${course.name}</h3>
      <p>რეგისტრაცია დასრულებულია</p>
    </div>
    <div class="course-details-wrapper">
      <svg preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true"><defs><style>#comp-lnoncoa62__12a0b52d-d2f4-498f-8668-ef4342a659a0 svg [data-color="1"] {fill: #00AEEF;}</style></defs>
        <g>
          <path fill="#00adee" d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z" data-color="1"></path>
        </g>
      </svg>
      <h3>კურსის დეტალები</h3>
    </div>
  </div>
</div> `
}).join(" ")

coursesDiv.innerHTML = courses


{/* <div class="course">
            <img
              src="https://static.wixstatic.com/media/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg/v1/fill/w_300,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg"
            />
            <div class="course-info-wrapper">

              <div class="course-name-wrapper">
                <h3>iOS Development</h3>
                <p>რეგისტრაცია დასრულებულია</p>
              </div>
              <div class="course-details-wrapper">
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true"><defs><style>#comp-lnoncoa62__12a0b52d-d2f4-498f-8668-ef4342a659a0 svg [data-color="1"] {fill: #00AEEF;}</style></defs>
                  <g>
                    <path fill="#00adee" d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z" data-color="1"></path>
                  </g>
                </svg>
                <h3>კურსის დეტალები</h3>
              </div>
            </div>
          </div> */}