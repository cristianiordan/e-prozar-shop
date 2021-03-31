
import "./index.css"
import List from './components/list'
import Footer from './components/footer'
import Promotion from './components/promotion'

const App = () => {
    return (
        <div>
            <Promotion />
            <List />
            <Footer />
        </div>
    );
};

export default App;