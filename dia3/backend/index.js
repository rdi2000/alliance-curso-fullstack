import express, { Router } from 'express';
import cors from 'cors';
import Bicicletas from './bicicleta';
import Usuarios from './usuarios';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/usuarios',Usuarios);
app.use('/bicicletas',Bicicletas);

app.listen(3000, () =>
console.log('Servidor rodando na porta 3000'),

);