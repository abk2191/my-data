import { useState } from "react";

function App() {
  const [activeMenuId, setactiveMenuId] = useState(null);

  const expandMenu = (menuitem) => {
    setactiveMenuId((prev) => (prev === menuitem.id ? null : menuitem.id));
  };

  const menuLabels = [
    { Label: "Facts", id: "0" },
    { Label: "Education", id: "1" },
    { Label: "Work Experience", id: "2" },
    { Label: "Craft", id: "3" },
    { Label: "Personal", id: "4" },
  ];

  const myData = [
    {
      name: "Abhishek kabi",
      dob: "21/12/1991. (34 years old)",
      age: 34,
      nativePlace: "Cooch Behar, West Bengal",
      fname: "Chayan Kumar Kabi",
      nationality: "Indian",
    },
    {
      ins: "Vellore Institute of Technology - Vellore",
      year: "2017",
      stream: "B.Tech - IT",
      cgpa: 6.6,
    },
    {
      Aegis: "Jio customer support",
      DXC: "Technical Support L1",
      HP: "Technical Support L1",
      Quinnox: "Mainframe developer - rpg - as400",
      Concentrix: "OnePlus support executive",
      Teleperformance: "Tele caller executive",
      Amazon: "Seller support executive",
      CameoGlobal: "Cisco support executive",
      Alorica: "Amazon customer support executive",
      Concentrix2: "VMWARE L1 Tech support executive",
      Startek: "customer support executive",
      Alorica2: "Amazon customer support executive",
    },
    {
      Space: "React Native",
      ProximaCalculator: "React Native",
      PortfolioWebsite: "React",
    },
    {
      pan: "HKVPK3549E",
      aadhar: "8447 6563 2006",
      phone: "9332522166",
      email: "abhishek.kabi.21@gmail.com",
    },
  ];

  return (
    <>
      <div className="main-container">
        <div className="banner">
          <h1>ABHISHEK KABI</h1>
          <p>Full-Stack Developer</p>
          
        </div>
        <hr className="hr-line" />
        {menuLabels.map((menuitem, index) => (
          <div key={index} className="menu-label">
            <div className="menu">
              <p className="menu-labels"> {menuitem.Label}</p>
              {activeMenuId === menuitem.id ? (
                <div className="icon-wrapper">
                  <i
                    className="fa-solid fa-minus"
                    onClick={() => expandMenu(menuitem)}
                  ></i>
                </div>
              ) : (
                <div className="icon-wrapper">
                  <i
                    className="fa-solid fa-plus"
                    onClick={() => expandMenu(menuitem)}
                  ></i>
                </div>
              )}
            </div>

            {activeMenuId === menuitem.id && (
              <div className="menu-content">
                {menuitem.id === "0" && (
                  <div className="items-menu">
                    <p>
                      <strong>Name</strong>: {myData[0].name}.
                    </p>
                    <p>
                      <strong>DOB</strong>: {myData[0].dob}.
                    </p>
                    <p>
                      <strong>Native Place</strong>: {myData[0].nativePlace}.
                    </p>
                    <p>
                      <strong>Father's Name</strong>: {myData[0].fname}.
                    </p>
                    <p>
                      <strong>Nationality</strong>: {myData[0].nationality}.
                    </p>
                  </div>
                )}
                {menuitem.id === "1" && (
                  <div className="items-menu">
                    <p>
                      <strong>{myData[1].ins}.</strong>
                    </p>
                    <p>
                      <strong>Year of passing: {myData[1].year}.</strong>
                    </p>
                    <p>
                      <strong>Domain: {myData[1].stream}.</strong>
                    </p>
                    <p>
                      <strong>CGPA: {myData[1].cgpa}.</strong>
                    </p>
                  </div>
                )}
                {menuitem.id === "2" && (
                  <div className="items-menu">
                    <div>
                      <strong>1. Aegis</strong>: {myData[2].Aegis}{" "}
                      <strong>(2017)</strong>.
                    </div>
                    <div>
                      <strong>2. DXC</strong>: {myData[2].DXC}{" "}
                      <strong>(2018)</strong>.
                    </div>
                    <div>
                      <strong>3. HP</strong>: {myData[2].HP}{" "}
                      <strong>(2018)</strong>.
                    </div>
                    <div>
                      <strong>4. Quinnox</strong>: {myData[2].Quinnox}{" "}
                      <strong>(2019)</strong>.
                    </div>
                    <div>
                      <strong>5. Concentrix</strong>: {myData[2].Concentrix}{" "}
                      <strong>(2019)</strong>.
                    </div>
                    <div>
                      <strong>6. Teleperformance</strong>:{" "}
                      {myData[2].Teleperformance} <strong>(2020)</strong>.
                    </div>
                    <div>
                      <strong>7. Amazon</strong>: {myData[2].Amazon}{" "}
                      <strong>(2020)</strong>.
                    </div>
                    <div>
                      <strong>8. CameoGlobal</strong>: {myData[2].CameoGlobal}{" "}
                      <strong>(2023)</strong>.
                    </div>
                    <div>
                      <strong>9. Alorica</strong>: {myData[2].Alorica}{" "}
                      <strong>(2025)</strong>.
                    </div>
                    <div>
                      <strong>10. Concentrix (Rehire)</strong>:{" "}
                      {myData[2].Concentrix2} <strong>(2025)</strong>.
                    </div>
                    <div>
                      <strong>11. Startek</strong>: {myData[2].Startek}{" "}
                      <strong>(2026)</strong>.
                    </div>
                    <div>
                      <strong>12. Alorica (Rehire)</strong>:{" "}
                      {myData[2].Alorica2} <strong>(2026)</strong>.
                    </div>
                  </div>
                )}
                {menuitem.id === "3" && (
                  <div className="items-menu">
                    <div>
                      <strong>Space</strong>: {myData[3].Space}
                    </div>
                    <div>
                      <strong>Proxima Calculator</strong>:{" "}
                      {myData[3].ProximaCalculator}
                    </div>
                    <div>
                      <strong>Portfolio Website</strong>:{" "}
                      {myData[3].PortfolioWebsite}
                    </div>
                  </div>
                )}
                {menuitem.id === "4" && (
                  <div className="items-menu">
                    <div>
                      <strong>PAN</strong>: {myData[4].pan}
                    </div>
                    <div>
                      <strong>Aadhar</strong>: {myData[4].aadhar}
                    </div>
                    <div>
                      <strong>Phone</strong>: {myData[4].phone}
                    </div>
                    <div>
                      <strong>Email</strong>: {myData[4].email}
                    </div>
                  </div>
                )}
                <div className="placeholder"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
