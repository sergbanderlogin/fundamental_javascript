console.log("=== Work With CSS ===");
window.getComputedStyle(document.documentElement).getPropertyValue('--box-bg');   // 'black'
window.getComputedStyle(document.body).getPropertyValue('--box-bg')   // 'black'
document.body.style.getPropertyValue('--box-bg')    // ""
document.body.style.setProperty('--box-bg', 'red')
document.querySelector('.box').style.setProperty('--box-bg', 'green');