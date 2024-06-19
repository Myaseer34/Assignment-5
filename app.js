// Modify H1 Text Color
document.querySelector('h1').style.color = 'blue';

// Alter Paragraph Text
document.querySelector('p').innerHTML = 'This is the updated text for the first paragraph.';

// Adjust Image Border Color
document.getElementById('b').style.borderColor = 'red';
document.getElementById('b').style.borderStyle = 'solid'; // Make sure the border style is solid to see the color change

// Change Page Background Color
document.body.style.backgroundColor = 'black';
document.body.style.color = '#fff';

// Bonus: Change the color of all paragraph texts
let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => p.style.color = 'green');
