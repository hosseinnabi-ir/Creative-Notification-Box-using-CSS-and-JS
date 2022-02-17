let hide = alertClass => {
    let alert = document.querySelector(`.${alertClass}`);
    alert.style.opacity = '0';
    alert.style.pointerEvents = 'none';
}