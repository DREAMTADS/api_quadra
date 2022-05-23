import app from './src/app.js';

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Servidor escutando em http://192.168.159.117:${port}`);
});