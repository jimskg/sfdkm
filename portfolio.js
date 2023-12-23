let certObject = [
  {image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000BEqdw&oid=00DF0000000gZsu&lastMod=1692347488000", name:"Salesforce Certified Marketing Cloud Account Engagement Specialist", date:"October 6, 2023"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000BEqgH&oid=00DF0000000gZsu&lastMod=1693557495000", name:"Salesforce Certified AI Associate", date:"September 30, 2023"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000B7y1t&oid=00DF0000000gZsu&lastMod=1657181928000", name:"Salesforce Certified Business Analyst", date:"March 11, 2023"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k000008zZI2&oid=00DF0000000gZsu&lastMod=1662618561000", name:"Salesforce Certified Associate", date:"January 17, 2023"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtb&oid=00DF0000000gZsu&lastMod=1617268107000", name:"Salesforce Certified CPQ Specialist", date:"November 25, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu1&oid=00DF0000000gZsu&lastMod=1617267944000", name:"Salesforce Certified Advanced Administrator", date:"November 1, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu6&oid=00DF0000000gZsu&lastMod=1617274648000", name:"Salesforce Certified Tableau CRM and Einstein Discovery Consultant", date:"October 22, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu2&oid=00DF0000000gZsu&lastMod=1617268174000", name:"Salesforce Certified System Architect", date:"October 15, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000BB2nR&oid=00DF0000000gZsu&lastMod=1638349485000", name:"Salesforce Certified Development Lifecycle and Deployment Architect", date:"October 15, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000BB2nb&oid=00DF0000000gZsu&lastMod=1638349650000", name:"Salesforce Certified Identity and Access Management Architect", date:"October 13, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5MtX&oid=00DF0000000gZsu&lastMod=1617267315000", name:"Salesforce Certified JavaScript Developer I", date:"October 1, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000BB2ng&oid=00DF0000000gZsu&lastMod=1638349737000", name:"Salesforce Certified Integration Architect", date:"September 29, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mth&oid=00DF0000000gZsu&lastMod=1617268556000", name:"Salesforce Certified Platform Developer II", date:"September 22, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mty&oid=00DF0000000gZsu&lastMod=1617268288000", name:"Salesforce Certified Application Architect", date:"September 3, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000BB2nM&oid=00DF0000000gZsu&lastMod=1638349236000", name:"Salesforce Certified Data Architect", date:"September 3, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000BB2nq&oid=00DF0000000gZsu&lastMod=1638349821000", name:"Salesforce Certified Sharing and Visibility Architect", date:"August 13, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtm&oid=00DF0000000gZsu&lastMod=1617268326000", name:"Salesforce Certified Sales Cloud Consultant", date:"July 15, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu4&oid=00DF0000000gZsu&lastMod=1617275568000", name:"Salesforce Certified Experience Cloud Consultant", date:"February 11,2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mte&oid=00DF0000000gZsu&lastMod=1617268211000", name:"Salesforce Certified Field Service Consultant", date:"February 4, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtn&oid=00DF0000000gZsu&lastMod=1617268355000", name:"Salesforce Certified Service Cloud Consultant", date:"January 28, 2020"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtl&oid=00DF0000000gZsu&lastMod=1617268490000", name:"Salesforce Certified Platform App Builder", date:"July 23, 2019"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu5&oid=00DF0000000gZsu&lastMod=1617267801000", name:"Salesforce Certified Administrator", date:"May 7, 2019"},
{image:"https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtz&oid=00DF0000000gZsu&lastMod=1617268528000", name:"Salesforce Certified Platform Developer I", date:"April 9, 2019"}
];

const skills = [
  { name: 'Salesforce Administration', width: 90 },
  { name: 'Apex Development', width: 95 },
  { name: 'Salesforce Integration', width: 75 },
  { name: 'Salesforce Solutions Architect', width: 70 },
  { name: 'Lightning Web Components / Aura Components', width: 80 },
  { name: 'JavaScript Development', width: 85 },
  { name: 'CSS', width: 75 },
  // Add more skills as needed
];

const itemsPerPage = 4;
let currentPage = 1;
var myAge = (function() {
  let dob = new Date("07/26/1993");  
  let month_diff = Date.now() - dob.getTime();  
  let age_dt = new Date(month_diff);   
  let year = age_dt.getUTCFullYear();  
  let age = Math.abs(year - 1970);
  return age;
})();

function setTexts(){
  document.getElementById('loading-text').innerHTML = 'Thinking...';
  document.getElementById('aboutTabId').innerHTML = 'About';
  document.getElementById('skillsTabId').innerHTML = 'Skills';
  document.getElementById('workTabId').innerHTML = 'Work';
  document.getElementById('contactTabId').innerHTML = 'Contact';
  // document.getElementById('blogTabId').innerHTML = 'Blog';
  document.getElementById('sub-title-text').innerHTML = 'Salesforce <br> Full-Stack Developer';
  document.getElementById('my-description-id').innerHTML = 'Full-Stack Developer / Salesforce Expert';
  document.getElementById('my-about-id').innerHTML = 'Greetings! I\'m Dimitris, a '+myAge+'-year-old professional residing in the beautiful city of Thessaloniki, Greece. My academic journey began with a Bachelor\'s degree in Mathematics from Aristotle University of Thessaloniki, followed by a dual master\'s pursuit in Economics and Applied Informatics at the University of Macedonia. I further solidified my expertise by earning a Ph.D. in Econometrics, exploring the intersection of mathematics, economics, and applied informatics. In the dynamic realm of Salesforce, I\'ve been a proud member of the Deloitte family for the past 5 years. As a Salesforce Developer/Consultant, my passion for innovation and problem-solving has driven me to achieve <a class="cert-a" href=\'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=rTEVstP1E2NUYZmfisX5o8phIkPqhipcbVdrq13bpMO/gJhy1C/9mEo71jDiuA+W\' target="_blank">'+certObject.length+'</a> Salesforce certifications. Throughout my professional journey, I have cultivated expertise in a wide array of Salesforce domains, demonstrating my proficiency in handling diverse aspects of the Salesforce ecosystem. My work spans across key domains such as Sales Cloud, Service Cloud, Field Service, CPQ (Configure, Price, Quote), Communities, and more. This extensive exposure reflects my commitment to mastering various facets of Salesforce technology, enabling me to contribute effectively to a broad spectrum of projects and challenges within the platform.';
  // document.getElementById('show-hide-cerification-skills-button-id').innerHTML = 'Hide Certifications / Skills';
  document.getElementById('my-skills-id').innerHTML = 'With a robust foundation in Salesforce technologies, I have achieved and currently hold <a class="cert-a" href=\'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=rTEVstP1E2NUYZmfisX5o8phIkPqhipcbVdrq13bpMO/gJhy1C/9mEo71jDiuA+W\' target="_blank">'+certObject.length+'</a> certifications, showcasing my commitment to continuous learning and mastery of the Salesforce ecosystem. My expertise extends across a spectrum of Salesforce domains, encompassing everything from custom development, automation, and integration to data architecture and system administration.';
  document.getElementById('nameId').placeholder = 'Name';
  document.getElementById('emailId').placeholder = 'Email';
  document.getElementById('subjectId').placeholder = 'Subject';
  document.getElementById('messageId').placeholder = 'Message';
  document.getElementById('contact-text').innerHTML = 'I\'m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don\'t hesitate to use the form.';
  
}

function createSkillBars() {
  const skillBarContainer = document.getElementById('skill-bar-container');

  skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill');

    const skillNameDiv = document.createElement('div');
    skillNameDiv.classList.add('skill-name');
    skillNameDiv.textContent = skill.name;

    const skillBarContainerDiv = document.createElement('div');
    skillBarContainerDiv.classList.add('skill-bar-container');

    const skillBarValueDiv = document.createElement('div');
    skillBarValueDiv.classList.add('skill-bar-value');
    skillBarValueDiv.style.width = `${skill.width}%`;
    
    const percentageDiv = document.createElement('div');
    percentageDiv.classList.add('skill-percentage');
    percentageDiv.textContent = `${skill.width}%`;

    skillBarContainerDiv.appendChild(skillBarValueDiv);
    skillBarContainerDiv.appendChild(percentageDiv);
    skillDiv.appendChild(skillNameDiv);
    skillDiv.appendChild(skillBarContainerDiv);
    skillBarContainer.appendChild(skillDiv);
  });
}

