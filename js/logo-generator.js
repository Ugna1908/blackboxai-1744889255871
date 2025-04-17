// Create a canvas element
const canvas = document.createElement('canvas');
canvas.width = 200;
canvas.height = 80;
const ctx = canvas.getContext('2d');

// Set background
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Add text
ctx.fillStyle = '#1e40af'; // Blue color
ctx.font = 'bold 24px Poppins';
ctx.textAlign = 'center';
ctx.fillText('Gokuldham', canvas.width/2, 35);
ctx.fillStyle = '#f97316'; // Orange color
ctx.font = '20px Poppins';
ctx.fillText('Mahatirth', canvas.width/2, 60);

// Get base64 string
const logoBase64 = canvas.toDataURL('image/png');
