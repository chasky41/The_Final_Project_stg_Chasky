import ic from "/icons/noun-curved-monitor-5563940.svg"
import ic1 from "/icons/Mouse black00.svg"
import ic2 from "/icons/noun-playstation-controller-5563934.svg"
import ic3 from "/icons/clavier00.svg"
import ic4 from "/icons/graphic card00.svg"
import ic5 from "/icons/CPU00.svg"
import ic6 from "/icons/noun-astro-headset-5563932.svg"
import ic7 from "/icons/gaming-chair.png"
import "./index.scss"


const Photoicn = () => {
    return (


        <section className="services" id="packages">
        <div className="container">
  
          <div className="main-txt ic-text">
            <h1 style={{color:'white'}}><span style={{color:'red'}}>D</span>u matériel ProGamer accessible pour tous</h1>
          </div>
  
          <div className="row" style={{marginTop:'30px'}} >
  
            <div className="col-lg-3 py-3 py-md-0">
  
              <div className="card">
  
                <div className="card-body">
                  <table>
                    <tr>
                      <td><img src={ic}alt=""/></td>
                      <td>
                        <p>Moniteur gaming ViewSonic 27 Curved<br/> FHD (1920X1080),4K 240 Hz , 1ms </p>
                      </td>
                    </tr>
                  </table>
  
                </div>
              </div>
  
            </div>
            <div className="col-lg-3 py-3 py-md-0">
  
              <div className="card">
  
                <div className="card-body">
                  <table>
                    <tr>
                      <td> <img src={ic1}/></td>
                      <td>
                        <p > ROG Swift PG258-Moniteur <br/>gaming 24,4% FHD (1920X1080) <br/>natif 240 Hz, 1 ms,G-SYNC </p>
                      </td>
                    </tr>
                  </table>
  
                </div>
              </div> 
  
            </div>
            <div className="col-lg-3 py-3 py-md-0">
  
              <div className="card">
  
                <div className="card-body">
                  <table>
                    <tr>
                      <td> <img src={ic2}/></td>
                      <td>
                        <p>Manette type PlayStation</p>
                      </td>
                    </tr>
                  </table>
  
                </div>
              </div>
  
            </div>
  
            <div className="col-lg-3 py-3 py-md-0">
  
              <div className="card">
  
                <div className="card-body">
                  <table>
                    <tr>
                      <td> <img src={ic3} alt="" className="img-clv"/></td>
                      <td>
                        <p>ROG Swift PG258-Moniteur <br/> gaming 24,5 FHD (1920X1080) <br/> natif 240 Hz,1ms,G-SYNC</p>
                      </td>
                    </tr>
                  </table>
  
                </div>
              </div>
  
            </div>
  
  
  
          </div>
  
  
  
          <div className="row" style={{marginTop: '30px'}}>
  
            <div className="col-lg-3 py-3 py-md-0">
  
              <div className="card">
  
                <div className="card-body">
                  <table>
                    <tr>
                      <td> <img src={ic4} alt=""/></td>
                      <td>
                        <p>GeForce RTX 3050</p>
                      </td>
                    </tr>
                  </table>
  
                </div>
              </div>
  
            </div>
            <div className="col-lg-3 py-3 py-md-0">
  
              <div className="card">
  
  
                <div className="card-body">
                  <table>
                    <tr>
                      <td> <img src={ic5} alt=""/></td>
                      <td>
                        <p>Ryzen 5 5500</p>
                      </td>
                    </tr>
                  </table>
  
                </div>
              </div>
  
            </div>
            <div className="col-lg-3 py-3 py-md-0">
  
              <div className="card">
  
  
  
                <div className="card-body">
                  <table>
                    <tr>
                      <td> <img src={ic7} alt=""/></td>
                      <td>
                        <p> ROG Swift PG258-Moniteur <br/>gaming 24,4% FHD (1920X1080) <br/>natif 240 Hz, 1 ms,G-SYNC </p>
                      </td>
                    </tr>
                  </table>
  
                </div>
              </div>
  
            </div>
  
            <div className="col-lg-3 py-3 py-md-0">
  
              <div className="card">
  
                <div className="card-body">
                  <table>
                    <tr>
                      <td> <img src={ic6} alt=""/></td>
                      <td>
                        <p>Fauteuil Galng <br/> Spirit of Gamer</p>
                      </td>
                    </tr>
                  </table>
  
                </div>
              </div>
  
            </div>
  
  
  
          </div>
  
  
          <div className="row">
            <div className="col prg ">
              <p style={{color:'whitesmoke'}}>Tout a été pensé pour ton confort de jeu , siége Spirit of Gamer , PC surpuissants avec des <br/> CG Pny
                GeForce RTX 3050 8GB , écrans 27 pouces ViewSonic 240 Htz , casques Asus ROG <br/> Delta , claviers Asus
                ROG SCOPE . Manettes et tapis de souris te sont également fournis pour <br/> une expérience de Gaiming
                optimale !</p>
            </div>
          </div>
  
  
  
    </div>
    </section>





    )
}
export default Photoicn;