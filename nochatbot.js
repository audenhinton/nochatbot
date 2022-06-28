function killElement(query, message){
    let items = [...document.querySelectorAll(query)]
    if (items.length > 0) {
        items.map((item) => {
            item.remove()
            console.log(message)
        })
    }
}

function block() {

    // block Drift chat
    killElement('#drift-frame-controller', 'Drift chat popup blocked.')

    // block Intercom chat
    killElement('#intercom-frame', 'Intercom chat popup blocked.')
    
    // block Zoho Sales IQ
    killElement('[data-id=zsalesiq]', 'Zoho Sales IQ chat popup blocked.')
    
}

block()

setInterval(() => {
    block()
}, 100)
