import TodoHead from './components/main/TodoHead'
import TodoInput from './components/main/TodoInput'
import TodoList from './components/main/TodoList'

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
            <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6">
                <TodoHead />
                <TodoInput />
                <TodoList />
            </div>
        </div>
    )
}

export default App
