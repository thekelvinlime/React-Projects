import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from "./pages/Home"
import Game from "./pages/Game"
import Rules from "./pages/Rules"
import GameProvider from './components/GameProvider';
import BoardProvider from './components/BoardProvider';
import AttemptTrackerProvider from './components/AttemptTrackerProvider';
import GameOverProvider from './components/GameOverProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/game/Normal",
    element: <Game difficulty='normal'/>,
  },
  {
    path: "/game/Hard",
    element: <Game difficulty='hard'/>,
  },
  {
    path: "/Rules",
    element: <Rules />,
  }
])
root.render(
  <React.StrictMode>
    <GameOverProvider>
      <AttemptTrackerProvider>
        <BoardProvider>
          <GameProvider>
            <RouterProvider router={reactRouter} />
          </GameProvider>
        </BoardProvider>
      </AttemptTrackerProvider>
    </GameOverProvider>
  </React.StrictMode>
);