function setCertifications(page){
  const table = document.getElementById('table-certifications-id').getElementsByTagName('tbody')[0];
  table.innerHTML = '';
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      
  for (let i = startIndex; i < endIndex && i < certObject.length; i++) {
    const certification = certObject[i];
    const row = table.insertRow();
    const imageCell = row.insertCell(0);
    const nameCell = row.insertCell(1);
    const dateCell = row.insertCell(2);
    imageCell.innerHTML = `<img src="${certification.image}" alt="Cert Image" class="cert-logo">`;
    nameCell.textContent = certification.name;
    dateCell.textContent = certification.date;
    nameCell.classList.add('cert-table-row'); 
    dateCell.classList.add('cert-table-row'); 
  }
}

function setupPagination() {
  const pageCount = Math.ceil(certObject.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    li.addEventListener('click', () => {
      currentPage = i;
      setCertifications(currentPage);
      updatePaginationUI();
    });
    pagination.appendChild(li);
  }
}

function updatePaginationUI() {
  const pages = document.querySelectorAll('.pagination li');

  pages.forEach((page, index) => {
    if (index + 1 === currentPage) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
}

function toggleAccordion(panelId) {
  const panel = document.getElementById(panelId);
  // let showHideCertButton = document.getElementById('show-hide-cerification-skills-button-id');
  

  if (panel.style.display === 'none' || panel.style.display === ''){
    panel.style.display = 'flex';
    // showHideCertButton.innerHTML = 'Hide Certifications / Skills';
  } else {
    panel.style.display = 'none';
    // showHideCertButton.innerHTML = 'Show Certifications / Skills';
  }
}

// window.addEventListener("load", function () {
//   console.log("All assets are dimtiris");
// });

$(document).ready(function () {
  let url = window.location.href;
  if (url.includes("#thankyou")){
    handleActiveTab('thankyouTabId');
  }

  console.log("jQuery dimitris");
  setTexts();
  setCertifications(currentPage);
  setupPagination();
  updatePaginationUI();
  createSkillBars();
});


$(document).ready(function() {
  $("#skillsTabId").click(function(event) {
    handleActiveTab(event);
  });
});
$(document).ready(function() {
  $("#aboutTabId").click(function(event) {
    handleActiveTab(event);
  });
});
$(document).ready(function() {
  $("#workTabId").click(function(event) {
    handleActiveTab(event);
  });
});
$(document).ready(function() {
  $("#contactTabId").click(function(event) {
    handleActiveTab(event);
  });
});
$(document).ready(function() {
  $("#blogTabId").click(function(event) {
    handleActiveTab(event);
  });
});
$(document).ready(function() {
  $("#homeTabId").click(function(event) {
    handleActiveTab(event.target.parentElement.id);
  });
});
$(document).ready(function() {
  $("#contact-button-id").click(function(event) {
    handleActiveTab('contactTabId');
  });
});

function handleActiveTab(event){
  let tabId
  $("#navigationId a").removeClass("active");
  $("#pageId>div").addClass("tab-hidden");
  if (event.target != undefined){
    tabId = event.target.id;
  } else {
    tabId = event;
  }
  $("#loadingTabId").removeClass("tab-hidden");

  console.log("#"+'page'+tabId);
  setTimeout(function(){
    $("#navigationId a").removeClass("active");
    $("#pageId>div").addClass("tab-hidden");
    $("#loadingTabId").addClass("tab-hidden");
    $("#"+tabId).addClass("active");
    $("#"+'page'+tabId).removeClass("tab-hidden");
  }, 2000);

}
