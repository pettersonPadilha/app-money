import { Container } from "./styles";

export function TransactionTable() {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2022</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ - 1.350,00</td>
                        <td>Casa</td>
                        <td>10/05/2022</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
}