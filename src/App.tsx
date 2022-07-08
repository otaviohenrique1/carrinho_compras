import GlobalContext from './context';
import { RouterApp } from './pages/routes';

function App() {
  return (
    <GlobalContext>
      <RouterApp />
    </GlobalContext>
  );
}

export default App;
