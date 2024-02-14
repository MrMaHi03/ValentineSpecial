let noCount = 0;
let yesButtonSize = 48;

let sarcasticTexts = [
  "Think Again Pleaseee",
  "You Only Deserve Meee",
  "But... I'm Really Cute Though",
  "Rejecting Me is Bad Karma",
  "Just Imagine the Awkwardness of Saying No",
  "Imagine the Regret You'll Feel Tomorrow",
  "But My Mom Already Thinks We're a Perfect Match",
  "I'll Let You Win Arguments",
  "But... My Cat Already Likes You",
  "But Who Will Make You Laugh Like I Do?",
  "I Promise I'm Not That Bad",
  "Your Dog Will Like Me, I Swear",
  "But Think of All the Fun We Could Have",
  "I'll Stop Bothering You, Maybe",
  "I Promise Not to Embarrass You Too Much",
  "Don't Let My Charm Go to Waste",
  "But Who Else Will Send You Random Memes?",
  "I'll Make Sure Your Birthday is Extra Special",
  "But I've Already Picked Out Our Couple's Halloween Costumes",
  "I'll Only Talk About Myself 80% of the Time",
  "But Think of the Adorable Instagram Posts",
  "I'll Let You Choose the Movie Sometimes",
  "But You'll Miss Out on My Delicious Cooking",
  "I'll Only Sing in the Shower When You're Not Home",
  "But... I Already Told My Friends About You",
  "I Promise Not to Be Too Clingy",
];


function handleNo() {
  noCount++;
  increaseYesSize();
  let sarcasticText = sarcasticTexts[noCount % sarcasticTexts.length];
  document.getElementById("valentine-question").innerText = sarcasticText;
}

function increaseYesSize() {
  let viewportWidth = window.innerWidth;
  let yesButton = document.getElementById("yes-button"); 
  if (viewportWidth <= 768) { 
    yesButtonSize += 100;
    yesButton.style.height = yesButtonSize + "px";
    yesButton.style.width = (yesButtonSize + 10) + "px";
    yesButton.style.fontSize = (yesButtonSize / 6) + "px";
  } else if (viewportWidth <= 1024) {
    yesButtonSize += 120;
    yesButton.style.height = yesButtonSize + "px";
    yesButton.style.width = (yesButtonSize + 20) + "px";
    yesButton.style.fontSize = (yesButtonSize / 5) + "px";
  } else {
    yesButtonSize += 48;
    yesButton.style.height = yesButtonSize + "px";
    yesButton.style.width = (yesButtonSize + 90) + "px";
    yesButton.style.fontSize = (yesButtonSize / 4) + "px";
  }
}




function redirectToAcceptedPage() {
  window.location.href = " accepted.html";
}