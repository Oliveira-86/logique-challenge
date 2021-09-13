import './styles.css';


const formatDate = (date) => {
    let dateF = new Date(date);
    return dateF.toLocaleDateString();
}

const ContractsDate = (props) => {
    return (
        <div className="contract-date-container">
            <h3 className="contracts-date">{formatDate(props.date)}</h3>
        </div>
    );
    
}
export default ContractsDate;