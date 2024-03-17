import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';
import useDark from './Mode';


function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({ todo, completed: false })
        setTodo("")
    }


    // Dark mode ------------------------------------
    const { img, darkTheme, lightTheme } = useDark()
    const light = "/images/blue.jpg";
    const fun = () => {
        if (img === light) {
            darkTheme()
        } else {
            lightTheme()
        }
    }

    return (
        <form onSubmit={add} className="flex">

            <button onClick={fun} type="button" class="rounded-l-lg px-3 py-1 text-gray-900 bg-white hover:bg-gray-300 border  focus:ring-gray-100 font-medium  text-center inline-flex items-center ">
                D & L Mode
            </button>

            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10  px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" class="rounded-r-lg px-3 py-1 text-gray-900 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-yellow-100">Add</button>
        </form>
    );
}

export default TodoForm;
