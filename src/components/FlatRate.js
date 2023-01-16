import { useState } from "react"

function FlatRate() {

    const [price, setPrice] = useState('');
    const [qty , setQty] = useState('');
    const [fee, setFees] = useState('');
    const [result, setResult] = useState('');

    const handleCalculation = () => {
        const calculateAll = ((price * qty ) + parseInt(fee))
        const calculate = calculateAll * .10
        setResult(calculate)
        setPrice('');
        setQty('');
        setFees('');
    }
   

    const handleSubmitPrice = (e) => {
        setPrice(e.target.value)
    }

    const handleSubmitQty = (e) => {
        setQty(e.target.value)
    }

    const handleSubmitFees = (e) => {
        setFees(e.target.value)
    }



    return (
        <div>
            <label>Calculate Canadian Flat Rate Shipping:  </label>
            <input  type='number' value={price} onChange={handleSubmitPrice} placeholder='price' ></input>
            <input  type='number' value={qty} onChange={handleSubmitQty} placeholder='quantity'></input>
            <input  type='number' value={fee} onChange={handleSubmitFees} placeholder='fees'></input>
            <button onClick={handleCalculation}>Submit</button>
            <div> Canadian Flat Rate: {result}</div>
        </div>
    )
}

export default FlatRate