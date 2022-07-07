function killElement(query, message){
    let items = [...document.querySelectorAll(query)]
    if (items.length > 0) {
        items.map((item) => {
            item.remove()
            console.log(message, 'Learn more at https://nochatbot.com')
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
    
    // Freshchat
    killElement('#fc_widget', 'Freshchat chat popup blocked.')
    
    // Zendesk
    killElement('#web-messenger-container', 'Zendesk chat popup blocked.')
    
    // Birdeye
    killElement('#bewebchat', 'Birdeye chat popup blocked.')
    
    // Qualified
    killElement('#q-messenger-frame', 'Qualified chat popup blocked.')
    
    // ada
    killElement('#ada-button-frame', 'ada chat popup blocked.')
    
    // podium
    killElement('#podium-bubble', 'Podium chat popup blocked.')
    killElement('#podium-website-widget', 'Podium chat popup blocked.')

    // mobile monkey
    killElement('#mm-chat-button', 'MobileMonkey chat popup blocked.')
    
}

block()

setInterval(() => {
    block()
}, 100)
