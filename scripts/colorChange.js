setInterval(() => {
    const actualColor = window.getComputedStyle(document.querySelector("main"), null).getPropertyValue('border-color');
    document.documentElement.style.setProperty('--text-hover', actualColor);
}, 500)
