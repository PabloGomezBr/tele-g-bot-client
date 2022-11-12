import { useState } from 'react';

import Modal from './components/app-modal/modal';
import svg from './icon.svg';
import logo from './logo.svg';
import './App.css';
import Message from './pages/Message';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='App'>
            <header className='App-header'>
                {/* <img src={svg} alt="svg" style={{ position: 'absolute', top: 0 }}/> */}
                <svg style={{ position: 'absolute', top: 0 }} version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="254.000000pt" height="108.000000pt" viewBox="0 0 254.000000 108.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,108.000000) scale(0.100000,-0.100000)"
                        fill="#FFFFFFFF" fillOpacity="0">
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M346 930 c-43 -22 -81 -26 -91 -10 -5 7 -11 8 -19 1 -6 -5 -31 -11
-54 -13 -58 -4 -58 -22 1 -26 l47 -3 0 -47 c0 -60 -18 -123 -39 -138 -15 -12
-15 -13 2 -19 9 -4 23 -5 30 -2 17 6 37 93 37 158 0 48 0 49 32 49 39 0 130
40 125 54 -6 18 -30 17 -71 -4z"/>
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M541 913 c-74 -26 -111 -86 -111 -179 0 -52 15 -65 77 -67 37 -2 48
2 48 13 0 9 -10 15 -25 16 -69 2 -70 2 -70 38 0 28 4 35 25 40 30 8 32 24 4
34 -20 8 -19 10 15 40 20 18 57 37 82 43 25 7 43 17 41 23 -5 17 -37 17 -86
-1z"/>
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M915 861 c-63 -25 -61 -20 -53 -137 8 -116 16 -136 48 -116 11 6 27
12 36 12 26 0 10 25 -18 28 -19 2 -28 11 -33 30 -6 26 -4 30 42 58 27 18 3 40
-26 25 -19 -11 -21 -9 -21 18 0 26 7 34 40 51 64 33 51 59 -15 31z"/>
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M1330 813 c-56 -55 -60 -62 -60 -105 0 -31 7 -54 21 -72 18 -23 27
-27 68 -24 l46 3 -2 48 c-1 44 0 47 24 47 35 0 24 24 -14 28 -40 4 -57 -17
-43 -52 15 -41 13 -46 -20 -46 -33 0 -50 22 -50 68 0 24 12 41 55 80 30 28 55
55 55 61 0 28 -25 16 -80 -36z"/>
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M703 838 c-5 -7 -17 -44 -27 -83 -16 -67 -16 -70 3 -88 16 -16 27
-18 66 -13 59 9 56 32 -4 28 -48 -3 -49 0 -26 93 13 59 8 89 -12 63z"/>
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M1807 843 c-10 -18 8 -217 21 -221 9 -3 12 20 12 93 0 66 3 94 11 90
6 -4 29 -9 51 -11 51 -5 56 -9 34 -33 -15 -16 -15 -19 -1 -31 9 -8 15 -25 13
-39 -2 -21 -10 -27 -36 -31 -43 -7 -46 -24 -5 -28 61 -6 72 9 71 93 0 47 -5
79 -13 85 -7 6 -41 15 -76 21 -34 5 -66 12 -70 15 -4 2 -10 1 -12 -3z"/>
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M2222 812 c-32 -10 -32 -26 0 -30 l27 -3 3 -96 c2 -66 7 -98 16 -101
9 -3 12 22 12 104 l0 107 65 -5 c65 -6 75 -2 53 20 -13 13 -135 15 -176 4z"/>
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M2096 794 c-28 -28 -56 -92 -56 -128 0 -29 5 -38 31 -51 16 -9 45
-15 62 -13 28 3 34 9 47 46 14 40 13 44 -10 88 -14 25 -32 52 -41 60 -15 13
-18 13 -33 -2z m47 -76 c14 -27 16 -40 8 -61 -11 -29 -30 -34 -62 -17 -25 14
-24 46 1 88 23 38 28 37 53 -10z"/>
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M1045 751 c-8 -13 3 -18 63 -26 36 -5 52 -3 52 4 0 24 -101 43 -115
22z"/>
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M1617 740 c-65 -7 -60 -24 8 -28 43 -2 55 0 55 12 0 20 -8 22 -63 16z"/>
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M912 420 c-22 -9 -23 -13 -20 -116 2 -75 7 -109 16 -112 9 -3 12 21
12 96 0 81 3 101 15 106 24 9 113 -13 119 -30 6 -15 -14 -22 -77 -26 -60 -5
-48 -23 18 -26 77 -4 104 13 90 55 -6 15 -22 33 -35 40 -36 17 -111 24 -138
13z"/>
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M1333 384 c-7 -18 27 -223 38 -230 5 -2 16 0 26 5 10 6 47 15 82 20
76 12 101 32 101 77 0 35 -21 54 -59 54 -14 0 -21 6 -21 19 0 28 -26 44 -63
38 -23 -3 -39 1 -56 14 -28 23 -40 24 -48 3z m103 -50 c42 8 44 -11 3 -31 -13
-7 -24 -18 -24 -25 0 -14 18 -15 82 -4 35 6 44 5 49 -9 10 -26 -15 -43 -88
-58 -38 -7 -68 -13 -68 -11 0 1 -7 38 -15 81 -8 43 -15 80 -15 82 0 2 9 -4 20
-14 15 -13 28 -16 56 -11z"/>
                        <path className="path" stroke="#FFFFFF" strokeWidth="10" d="M1155 381 c-34 -14 -56 -47 -62 -90 -7 -53 15 -86 67 -102 36 -11 42
-10 55 7 17 22 20 70 5 79 -5 3 -10 13 -10 20 0 11 8 13 30 9 37 -8 41 12 5
28 -19 8 -31 8 -50 0 -29 -13 -31 -29 -9 -60 19 -28 12 -52 -15 -52 -54 0 -67
66 -22 111 23 23 38 29 71 29 29 0 40 4 38 13 -5 14 -74 20 -103 8z"/>
                    </g>
                </svg>

                <img onClick={() => setIsOpen(true)} src={logo} className='App-logo' alt='logo' />
                <Message className={isOpen ? 'dissable-pointer-events' : 'enable-pointer-events'}/>
                <Modal show={isOpen} handleClose={() => setIsOpen(false)} />
            </header>
        </div>
    );
}

export default App;
