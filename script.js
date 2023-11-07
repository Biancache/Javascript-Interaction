function generate(name) {
    
    const messages = [
        `Fortune awaits you today, ${name}!`,
        `${name}, your ideal outfit is a classic blue jeans with white sneakers.`,
        `It's a perfect day for a new adventure, ${name}!`,
        `The stars say that ${name} should avoid making big decisions today.`,
        `Today is a day for ${name} to learn something new!`, `Today is another day full of hope, ${name}.`, 
        `Today is your lucky day, ${name}`, `Go can get a bagel, ${name}!`, `${name}, No Starbucks today.`, `Try some tea, ${name}`,
    ];

    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const outputElement = document.getElementById('output');
    outputElement.textContent = randomMessage;

    restyle(outputElement);
}

function restyle(element) {
    
    const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    
    const fontSize = `${Math.random() * (24 - 12) + 12}px`; 

    const padding = `${Math.random() * (20 - 5) + 5}px`; 

    
    element.style.color = color;
    element.style.fontSize = fontSize;
    element.style.padding = padding;
}
