const emailListElement = document.getElementById('email-list');
const emailList = emailListElement.querySelectorAll('a');

const emailDisplayHeader = document.getElementById('email-display-header');
const emailDisplaySender = document.getElementById('email-display-sender');
const emailDisplayCC = document.getElementById('email-display-cc');
const emailDisplaySubject = document.getElementById('email-display-subject')
const emailDisplayContent = document.getElementById('email-display-content');

function changeEmailDisplay(email) {
    let info = email.querySelectorAll('p');
    let emailID = +email.id
    switch (emailID) {
        case 1: {
            emailDisplaySender.innerHTML = 'Flights4Free@aol.com';
            emailDisplayCC.innerHTML = '';
            break;
        }
        case 2: {
            emailDisplaySender.innerHTML = 'Donations4All@gmail.com';
            emailDisplayCC.innerHTML = '';
            break;
        }
        case 3: {
            emailDisplaySender.innerHTML = 'ArmyEnlisters@military.com';
            emailDisplayCC.innerHTML = 'AllBranches@military.com';
            break;
        }
        case 4: {
            emailDisplaySender.innerHTML = 'lostnfounders@yahoo.com';
            emailDisplayCC.innerHTML = '';
            break;
        }
        case 5: {
            emailDisplaySender.innerHTML = 'support@yahoo.com';
            emailDisplayCC.innerHTML = 'services@yahoo.com';
            break;
        }
        case 6: {
            emailDisplaySender.innerHTML = 'support@google.com';
            emailDisplayCC.innerHTML = 'services@google.com';
            break;
        }
        case 7: {
            emailDisplaySender.innerHTML = 'support@EmailInterface.net';
            emailDisplayCC.innerHTML = 'services@EmailInterface.net';
            break;
        }
    }

    emailDisplayHeader.innerHTML = info[0].innerHTML;
    emailDisplaySubject.innerHTML = info[1].innerHTML;
    emailDisplayContent.innerHTML = info[2].innerHTML;
}

function loadEmailEventListeners() {
    for (const email of emailList) {
        email.addEventListener('click', (e) => {
            let element = e.target;

            while (element.nodeName !== "A") {
                element = element.parentElement
            }

            changeEmailDisplay(element)
        })
    }
}

loadEmailEventListeners();

const buttonList = document.getElementsByClassName('errorButton');
for (const items of buttonList) {
    const popover = new bootstrap.Popover(items, {
        trigger: 'focus',
        animation: true
      })
};