import { StrictMode } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import UserContext from "./utils/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import './App.css';

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import Footer from "./components/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  }
});

const App = () => {
  const userInfo = useState({ username: "John Doe", role: "Product Owner" });

  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <UserContext.Provider value={userInfo}>
            <div className="min-h-screen flex flex-col bg-grey-300">
              <Header />
              <Navigation />
              <main className="grow md:container mx-auto py-lg px-0">
                <Routes>
                  <Route path="/posts/:id" element={<Comments />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </UserContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
