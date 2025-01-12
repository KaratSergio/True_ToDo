import reactLogo from '../assets/react.svg';

function App() {
    return (
        <div className="container md:m-5 p-4 flex flex-col border bg-slate-200 border-yellow-200 rounded-md">
            <div className="flex items-center">
                <h1 className="leading-3 font-semibold">ToDo</h1>
                <img src={reactLogo} className="logo" alt="React logo" />
            </div>
        </div>
    );
}

export default App;
