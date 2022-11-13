let submitForm = document.getElementById('result');

let form = document.getElementById('form');


submitForm.addEventListener('click', (e) => {
    e.preventDefault();
    let a = Number(form.a.value);
    let b = Number(form.b.value);
    let result = 0;

    if (isNaN(a) || isNaN(b)) {
        let notNumber = document.createElement('h3');
        notNumber.innerText = 'a và b phải nhập số';
        form.appendChild(notNumber);
    } else if (form.a.value == '' || form.b.value == '') {
        let notEnter = document.createElement('h3');
        notEnter.innerText = 'Phải nhập đủ cả a và b';
        form.appendChild(notEnter);
    } else {
        let i;
        if (a < 2) {
            i = 2
        } else i = a + 1;
        for (i; i < b; i++) {
            let check = true
            for (let j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    check = false;
                }
            }
            if (check) {
                result = result + i;
            }
        }

        let haveResult = document.createElement('h3');
        haveResult.innerText = `${result}`;
        form.appendChild(haveResult)
    }

})
