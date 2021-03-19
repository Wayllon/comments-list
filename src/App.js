import React from 'react'

import NewComment from './components/NewComment'
import Comments from './components/Comments'
import { AuthProvider } from './authentication/auth'
import CreateUser from './components/CreateUser'

function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
      </div>
    </AuthProvider>
  )
}

export default App
