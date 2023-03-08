import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Exam_userState_count from "./pages/Exam/Exam_userState_count";
import Exam_userState_input from "./pages/Exam/Exam_userState_input";
import Exam_userState_multi from "./pages/Exam/Exam_userState_multi";
import Exam_useRef from "./pages/Exam/Exam_useRef";
import Test from "./pages/Exam/test";


function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
                | <Link to="/Exam_userState_count">Exam_userState_count</Link>
                | <Link to="/Exam_userState_input">Exam_userState_input</Link>
                | <Link to="/Exam_userState_multi">Exam_userState_multi</Link>
                | <Link to="/Exam_useRef">Exam_useRef</Link>
                | <Link to="/test">Test</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/Exam_userState_count" element={<Exam_userState_count/>}/>
                <Route path="/Exam_userState_input" element={<Exam_userState_input/>}/>
                <Route path="/Exam_userState_multi" element={<Exam_userState_multi/>}/>
                <Route path="/Exam_useRef" element={<Exam_useRef/>}/>
                <Route path="/test" element={<Test/>}/>
            </Routes>
        </div>
    );
}

export default App;
