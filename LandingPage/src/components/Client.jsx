import React from "react";
import "./Client.css";

export default function Client() {
  return (
    <>
      <div className="grid-container">
        <section className="cherry size">
          <div className="text">
            <h3>Graphic Design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </section>
        <section className="orange size">
          <div className="text">
            <h3>Photography</h3>
            <p>
              Photography Increase your credibility by getting the most
              stunning, high-quality photos that improve your business
              image!!!!.
            </p>
          </div>
        </section>
      </div>
      <div className="client-grid-container">
        <h3 className="client-heading">CLIENT TESTIMONIALS</h3>
        <div className="cards">
          <div className="emily clients">
            <div className="clients-img">
              <img src="./src/images/image-emily.jpg" alt="" />
            </div>
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div className="info">
              <h5>Emily R.</h5>
              <p>Marketing Director</p>
            </div>
          </div>
          {/* 2nd card */}
          <div className="thomas clients">
            <div className="clients-img">
              <img src="./src/images/image-thomas.jpg" alt="" />
            </div>
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <div className="info">
              <h5>Thomas S.</h5>
              <p>Chief Operating Officer</p>
            </div>
          </div>

          {/* 3rd card */}
          <div className="jenny clients">
            <div className="clients-img">
              <img src="./src/images/image-jennie.jpg" alt="" />
            </div>
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div className="info">
              <h5>Jennie F.</h5>
              <p>Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
