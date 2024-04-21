import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LandingPage from "./pages/LandingPage";
import Preloader from "./ui/Preloader";

const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
