const dotenv = require('dotenv');

const ClientsModel = require('./src/models/clients.model');

const cors = require('cors')

const connectToDatabase = require('./src/database/connect');

dotenv.config()

connectToDatabase()

const express = require('express');

const app = express()

app.use(express.json());

app.use(cors())

//Mostrar todos os clientes

app.get('/clients', async (req, res) => {
    try {
        const clients = await ClientsModel.find({})

        res.status(200).json(clients);

    } catch (error) {
        if (error) {
            res.status(500).send(error.message)
        }
    }

});

//Mostrar clientes filtrados por ID

app.get('/clients/:id', async (req, res) => {
    try {
        
        const id = req.params.id

        const clients = await ClientsModel.findById(id)

        res.status(200).json(clients);

    } catch (error) {
        if (error) {
            res.status(500).send(error.message)
        }
    }

});

// Novos clientes

app.post('/clients', async (req, res) => {
    try {

        const clients = await ClientsModel.create(req.body)

        res.status(201).json(clients)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

//Excluir clientes por id

app.delete('/clients/:id', async (req, res) => {
    try {
        
        const id = req.params.id

        const clients = await ClientsModel.findByIdAndDelete(id)

        res.status(200).json(clients);

    } catch (error) {
        if (error) {
            res.status(500).send(error.message)
        }
    }

});

app.listen(process.env.PORT, () => {
    console.log('Rodando na porta ', process.env.PORT)
})
