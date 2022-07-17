import React from "react";

export default function helloWorlld() {
  const title = (
    <h1>JSX'i değişkene atama ve içerisinde değişken kullanma </h1>
  );
  const fullName = "MAZLUM TAŞKAYA";
  const birthYear = 2003;
  const howoldareyou = () => 2022 - birthYear;
  const descripton = <div>REACT ÖĞRENİYORUM</div>;
  const style = {
    display: "grid",
    placeItems: "center",
  };
  return (
    <>
      <div style={style}>
        <input type="checkbox" defaultChecked />
        <br />
        <span className="name">MAZLUM</span>
        <br />
        <div>
          <label for="">adı :</label>
          <input type={"text"} id="name" />
        </div>
        <br />
        <div style={{ fontSize: "50px" }}>React Dersleri</div>
        <input type={"text"} defaultValue={"mazlum "} />
        {title}
        <div>ADI:{fullName}</div>
        <div>YAŞ:{howoldareyou()}</div>
        {descripton}
      </div>
    </>
  );
}