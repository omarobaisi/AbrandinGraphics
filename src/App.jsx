import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home-route";
import Websites from "./routes/websites/websites-route";
import Banners from "./routes/banners/banners-route";
import Landing from "./routes/landingPage/landingPage-route";
import Print from "./routes/print/print-route";
import Logos from "./routes/logos/logos-route";
import Presentations from "./routes/presentations/presentations-route";
import Signs from "./routes/signs/signs-route";
import SocialMedia from "./routes/socialMedia/socialMedia-route";
import Merchandise from "./routes/merchandise/merchandise-route";
import Blog from "./routes/blog/blog-route";
import AccessibilityStatement from "./routes/AccessibilityStatement/accessibility-statement-route";

import "./App.scss";
import Navigation from "./components/navigation/navigation-component";
import { useState } from "react";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleToggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <BrowserRouter>
      <Navigation
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
        onToggleOverlay={handleToggleOverlay}
      />
      {showOverlay && (
        <div className="overlay" onClick={handleToggleOverlay}></div>
      )}
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/websites" element={<Websites />} />
                <Route path="/banners" element={<Banners />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/print" element={<Print />} />
                <Route path="/logos" element={<Logos />} />
                <Route path="/presentations" element={<Presentations />} />
                <Route path="/signs" element={<Signs />} />
                <Route path="/socialmedia" element={<SocialMedia />} />
                <Route path="/merchandise" element={<Merchandise />} />
                <Route path="/blog/*" element={<Blog />} />
                <Route
                  path="/accessibility-statement"
                  element={<AccessibilityStatement />}
                />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
