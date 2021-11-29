function sendMessage(event, name, phone, tree) {
    event.preventDefault();

    const apiKey = "1910503466:AAF-N9eC-o87eN8TINtKKP1WQb3_B4uoi-w";
    const chatId = "-1001588885379";

    const formName = document.getElementById(name).value;
    const formPhone = document.getElementById(phone).value;
    let text
    if (tree) {
        text = `Ім'я - ${formName}, телефон - ${formPhone}, ялинка - ${tree}`
    } else {
        text = `Ім'я - ${formName}, телефон - ${formPhone}`
    }
    async function postData() {
        await fetch(`https://api.telegram.org/bot${apiKey}/sendMessage`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "chat_id": chatId,
                "text": text,
            })
        });
    };

    postData().then(() => {
        document.location.href = "/redirect.html"
    });
}