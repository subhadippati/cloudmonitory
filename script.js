function generateRandomMetrics() {
    let cpuA = (Math.random() * 100).toFixed(2);
    let cpuB = (Math.random() * 100).toFixed(2);
    let memoryA = (Math.random() * 100).toFixed(2);
    let memoryB = (Math.random() * 100).toFixed(2);
    let storageA = (Math.random() * 100).toFixed(2);
    let storageB = (Math.random() * 100).toFixed(2);

    document.getElementById('cpu-a').innerText = cpuA + '%';
    document.getElementById('cpu-b').innerText = cpuB + '%';
    document.getElementById('memory-a').innerText = memoryA + '%';
    document.getElementById('memory-b').innerText = memoryB + '%';
    document.getElementById('storage-a').innerText = storageA + '%';
    document.getElementById('storage-b').innerText = storageB + '%';

    document.getElementById('cpu-bar-a').style.width = cpuA + '%';
    document.getElementById('cpu-bar-b').style.width = cpuB + '%';
    document.getElementById('memory-bar-a').style.width = memoryA + '%';
    document.getElementById('memory-bar-b').style.width = memoryB + '%';
    document.getElementById('storage-bar-a').style.width = storageA + '%';
    document.getElementById('storage-bar-b').style.width = storageB + '%';

    updateBarColor('cpu-bar-a', cpuA);
    updateBarColor('cpu-bar-b', cpuB);
    updateBarColor('memory-bar-a', memoryA);
    updateBarColor('memory-bar-b', memoryB);
    updateBarColor('storage-bar-a', storageA);
    updateBarColor('storage-bar-b', storageB);
}

function updateBarColor(id, value) {
    let bar = document.getElementById(id);
    if (value < 40) {
        bar.style.background = "#4caf50"; 
    } else if (value < 75) {
        bar.style.background = "#ffeb3b"; 
    } else {
        bar.style.background = "#f44336"; 
    }
}
setInterval(generateRandomMetrics, 3000);
generateRandomMetrics();
