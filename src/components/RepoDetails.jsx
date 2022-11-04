import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

export default function RepoDetails() {
  const [repo, setRepo] = useState({});
  const [owner, setOwner] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let getRepo = async () => {
      const reposResponse = await axios(
        `https://api.github.com/repos/harriet-teirrah/${id}`
      );
      setRepo(reposResponse.data);
      setOwner(reposResponse.data.owner);
    };

    getRepo();
  }, []);

  return (
    <>
      <Row className="justify-content-md-center "></Row>
      <Row className="justify-content-md-center ">
        <div className="text-center">
          <h2 className="repo_header mt-3 ">Repository details</h2>
        </div>
        <Col md="1"></Col>
        <Col md="auto" className="profile">
          <div className=" profile">
            <div className="">
              <div className="profileList__row">
                <span className="profileList__label">Repository Name:</span>
                <span className="profileList__value">{repo.name}</span>
              </div>
              <div className="profileList__row">
                <span className="profileList__label">Full_name:</span>
                <span className="profileList__value">{repo.full_name}</span>
              </div>
              <div className="profileList__row">
                <span className="profileList__label">Description:</span>
                <span className="profileList__value">
                  {repo.description != null
                    ? repo.description
                    : "Not Available"}
                </span>
              </div>
              <div className="profileList__row">
                <span className="profileList__label">url:</span>
                <span className="profileList__value">{repo.url}</span>
              </div>
              <div className="profileList__row">
                <span className="profileList__label">html_url:</span>
                <span className="profileList__value">{repo.html_url}</span>
              </div>
              <div className="profileList__row">
                <span className="profileList__label">git_url:</span>
                <span className="profileList__value">{repo.git_url}</span>
              </div>
              <div className="profileList__row">
                <span className="profileList__label">ssh_url:</span>
                <span className="profileList__value">{repo.ssh_url}</span>
              </div>
              <div className="profileList__row">
                <span className="profileList__label">clone_url:</span>
                <span className="profileList__value">{repo.clone_url}</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md="1"></Col>
      </Row>
      <Row className="justify-content-md-center ">
        <div className="text-center">
          <h3 className="repo_header mt-3 ">Owner details</h3>
        </div>
        <Col xs lg="2"></Col>
        <Col md="auto" className="profile">
          <div className=" profile">
            <div className="text-center mt-1">
              <img
                src={owner.avatar_url}
                height="200"
                width="200"
                className="rounded-circle"
                alt="profileImage"
              />
            </div>
            <div className="">
              <div className="profileList__row">
                <span className="profileList__label">login:</span>
                <span className="profileList__value">{owner.login}</span>
              </div>
              <div className="profileList__row">
                <span className="profileList__label">url:</span>
                <span className="profileList__value">{owner.url}</span>
              </div>
              <div className="profileList__row">
                <span className="profileList__label">html_url:</span>
                <span className="profileList__value">{owner.html_url}</span>
              </div>
            </div>
          </div>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </>
  );
}
