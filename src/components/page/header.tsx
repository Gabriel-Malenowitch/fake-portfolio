import { useRandomBackground } from "../../hooks/use-random-background";

export const Header = () => (
    <header style={{ color: useRandomBackground({ time: 500 }) }}>
        <img src="./src/assets/avatar.png" alt="Avatar" className="avatar"/>
        <div className="card">
            <h1 style={{ color: useRandomBackground({ time: 1000 }) }}>
            Hello world! <div className="crazyRotation">👋</div>
            </h1>
            <p>Seja muito bem vindo ao meu dév fólio!</p>
        </div>
    </header>
)