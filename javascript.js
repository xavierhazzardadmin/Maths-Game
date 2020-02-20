/*If click on the start / reset
    if we are playing
        reload page
    if not playing
        set score 0
        show countdown box
        reduce the time by 1 sec in loops*/
//Time left? Yes=> continue, no=> Game over
//change button to reset
//Generate new Q&A

/*If click on answer box
    if we are playing
    Correct?
        Yes
            Increase score
            Show correct box 1s

            Generate new Q&A
        no
           Show try again box 1s
*/

const startreset = document.getElementById('startreset');
const scorevalue = document.getElementById('scorevalue');
const timeremaining = document.getElementById('timeremaining');
let score;
let playing = false;

const clickstartreset = () => {
  //if we are playing
  if (playing == true) {
    location.reload();
  } else {
    score = 0;
    scorevalue.innerHTML = score;
    timeremaining.style.display = 'block';
  }
};

startreset.addEventListener('click', clickstartreset);
