import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './config.js';
import { datosRoutes, productosRoutes, registerRoutes, loginRoutes, updeteRoutes} from './routes/index.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('src'));

app.use('/', datosRoutes);
app.use('/registro/insercion', registerRoutes)
app.use('/login/datos', loginRoutes);
app.use('/productos', productosRoutes);
app.use('/update/delete', updeteRoutes);

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('src/pages/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('src/pages/register.html'));
});

app.get('/user', (req, res) => {
    res.sendFile(path.resolve('src/pages/user.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.resolve('src/pages/index.html'));
});

app.get('/header', (req, res) => {
    res.sendFile(path.resolve('src/pages/header.html'));
});

app.get('/sidebar', (req, res) => {
    res.sendFile(path.resolve('src/pages/sidebar.html'));
});

app.get('/us', (req, res) => {
    res.sendFile(path.resolve('src/pages/us.html'));
});

app.listen(PORT, () => {
    console.log("Servidor corriendo", PORT);
});