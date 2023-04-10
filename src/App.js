import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Exam_EventHandling from "./pages/Exam/Exam_EventHandling";
import Exam_useState_count from "./pages/Exam/Exam_useState_count";
import Exam_useState_input from "./pages/Exam/Exam_useState_input";
import Exam_useState_multi from "./pages/Exam/Exam_useState_multi";
import Exam_useRef from "./pages/Exam/Exam_useRef";
import Exam_List from "./pages/Exam/Exam_List";
import Exam_List2 from "./pages/Exam/Exam_List2";
import Exam_List3 from "./pages/Exam/Exam_List3";
import Exam_useEffect from "./pages/Exam/Exam_useEffect";
import Exam_useEffect2 from "./pages/Exam/Exam_useEffect2";
import Exam_Fetch from "./pages/Exam/Exam_Fetch";
import Exam_Fetch2 from "./pages/Exam/Exam_Fetch2";
import Exam_Fetch_axios from "./pages/Exam/Exam_Fetch_axios";
import Exam_Fetch_axios2 from "./pages/Exam/Exam_Fetch_axios2";
import Exam_Fetch_axios_api from "./pages/Exam/Exam_Fetch_axios_api";
import Exam_ReduxToolkit1 from "./pages/Redux/Exam_ReduxToolkit1";
import Exam_ReduxToolkit1_2 from "./pages/Redux/Exam_ReduxToolkit1_2";
import Exam_ReduxToolkit2 from "./pages/Redux2/Exam_ReduxToolkit2";
import Redux_thunk_Exam1 from "./pages/Redux_thunk/Redux_thunk_Exam1";
import Redux_thunk_Exam2 from "./pages/Redux_thunk2/Redux_thunk_Exam2";
import Exam_ReduxToolkit_temp from "./pages/Redux2_temp/Exam_ReduxToolkit_temp";
import Exam_popup from "./pages/Exam/Exam_popup";
import Temporary from "./pages/Exam/Temporary";
import Test from "./pages/Exam/Test";


function App() {
    return (
        <div>
            <nav>
                  <Link to="/">Home</Link>
                | <Link to="/about">About</Link>
                | <Link to="/Exam_EventHandling">Exam_EventHandling</Link>
                | <Link to="/Exam_useState_count">Exam_useState_count</Link>
                | <Link to="/Exam_useState_input">Exam_useState_input</Link>
                | <Link to="/Exam_useState_multi">Exam_useState_multi</Link>
                | <Link to="/Exam_useRef">Exam_useRef</Link>
                | <Link to="/Exam_List">Exam_List</Link>
                | <Link to="/Exam_List2">Exam_List2</Link>
                | <Link to="/Exam_List3">Exam_List3</Link>
                | <Link to="/Exam_useEffect">Exam_useEffect</Link>
                | <Link to="/Exam_useEffect2">Exam_useEffect2</Link>
                | <Link to="/Exam_Fetch">Exam_Fetch</Link>
                | <Link to="/Exam_Fetch2">Exam_Fetch2</Link>
                | <Link to="/Exam_Fetch_axios">Exam_Fetch_axios</Link>
                | <Link to="/Exam_Fetch_axios2">Exam_Fetch_axios2</Link>
                | <Link to="/Exam_Fetch_axios_api">Exam_Fetch_axios_api</Link>
                | <Link to="/Exam_ReduxToolkit1">Exam_ReduxToolkit1</Link>
                | <Link to="/Exam_ReduxToolkit1_2">Exam_ReduxToolkit1_2</Link>
                | <Link to="/Exam_ReduxToolkit2">Exam_ReduxToolkit2</Link>
                | <Link to="/Redux_thunk_Exam1">Redux_thunk_Exam1</Link>
                | <Link to="/Redux_thunk_Exam2">Redux_thunk_Exam2</Link>
                | <Link to="/Exam_ReduxToolkit_temp">Exam_ReduxToolkit_temp</Link>
                | <Link to="/Exam_popup">Exam_popup</Link>
                | <Link to="/Temporary">Temporary</Link>
                | <Link to="/Test">Test</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/Exam_EventHandling" element={<Exam_EventHandling/>}/>
                <Route path="/Exam_useState_count" element={<Exam_useState_count/>}/>
                <Route path="/Exam_useState_input" element={<Exam_useState_input/>}/>
                <Route path="/Exam_useState_multi" element={<Exam_useState_multi/>}/>
                <Route path="/Exam_useRef" element={<Exam_useRef/>}/>
                <Route path="/Exam_List" element={<Exam_List/>}/>
                <Route path="/Exam_List2" element={<Exam_List2/>}/>
                <Route path="/Exam_List3" element={<Exam_List3/>}/>
                <Route path="/Exam_useEffect" element={<Exam_useEffect/>}/>
                <Route path="/Exam_useEffect2" element={<Exam_useEffect2/>}/>
                <Route path="/Exam_Fetch" element={<Exam_Fetch/>}/>
                <Route path="/Exam_Fetch2" element={<Exam_Fetch2/>}/>
                <Route path="/Exam_Fetch_axios" element={<Exam_Fetch_axios/>}/>
                <Route path="/Exam_Fetch_axios2" element={<Exam_Fetch_axios2/>}/>
                <Route path="/Exam_Fetch_axios_api" element={<Exam_Fetch_axios_api/>}/>
                <Route path="/Exam_ReduxToolkit1" element={<Exam_ReduxToolkit1/>}/>
                <Route path="/Exam_ReduxToolkit1_2" element={<Exam_ReduxToolkit1_2/>}/>
                <Route path="/Exam_ReduxToolkit2" element={<Exam_ReduxToolkit2/>}/>
                <Route path="/Redux_thunk_Exam1" element={<Redux_thunk_Exam1/>}/>
                <Route path="/Redux_thunk_Exam2" element={<Redux_thunk_Exam2/>}/>
                <Route path="/Exam_ReduxToolkit_temp" element={<Exam_ReduxToolkit_temp/>}/>
                <Route path="/Exam_popup" element={<Exam_popup/>}/>
                <Route path="/Temporary" element={<Temporary/>}/>
                <Route path="/Test" element={<Test/>}/>
            </Routes>
        </div>
    );
}

export default App;
