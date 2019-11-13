// ----- Footer-----
const informSection = document.querySelector('.footer-section__about');
const switchGroup = informSection.querySelectorAll('.btn-toggle-group  input');
const wrapperText = informSection.querySelectorAll('.off-text');

function toggleText() {
    if (switchGroup[0].checked == true) {
        wrapperText[0].classList.add('include-text');
    }
    for (let i = 0; i < switchGroup.length; i++) {       
        switchGroup[i].addEventListener('click', function () {
             switchGroup.forEach(function (item){
                item.removeAttribute('checked');  
              });
              wrapperText.forEach(function(a){
                  a.classList.remove('include-text');
              });
            switchGroup[i].setAttribute('checked', true);
            if (switchGroup[i].checked == true) {
                wrapperText[i].classList.add('include-text');
            }
        });
    }
}
toggleText();
