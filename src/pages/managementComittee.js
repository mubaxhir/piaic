import React from "react"
import Layout from "../components/layout"
import MG from "../components/MG.module.scss"

const Piaic = ({ data }) => {
  
    const {images} = data.contentfulManegmentcommitee ;
    
    return ( <Layout>
    <div className = {MG.page}>
    <h1>Management Committee</h1>
    </div>

    <div className={MG.parentdiv}>
    <div className= {MG.flex}>
    <div className= {MG.box1}>
    <div className= {MG.img2}><img src={images[0].file.url} /></div>
    <h1>{images[0].title}</h1>
    <p>{images[0].description}</p>
    </div>
    <div className= {MG.box1}>
    <div className= {MG.img2}><img src={images[1].file.url} /></div>
    <h1>{images[1].title}</h1>
    <p>{images[1].description}</p>
    <div className= {MG.logo}>
    <div className= {MG.img}><a href="https://www.facebook.com/ziakhan" target = "_blank" ><img src={require("../components/15.png")} width="30" height="auto"  alt="klnaznc" /></a></div>
    <div ><a href="https://twitter.com/ziakhan" target = "_blank" ><img src={require("../components/13.png")} width="60" height="auto"  alt="klnaznc" /></a></div>
    <div className= {MG.x}><a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHQcWJw8uDW3wAAAW9qXqw4eTBs-c3-XlbABSKxnAsljVOB-4x6gO3t8IbhvTBwTN8fGb6LK9lro3aXw2T5XjiGEhW1bK1vC8hlgSiwRDCfsRTYITSNwPk5mdymtdFpee-ETlE=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fziaukhan%2F" target = "_blank" ><img src={require("../components/18.png")} width="60" height="auto"  alt="klnaznc" /></a></div>
    </div>
    </div>
    <div className= {MG.box1}>
    <div className= {MG.img2}><img src={images[2].file.url} /></div>
    <h1>{images[2].title}</h1>
    <p>{images[2].description}</p>
    <div ><a href="https://www.facebook.com/saylaniwelfare/?_rdc=1&_rdr" target = "_blank" ><img src={require("../components/15.png")} width="30" height="auto"  alt="klnaznc" /></a></div>
    </div>
    <div className= {MG.box1}>
    <div className= {MG.img2}><img src={images[3].file.url} /></div>
    <h1>{images[3].title}</h1>
    <p>{images[3].description}</p>
    <div className= {MG.img3}><a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFN7WFxUDBBZgAAAW9qZJAImnSXljS5YKP6Ip6kpCY2E29sxpAM2mqy4RbRkWpzwSZgeQngeOHmHImK4QO9Pds-sfhYBAFBx0q0dane62G4TifrcowXrgToPmLf7qp0cyDnoUA=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsulaiman-s-mehdi-fcis-44275773%2F" target = "_blank" ><img src={require("../components/18.png")} width="60" height="auto"  alt="klnaznc" /></a></div>
    </div>
    </div>
    </div>
    <div className= {MG.line}></div>

   <div className={MG.partner}>
   <h1>Strategic Partners</h1>
   <div className={MG.logos}>
   <div className={MG.items}>
   <a href="https://www.panacloud.ai/" target = "_blank" ><img src={require("../components/1.svg")} width="130" height="auto"  alt="klnaznc" /></a>
   </div>

   <div className={MG.items}>
   <a href="https://www.psx.com.pk/" target = "_blank" ><img src={require("../components/2.png")} width="60" height="auto"  alt="klnaznc" /></a>
   </div>

   <div className={MG.items}>
   <a href="http://www.saylaniwelfare.com/home" target = "_blank" ><img src={require("../components/3.png")} width="200" height="auto"  alt="klnaznc" /></a>
   </div>

   </div>


   </div>
    
</Layout>


);
};

export default Piaic;
export const pageQuery = graphql`
query manegmentQuery {
    contentfulManegmentcommitee {
        images {
          title
          description
          file {
            url
          }
        }
      }
}
`;

