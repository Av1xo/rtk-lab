import './App.css'
import Board from './components/Board/Board';
import { Provider } from 'react-redux';
import store from './rtk/store';
import MoveHistory from './components/History/MoveHistory';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className='App'>
          <Board />
          <MoveHistory />
        </div>
      </Provider>
    </>
  );
};

export default App;
