import { useState } from 'react';
import { RouterProvider } from 'react-router-dom'
import { AuthContext } from './Context/authContext';
import { router } from './routes';

function App() {
  const [authState, setAuthState] = useState(
    {
        id: '',
        email: '',
        role: '',
        signedIn: false
    }
  )
  return (
      <div className="App">
        <AuthContext.Provider value={[authState, setAuthState]} >
          <RouterProvider router={router} />
        </AuthContext.Provider>
      </div>
  );
}

export default App;
