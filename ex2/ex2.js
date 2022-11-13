function numberOneTriangle(value) {
    for (let i = 1; i <= value; i++) {
        for (let j = 1; j <= i; j++) {
            document.write('*')
        }
        document.write('</br>')
    }
}

numberOneTriangle(4)