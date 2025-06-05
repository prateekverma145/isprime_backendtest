const express = require('express');
const app = express();
const port = 3000;

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// API Endpoint: /isprime?number=7
app.get('/isprime', (req, res) => {
  const number = parseInt(req.query.number, 10);

  if (isNaN(number)) {
    return res.status(400).json({ error: 'Please provide a valid number.' });
  }

  const result = isPrime(number);
  res.json({ number, isPrime: result });
});

app.listen(port, () => {
  console.log(`Prime check API running at http://localhost:${port}`);
});
