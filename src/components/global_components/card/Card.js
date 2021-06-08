import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.css";
import img from "../../../assets/homesection/9002776b28684aec617c41554e33945f.jpg";
const Card = () => {
  return (
    <>
      <div className={`${styles.card} card shadow p-3 mb-5`}>
        <img className="card-img-top" src={img} alt="Card cap" />
        <div className="card-body">
          <h5 className={`${styles.cardTitle} card-title`}>Book title</h5>
          <div className={`${styles.cardSubtitle} cardSubtitle`}>
            <button
              type="button"
              className={`btn ${styles.btnSm} btn-sm rounded-pill`}
            >
              Incomplete
            </button>
          </div>
          <div className="startreading d-flex justify-content-center">
            {" "}
            <Link href="#" className={`${styles.btn} btn rounded-pill`}>
              Start reading
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
