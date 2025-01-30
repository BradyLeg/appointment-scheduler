import express from 'express';

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const appointment = [];

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/appointmentform.html`);
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    appointment.push(req.body);
    res.send(`<h1>Confirmed! Thank you for your order ${req.body.fname}!</h1>`)
});

app.get('/admin/appointment', (req, res) => {
    res.send(appointment);
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});