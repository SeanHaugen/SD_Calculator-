import  FlatRate  from './components/FlatRate';
import SelfPromo from './components/SelfPromo';
import './index.css';

function App() {

    return (
        <div>
            <header>
                <h1>Showdown Displays</h1>
            </header>
            <hr />
            <div className='flat-rate'>
                <FlatRate className='result' />
            </div>
            <hr />
            <div className='self-promo'>
                <SelfPromo className='result'/>
            </div>
            
        </div>

    )
}

export default App;