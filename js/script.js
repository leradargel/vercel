
document.getElementById('telegramForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const botToken = "7972974193:AAFEBmnEOiOs3dyDNxJZFntDVvLVKVNzQxQ"; // Укажите токен вашего бота
    const chatId = "832683509"; // Укажите ваш Chat ID

    const formData = new FormData();
    formData.append('chat_id', chatId);

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const file = document.getElementById('file').files[0];

    const text = `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`;
    formData.append('caption', text);

    if (file) {
        formData.append('document', file);
    } else {
        formData.append('text', text);
    }

    const url = file
        ? `https://api.telegram.org/bot${botToken}/sendDocument`
        : `https://api.telegram.org/bot${botToken}/sendMessage`;

    const notification = document.getElementById('callback_notification');

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            showNotification('Спасибо! Скоро я с Вами свяжусь ❤️', 'success');
            document.getElementById('telegramForm').reset();
        } else {
            showNotification('Ошибка отправки сообщения.', 'error');
        }
    } catch (error) {
        console.error('Ошибка:', error);
        showNotification('Ошибка при отправке.', 'error');
    }
});

function showNotification(message, type) {
    const notification = document.getElementById('callback_notification');
    notification.textContent = message;
    notification.className = type;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);

}
