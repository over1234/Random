const $sus = document.getElementById('sus');
const $fail = document.getElementById('fail');
var sus_audio = new Audio('audio.mp3');
var fail_audio = new Audio('audio2.mp3');
var isSusses = false;
var isFail = true;

function randomNum(min, max) { 
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min; 
    return randNum; 
}

function RandomService() {
    var n = prompt('확률을 입력해주세요. (정수만 입력)', '');
    var random = randomNum(1, 100);
    if (1 <= random && random <= n) {
        //만약 30%면 1~100 중 1~30까지의 숫자를 뽑을 시 당첨임.
        isSusses = true;
        isFail = false;
    }

    if (isSusses) {
        $sus.style.backgroundColor = '#DC143C';
        sus_audio.play();
        alert('성공이라고...? 말도 안 돼!!');
    }
    else {
        $fail.style.backgroundColor = '#DC143C';
        fail_audio.play();
        alert('그 무지한 머리를 터트려주마!');
    }
}

