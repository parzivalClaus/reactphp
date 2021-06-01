import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, ListContainer, FormContainer, StyledForm } from './styles';

import { Input } from '@rocketseat/unform';

function Cars() {
    const [cars, setCars] = useState();

    async function getCars() {
        try {
            const res = await axios.get('https://reactphp.kaizenfotoprodutos.com.br/list-cars.php');
            setCars(res.data);
        } catch (err) {
            alert("Não foi possível acessar a API");
        }
    }

    async function handleSubmit({ marca, modelo, ano }) {
        const formData = new FormData();
        formData.append('marca', marca);
        formData.append('modelo', modelo);
        formData.append('ano', ano);

        const res = await axios.post('https://reactphp.kaizenfotoprodutos.com.br/insert-car.php', formData);
        console.log(res.data);
        getCars();

    }

    useEffect(() => {
        getCars();
    }, []);

    return <Container>
        <ListContainer>
            <h1>Lista de Carros</h1>

            <table className="carsTable">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Ano</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {cars && cars.map((car) => (
                    <tbody key={car.id}>

                        <tr>
                            <td>{car.id}</td>
                            <td>{car.marca}</td>
                            <td>{car.modelo}</td>
                            <td>{car.ano}</td>
                            <td>X</td>
                        </tr>
                    </tbody>
                ))}

            </table>
        </ListContainer>

        <FormContainer>
            <StyledForm onSubmit={handleSubmit}>
                <div className="inputBox">
                    <strong>Marca</strong>
                </div>
                <Input name="marca" type="text" placeholder="Ford" />

                <div className="inputBox">
                    <strong>Modelo</strong>
                </div>
                <Input name="modelo" type="text" placeholder="Fiesta" />

                <div className="inputBox">
                    <strong>Ano</strong>
                </div>
                <Input name="ano" type="text" placeholder="2011" />

                <button type="submit">Enviar</button>
            </StyledForm>
        </FormContainer>
    </Container>;
}

export default Cars;