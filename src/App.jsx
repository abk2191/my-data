import { useState } from "react";

function App() {
  const [activeMenuId, setactiveMenuId] = useState(null);

  const expandMenu = (menuitem) => {
    setactiveMenuId((prev) => (prev === menuitem.id ? null : menuitem.id));
  };

  const menuLabels = [
    { Label: "Facts", id: "0" },
    { Label: "Education", id: "1" },
    { Label: "Work", id: "2" },
    { Label: "Craft", id: "3" },
    { Label: "Personal", id: "4" },
  ];

  const myData = [
    {
      name: "Abhishek kabi",
      dob: "21/12/1991",
      age: 34,
      nativePlace: "Cooch Behar, West Bengal",
      fname: "Chayan Kumar Kabi",
      nationality: "Indian",
    },
    {
      ins: "Vellore Institute of Technology - Vellore (B.tech - IT) - 2017",
      cgpa: 6.6,
    },
    {
      Aegis: "Jio customer support.",
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
        {menuLabels.map((menuitem, index) => (
          <div key={index} className="menu-label">
            <div className="menu">
              {menuitem.Label}
              {activeMenuId === menuitem.id ? (
                <i
                  className="fa-solid fa-minus"
                  onClick={() => expandMenu(menuitem)}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-plus"
                  onClick={() => expandMenu(menuitem)}
                ></i>
              )}
            </div>

            {activeMenuId === menuitem.id && (
              <div className="menu-content">
                {menuitem.id === "0" && (
                  <div className="items-menu">
                    <p>• Name: {myData[0].name}</p>
                    <p>• DOB: {myData[0].dob}</p>
                    <p>• Native Place: {myData[0].nativePlace}</p>
                    <p>• Father's Name: {myData[0].fname}</p>
                    <p>• Nationality: {myData[0].nationality}</p>
                  </div>
                )}
                {menuitem.id === "1" && (
                  <div className="items-menu">
                    <p>• Graduation: {myData[1].ins}</p>
                    <p>• CGPA: {myData[1].cgpa}</p>
                  </div>
                )}
                {menuitem.id === "2" && (
                  <div className="items-menu">
                    <div>• Aegis: {myData[2].Aegis}</div>
                    <div>• DXC: {myData[2].DXC}</div>
                    <div>• HP: {myData[2].HP}</div>
                    <div>• Quinnox: {myData[2].Quinnox}</div>
                    <div>• Concentrix: {myData[2].Concentrix}</div>
                    <div>• Teleperformance: {myData[2].Teleperformance}</div>
                    <div>• Amazon: {myData[2].Amazon}</div>
                    <div>• CameoGlobal: {myData[2].CameoGlobal}</div>
                    <div>• Alorica: {myData[2].Alorica}</div>
                    <div>• Concentrix: {myData[2].Concentrix2}</div>
                    <div>• Startek: {myData[2].Startek}</div>
                    <div>• Alorica: {myData[2].Alorica2}</div>
                  </div>
                )}
                {menuitem.id === "3" && (
                  <div className="items-menu">
                    <div>• Space: {myData[3].Space}</div>
                    <div>
                      • ProximaCalculator: {myData[3].ProximaCalculator}
                    </div>
                    <div>• PortfolioWebsite: {myData[3].PortfolioWebsite}</div>
                  </div>
                )}
                {menuitem.id === "4" && (
                  <div className="items-menu">
                    <div>• PAN: {myData[4].pan}</div>
                    <div>• Aadhar: {myData[4].aadhar}</div>
                    <div>• Phone: {myData[4].phone}</div>
                    <div>• Email: {myData[4].email}</div>
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
