import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

const content = {
  "ربات و جوش لیزر": [
    { id: 1, title: "ربات و جوش و لیزر", desc: "ربات های صنعتی با انعطاف و آزادی عمل فوق العاده برای ارائه میدهد.", src: "../../../src/assets/images/robots/robot1.png", subtitle: "ربات و جوش لیزر" },
    { id: 2, title: "ربات و جوش و لیزر", desc: "ربات های صنعتی با انعطاف و آزادی عمل فوق العاده برای ارائه میدهد.", src: "../../../src/assets/images/robots/robot2.png", subtitle: "ربات و جوش لیزر" },
    { id: 3, title: "ربات و جوش و لیزر", desc: "ربات های صنعتی با انعطاف و آزادی عمل فوق العاده برای ارائه میدهد.", src: "../../../src/assets/images/robots/robot3.png", subtitle: "ربات و جوش لیزر" },
    { id: 4, title: "ربات و جوش و لیزر", desc: "ربات های صنعتی با انعطاف و آزادی عمل فوق العاده برای ارائه میدهد.", src: "../../../src/assets/images/robots/robot4.png", subtitle: "ربات و جوش لیزر" },
    { id: 5, title: "ربات و جوش و لیزر", desc: "ربات های صنعتی با انعطاف و آزادی عمل فوق العاده برای ارائه میدهد.", src: "../../../src/assets/images/robots/robot5.png", subtitle: "ربات و جوش لیزر" }
  ],
  "ماشین های لیزری": [
    { id: 1, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle1.png" },
    { id: 2, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle2.png" },
    { id: 3, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle3.png" },
    { id: 4, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle4.png" },
    { id: 5, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle5.png" },
    { id: 6, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle6.png" },
    { id: 7, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle7.png" },
    { id: 8, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle8.png" },
    { id: 9, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle9.png" },
    { id: 10, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle10.png" },
    { id: 11, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle11.png" },
    { id: 12, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle12.png" },
    { id: 13, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle13.png" },
    { id: 14, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle14.png" },
    { id: 15, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle15.png" },
    { id: 16, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle16.png" },
  ],
  "میکسرهای بهداشتی": [
    { id: 1, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle1.png" },
    { id: 2, title: "ربات و جوش و لیزر", subtitle: "ماشین های لیزری", src: "../../../src/assets/images/vehicle/vehicle2.png" },
  ],
  "میز اپتیکی": [
    { id: 1, title: "میز اپتیکی ", subtitle: "میز اپتیکی ", src: "../../../src/assets/images/cutLayzer/cut1.png" },
    { id: 2, title: "میز اپتیکی ", subtitle: "میز اپتیکی ", src: "../../../src/assets/images/cutLayzer/cut2.png" },
    { id: 3, title: "میز اپتیکی ", subtitle: "میز اپتیکی ", src: "../../../src/assets/images/cutLayzer/cut3.png" },
    { id: 4, title: "میز اپتیکی ", subtitle: "میز اپتیکی ", src: "../../../src/assets/images/cutLayzer/cut4.png" },
    { id: 5, title: "میز اپتیکی ", subtitle: "میز اپتیکی ", src: "../../../src/assets/images/cutLayzer/cut5.png" },
    { id: 6, title: "میز اپتیکی ", subtitle: "میز اپتیکی ", src: "../../../src/assets/images/cutLayzer/cut6.png" },
    { id: 7, title: "میز اپتیکی ", subtitle: "میز اپتیکی ", src: "../../../src/assets/images/cutLayzer/cut7.png" },
    { id: 8, title: "میز اپتیکی ", subtitle: "میز اپتیکی ", src: "../../../src/assets/images/cutLayzer/cut8.png" },
  ],
  "برش لیزری": [
    { id: 1, title: "ربات و جوش و لیزر", subtitle: "برش لیزری", src: "../../../src/assets/images/cutLayzer/cut1.png" },
    { id: 2, title: "ربات و جوش و لیزر", subtitle: "برش لیزری", src: "../../../src/assets/images/cutLayzer/cut2.png" },
    { id: 3, title: "ربات و جوش و لیزر", subtitle: "برش لیزری", src: "../../../src/assets/images/cutLayzer/cut3.png" },
    { id: 4, title: "ربات و جوش و لیزر", subtitle: "برش لیزری", src: "../../../src/assets/images/cutLayzer/cut4.png" },
    { id: 5, title: "ربات و جوش و لیزر", subtitle: "برش لیزری", src: "../../../src/assets/images/cutLayzer/cut5.png" },
    { id: 6, title: "ربات و جوش و لیزر", subtitle: "برش لیزری", src: "../../../src/assets/images/cutLayzer/cut6.png" },
    { id: 7, title: "ربات و جوش و لیزر", subtitle: "برش لیزری", src: "../../../src/assets/images/cutLayzer/cut7.png" },
    { id: 8, title: "ربات و جوش و لیزر", subtitle: "برش لیزری", src: "../../../src/assets/images/cutLayzer/cut8.png" },
  ],
  "تجهیزات آزمایشگاهی و میکسر و میز اپتیکی ": [
    { id: 1, title: "ربات و جوش و لیزر", subtitle: "تجهیزات آزمایشگاهی و میکسر و میز اپتیکی", src: "../../../src/assets/images/lab/azmayesh1.png" },
    { id: 2, title: "ربات و جوش و لیزر", subtitle: "تجهیزات آزمایشگاهی و میکسر و میز اپتیکی", src: "../../../src/assets/images/lab/azmayesh2.png" },
    { id: 3, title: "ربات و جوش و لیزر", subtitle: "تجهیزات آزمایشگاهی و میکسر و میز اپتیکی", src: "../../../src/assets/images/lab/azmayesh3.png" },
    { id: 4, title: "ربات و جوش و لیزر", subtitle: "تجهیزات آزمایشگاهی و میکسر و میز اپتیکی", src: "../../../src/assets/images/lab/azmayesh4.png" },
    { id: 5, title: "ربات و جوش و لیزر", subtitle: "تجهیزات آزمایشگاهی و میکسر و میز اپتیکی", src: "../../../src/assets/images/lab/azmayesh5.png" },
  ],
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App content={content} />
  </React.StrictMode>,
)
