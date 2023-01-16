import { useState } from 'react'; 

function SelfPromo() {

    const [price, setPrice] = useState('');
    const [result, setResult] = useState('');

    const handleCalculation = () => {
        const calculate = (price - (price * .40))
        setResult(calculate)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setPrice(e.target.value);
    }

    return (
        <form>
            <label>Calculate Self Promo Pricing:  </label>
            <input type='number' value={price} onChange={handleSubmit} placeholder='price' ></input>
            <button onClick={handleCalculation} >Submit</button>
            <div>Self Promo Price: {result}</div>
        </form>
    )
}

export default SelfPromo