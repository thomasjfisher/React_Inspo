

const Messages = () => {
    let happyMessage = [ 
        "Your limitation — it's only your imagination", 
        "Push yourself, because no one else will",
        "Great things never come from comfort zones",                 
        "The harder you work,the greater you'll feel",                 
        "Dream it. Wish it. Code it.",
        "CAN WE CODE IT? YES WE CAN!",
        "Ahhhh, code it!",
        "Yes, you SHOULD use the masterball"];
                    
    var randMessage = happyMessage[Math.floor(Math.random() * happyMessage.length)];
                    
    return randMessage

}

export default Messages