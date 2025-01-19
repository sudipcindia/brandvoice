import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Import Components
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

// React Routes
const router = createBrowserRouter([
  {
    path: '/Main',
    element : <Main></Main>
  },
  {
    path: '/',
    element : <Quiz></Quiz>
  },
  {
    path: '/result',
    element : <Result></Result>
},
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      </>
  );
}

export default App;
