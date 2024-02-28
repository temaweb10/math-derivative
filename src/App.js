import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PageLayout from "./components/PageLayout/PageLayout";
function App() {
  return (
    <>
      <BrowserRouter basename="/math-derivative">
        <Routes>
          <Route
            path="/"
            element={
              <PageLayout>
                <Home />
              </PageLayout>
            }
          />
          <Route
            path="*"
            element={
              <PageLayout>
                <Home />
              </PageLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
