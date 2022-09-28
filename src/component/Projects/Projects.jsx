import React from "react";
import "./project.css";
import advice from "../images/Advice Gen.jpg";
import blogr from "../images/blogr.jpg";
import clip from "../images/Clipboard.jpg";
import api from "../images/Countryapi.jpg";
import bank from "../images/easybanking.jpg";
import loop from "../images/Loopstudio.jpg";
import Manage from "../images/Manage.jpg";
import Order from "../images/Order.jpg";

const Projects = () => {
  return (
    <div>
      <main className=" bg-black">
        <section class="projects container mx-auto max-w-[1000px] p-4 flex flex-col justify-center w-full h-full">
          <div class="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-5">
            <div class="projects_item">
              <img src={advice} alt="" />
              <div class="projects_btns">
                <a target="_blank" href="#" class="projects_btn">
                  <i class="fas fa-eye">Preview</i>{" "}
                </a>
                <a target="_blank" href="#" class="projects_btn">
                  <i class="fab fa-github">GitHub</i>
                </a>
              </div>
            </div>

            <div class="projects_item">
              <img src={blogr} alt="" />
              <div class="projects_btns">
                <a
                  target="_blank"
                  href="https://kehindeadvicegenerator.netlify.app/"
                  class="projects_btn"
                >
                  <i class="fas fa-eye">Preview</i>{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Kehinde-Agboola/Advice-Generator"
                  class="projects_btn"
                >
                  <i class="fab fa-github">GitHub</i>
                </a>
              </div>
            </div>

            <div class="projects_item">
              <img src={clip} alt="" />
              <div class="projects_btns">
                <a
                  target="_blank"
                  href="https://clipboardfrontend.netlify.app/"
                  class="projects_btn"
                >
                  <i class="fas fa-eye">Preview</i>{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Kehinde-Agboola/clipboard-landing-page-master"
                  class="projects_btn"
                >
                  <i class="fab fa-github">GitHub</i>
                </a>
              </div>
            </div>

            <div class="projects_item">
              <img src={api} alt="" />
              <div class="projects_btns">
                <a target="_blank" href="" class="projects_btn">
                  <i class="fas fa-eye">Preview</i>{" "}
                </a>
                <a target="_blank" href="" class="projects_btn">
                  <i class="fab fa-github">GitHub</i>
                </a>
              </div>
            </div>

            <div class="projects_item">
              <img src={bank} alt="" />
              <div class="projects_btns">
                <a target="_blank" href="" class="projects_btn">
                  <i class="fas fa-eye">Preview</i>{" "}
                </a>
                <a target="_blank" href="" class="projects_btn">
                  <i class="fab fa-github">GitHub</i>
                </a>
              </div>
            </div>

            <div class="projects_item">
              <img src={loop} alt="" />
              <div class="projects_btns">
                <a target="_blank" href="" class="projects_btn">
                  <i class="fas fa-eye">Preview</i>{" "}
                </a>
                <a target="_blank" href="" class="projects_btn">
                  <i class="fab fa-github">GitHub</i>
                </a>
              </div>
            </div>
            <div class="projects_item">
              <img src={Manage} alt="" />
              <div class="projects_btns">
                <a target="_blank" href="" class="projects_btn">
                  <i class="fas fa-eye">Preview</i>{" "}
                </a>
                <a target="_blank" href="" class="projects_btn">
                  <i class="fab fa-github">GitHub</i>
                </a>
              </div>
            </div>
            <div class="projects_item">
              <img src={Order} alt="" />
              <div class="projects_btns">
                <a
                  target="_blank"
                  href="https://rococo-valkyrie-772452.netlify.app/"
                  class="projects_btn"
                >
                  <i class="fas fa-eye">Preview</i>{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Kehinde-Agboola/Order"
                  class="projects_btn"
                >
                  <i class="fab fa-github">GitHub</i>
                </a>
              </div>
            </div>
          </div>
          {/* 
          <div class="social-icons">
            <a href="#!">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#!">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#!">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#!">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </div>
          <footer>&copy; Copyright 2019</footer> */}
        </section>
      </main>
    </div>
  );
};

export default Projects;
