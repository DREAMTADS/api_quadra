import app from './src/app.js';

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Servidor escutando em http://192.168.1.16:${port}`);
});