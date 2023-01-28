import Modal from 'react-modal'
import { Container,TransactionTypeContainer,RadioBox } from './styles';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import CloseImg from '../../assets/close.svg';
import { FormEvent, useState,useContext } from 'react';
import { api } from '../../services/api';
import { TransactionContext } from '../../TransactionContext';

interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionsModalProps) {
    const {createTransaction} = useContext(TransactionContext)
    const [title, setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [category,setCategory] = useState('')
    const [type, setType] = useState('deposit');


    //Inserindo dados no form
     async function handleCreateNewTransaction(event:FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose();
    }

    return(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}  overlayClassName="react-modal-overlay" className="react-modal-content">
    <button type="button" onClick={onRequestClose} className="react-modal-Close"> <img src={CloseImg} alt="Fechar" /></button>

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>
            <input placeholder='Titulo' value={title} onChange={event => setTitle(event.target.value)} />
            <input type="number"placeholder='Valor'  value={amount} onChange={event => setAmount(Number(event.target.value))}/>

            <TransactionTypeContainer>
                <RadioBox type="button" onClick={() => {setType('deposit');}} isActive={type === 'deposit'} activeColor="green" > 
                <img src={IncomeImg} alt="Entrada" /> 
                <span>Entradas</span>
                </RadioBox> 
               
                <RadioBox type="button" onClick={() => {setType('withdraw')}} isActive={type === 'withdraw'} activeColor="red"> 
                <img src={OutcomeImg} alt="Saidas" /> 
                <span>Saidas</span>
                </RadioBox> 
                
            </TransactionTypeContainer>
            <input placeholder='Categoria' value={category} onChange={event => setCategory(event.target.value)}/>

            <button type='submit'>Cadastrar</button>
        </Container>

    </Modal>
    );
}