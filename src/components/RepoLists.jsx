import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import RepoItem from "./RepoItem";

export default function RepoLists() {
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let getProfile = async () => {
      const reposResponse = await axios(
        "https://api.github.com/users/harriet-teirrah"
      );
      setProfile(reposResponse.data);

      const profileResponse = await axios(
        "https://api.github.com/users/harriet-teirrah/repos"
      );
      setRepos(profileResponse.data);
    };

    getProfile();
  }, []);

  return (
    <>
      <Row className="justify-content-md-center ">
        <Col xs lg="2"></Col>
        <Col md="auto" className="profile">
          <div className=" profile">
            <div className="text-center mt-1">
              <img
                src={profile.avatar_url}
                height="200"
                width="200"
                className="rounded-circle"
                alt="profileImage"
              />
            </div>
            <div className="">
              <div className="profileList__row">
                <span className="profileList__label">Name:</span>
                <span className="profileList__value">{profile.name}</span>
              </div>
              <div className="profileList__row">
                <span className="profileList__label">Location:</span>
                <span className="profileList__value">{profile.location}</span>
              </div>
              <div className="profileList__row">
                <span className="profileList__label">Bio:</span>
                <span className="profileList__value">{profile.bio}</span>
              </div>
            </div>
          </div>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
      <Row className="justify-content-md-center ">
        <Col xs lg="2"></Col>
        <Col md="auto" className="">
          <div className="text-center">
            <h2 className="repo_header mt-3 ">Repositories</h2>
          </div>
          <ul className="list-group  bg-dark">
            {repos.map((repo) => {
              return <RepoItem key={repo.id} {...repo} />;
            })}
          </ul>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </>
  );
}
