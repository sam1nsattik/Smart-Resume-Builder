import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoverLetterBuilder from "./components/CoverLetterBuilder";
import ResumeBuilder from "./components/ResumeBuilder"
import UserProfile from "./components/UserProfile"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResumeBuilder />}>
          <Route path="cover-letter-builder" element={<CoverLetterBuilder />} />
          <Route path="user-profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);