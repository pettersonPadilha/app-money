import Modal from 'react-modal'
import { Container } from './styles';
import CloseImg from '../../assets/close.svg';

interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionsModalProps) {
    return(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}  overlayClassName="react-modal-overlay" className="react-modal-content">
    <button type="button" onClick={onRequestClose} className="react-modal-Close"> <img src={CloseImg} alt="Fechar" /></button>

        <Container>
            <h2>Cadastrar Transação</h2>
            <input placeholder='Titulo' />
            <input type="number"placeholder='Valor' />
            <input placeholder='Categoria' />

            <button type='submit'>Cadastrar</button>
        </Container>

    </Modal>
    );
}