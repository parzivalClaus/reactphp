import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://reactphp.kaizenfotoprodutos.com.br/')
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.state.data.map(result => {
                        return (
                            <tr key={result.id}>
                                <td>{result.id}</td>
                                <td>{result.marca}</td>
                                <td>{result.modelo}</td>
                                <td>{result.ano}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default App;