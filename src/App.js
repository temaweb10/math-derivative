import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PageLayout from "./components/PageLayout/PageLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/math-derivative/"
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
