import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "./components/Navbar";
import RepoDetails from "./components/RepoDetails";
import RepoLists from "./components/RepoLists";
import ErrorNotFound from "./components/ErrorNotFound";
import SimulateError from "./components/SimulateError";

function App() {
  return (
    <>
      <div className="body">
        <Container className="pt-3 pb-3">
          <Row className="card-container  h-100 bg-dark rounded pb-5 ">
            <Col className=" card-container ">
              <Navbar />
              <Outlet />
              <Routes>
                <Route path="/" exact element={<RepoLists />} />
                <Route path="/repos/:id" element={<RepoDetails />} />
                <Route path="/SimulateError" element={<SimulateError />} />
                <Route path="/*" element={<ErrorNotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
