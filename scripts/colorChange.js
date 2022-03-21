setInterval(() => {
    const actualColor = window.getComputedStyle(document.querySelector("main"), null).getPropertyValue('border-color');
    document.documentElement.style.setProperty('--text-hover', actualColor);
    document.documentElement.style.setProperty('--shadow-color', actualColor);
}, 500)
