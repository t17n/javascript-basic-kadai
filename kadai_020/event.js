const change = document.getElementById('btn');

change.addEventListener('click', () => {
    const Text = document.getElementById('text');
    setTimeout(() => {
        Text.textContent = 'ボタンをクリックしました';
    }, 2000) ;
});