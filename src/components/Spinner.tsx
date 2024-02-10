import spinner from '../img/spinner.gif'

const Spinner: React.FC = () => {
    return (
        <figure className='spinner'>
            <img src={spinner} alt="Loading" />
        </figure>
    )
}

export default Spinner