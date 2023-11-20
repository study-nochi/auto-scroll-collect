import "./App.css";
import ErrorBoundary from "./packages/components/ErrorBoundary";
import IntersectionObserverPage from "./pages/IntersectionObserver";

function App() {
  return (
    <ErrorBoundary fallback={<div>에러 발생, 에러 발생</div>}>
      <IntersectionObserverPage />
    </ErrorBoundary>
  );
}

export default App;
