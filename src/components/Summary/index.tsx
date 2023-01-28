import { useContext } from 'react';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';
import { TransactionContext } from '../../TransactionContext';
import { Container } from "./styles";



export function Summary() {
    const data = useContext(TransactionContext);
    return(
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entrada" />
                </header>
                <strong>R$ 1.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={OutcomeImg} alt="Saidas" />
                </header>
                <strong>R$ - 350,00</strong>
            </div>

            <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>R$ 750,00</strong>
            </div>
        </Container>
    );
}