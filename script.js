document.getElementById('subscribeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Запобігаємо стандартній поведінці форми

    const formData = new FormData(this); // Отримуємо дані з форми
    fetch('save_data.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message); // Показуємо повідомлення
                this.reset(); // Очищаємо форму
            } else {
                alert('Виникла помилка. Спробуйте знову.');
            }
        })
        .catch(() => alert('Помилка зв\'язку із сервером.'));
});
