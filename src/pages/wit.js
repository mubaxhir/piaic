import React from "react"
import Layout from "../components/layout"
import WIT from "../components/WIT.module.scss"

const Piaic = ({ data }) => {
  
  const {title,image,text,images} = data.contentfulWit;
  
  return (
<Layout >
  
  <div className={WIT.main}><img src={image["file"]["url"]} alt="mainIcon" /></div>
  
  <div className={WIT.super}>
  <p>{text.text}</p>
  {/* <p>The Women Empowerment Division of the Presidential Initiative for Artificial Intelligence & Computing is committed to the empowerment and autonomy of women in Pakistan.</p>
  <p>The single most important channel for the empowerment of women is education. The Women Empowerment Division is committed to providing the best technical education in the world with the flexibility to allow just about anyone to participate and improve their lives. The primary objective of the Women Empowerment Division is to provide a platform via which women can receive education and training to jumpstart their careers in the global technology industry.</p>
  <p>The Women Inclusion in Technology project is the largest initiative on women education in Pakistan. The main of the project is to drive female participation in the technology industry in Pakistan from less than 5% to 30% over the next two years. Via this project, PIAIC is propagating awareness and training on the latest, most state-of-the-art technologies to women in Pakistan. The Women Empowerment Division will aid highly skilled women in technology to establish themselves as entrepreneurs and leaders in the technology industry not only in Pakistan but also around the world.</p> */}

<h1>{title}</h1>
  <div className={WIT.line}></div>
  <h2>PIAIC WOMEN'S GALLERY</h2>
  
  <div className={WIT.spotlight}>
  <div className={WIT.image} ><img src={images[43]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image2}><img src={images[39]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image3}><img src={images[37]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight}>
  <div className={WIT.image4}><img src={images[42]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image5}><img src={images[41]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image6}><img src={images[4]["file"]["url"]} alt="mainIcon" /></div>
  </div>
  
  <div className={WIT.spotlight}>
  <div className={WIT.image7}><img src={images[40]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image8}><img src={images[38]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image9}><img src={images[36]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight2}>
  <div className={WIT.image10}><img src={images[35]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image11}><img src={images[33]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight3}>
  <div className={WIT.image12}><img src={images[34]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight4}>
  <div className={WIT.image13}><img src={images[32]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image14}><img src={images[30]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image15}><img src={images[29]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image17}><img src={images[31]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight2}>
  <div className={WIT.image18}><img src={images[28]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image19}><img src={images[5]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight}>
  <div className={WIT.image20}><img src={images[6]["file"]["url"]}alt="mainIcon" /></div>
  <div className={WIT.image21}><img src={images[19]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image22}><img src={images[26]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight}>
  <div className={WIT.image23}><img src={images[23]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image24}><img src={images[27]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image25}><img src={images[25]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight5}>
  <div className={WIT.image26}><img src={images[17]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image27}><img src={images[22]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image28}><img src={images[24]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image29}><img src={images[21]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image30}><img src={images[20]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight}>
  <div className={WIT.image31}><img src={images[18]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image32}><img src={images[16]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image33}><img src={images[15]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight}>
  <div className={WIT.image34}><img src={images[7]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image35}><img src={images[14]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image36}><img src={images[13]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight2}>
  <div className={WIT.image37}><img src={images[10]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image38}><img src={images[11]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight2}>
  <div className={WIT.image39}><img src={images[9]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image40}><img src={images[45]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight4}>
  <div className={WIT.image41}><img src={images[46]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image42}><img src={images[50]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image43}><img src={images[51]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image44}><img src={require("../components/wit/44.jpg")} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight4}>
  <div className={WIT.image45}><img src={images[47]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image46}><img src={images[49]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image47}><img src={images[48]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image48}><img src={images[12]["file"]["url"]} alt="mainIcon" /></div>
  </div>

  <div className={WIT.spotlight}>
  <div className={WIT.image49}><img src={images[8]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image50}><img src={images[52]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image51}><img src={images[54]["file"]["url"]} alt="mainIcon" /></div>
  </div>
  
  <div className={WIT.spotlight3}>
  <div className={WIT.image52}><img src={images[55]["file"]["url"]} alt="mainIcon" /></div>
  </div>
  
  <div className={WIT.spotlight}>
  <div className={WIT.image53}><img src={images[53]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image54}><img src={images[3]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image55}><img src={images[56]["file"]["url"]} alt="mainIcon" /></div>
  </div>
  
  <div className={WIT.spotlight4}>
  <div className={WIT.image56}><img src={images[0]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image57}><img src={images[1]["file"]["url"]}alt="mainIcon" /></div>
  <div className={WIT.image58}><img src={images[57]["file"]["url"]} alt="mainIcon" /></div>
  <div className={WIT.image59}><img src={images[2]["file"]["url"]} alt="mainIcon" /></div>
  </div>
  
  </div>
  
</Layout>

);
};

export default Piaic;
export const pageQuery = graphql`
query witQuery {
  contentfulWit {
    title
    image {
      file {
        url
      }
    }
    text {
      text
    }
    images {
      title
      file {
        url
      }
    }
  }
}
`;
