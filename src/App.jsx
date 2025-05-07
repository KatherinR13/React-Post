import './Redux/redux.css'
import PostsList from './Redux/features/posts/PostsList'
import AddPostForm from './Redux/features/posts/AddPostForm'

function App() {

  return (
    <main>
      <AddPostForm/>
      <PostsList/>
    </main>
  )
}

export default App
