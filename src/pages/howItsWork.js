import React from "react"
import Layout from "../components/layout"
import HIT from "../components/HIT.module.scss"
import { Link } from "gatsby"


const onClick = () => {

}


const Piaic = ({ data }) => {
  
    const {title,smalltext,image,text1,cities,text2,text3,text4,text5,text6,text7} = data.contentfulHowitworks;
    
    return (
  <Layout >
    <div className= {HIT.body}>
<h1>{title}</h1>
    <div className= {HIT.line}></div>
    
    
    <div className= {HIT.flex}>
    
    <div>
	<div className={HIT.circle_main1}>
	<div className={HIT.circle_text_container}>
	<div className = {HIT.circle_text}>1</div>
	</div>
    </div>
	</div>
    
    
    <div className= {HIT.child}>
<h2>{text1.text1}</h2>
    </div>
    </div>
    
    <div className = {HIT.heading1}>
<p>{smalltext}</p>
    </div>

    <div className= {HIT.flex2}>
    <div className= {HIT.flex}>
    <div className= {HIT.h3}><h3>1</h3></div>
	<div className={HIT.circle_main2}></div>
    <div className={HIT.box}><h4>Karachi</h4></div>
<div className={HIT.h5}><h5>{cities.Karachi}</h5></div>
    </div>
    </div>

    <div className= {HIT.margin}>
    <div className= {HIT.flex}>
    <div className= {HIT.h3}><h3>2</h3></div>
	<div className={HIT.circle_main2}></div>
    <div className={HIT.box}><h4>Islamabad</h4></div>
<div className={HIT.h5}><h5>{cities.Islamabad}</h5></div>
    </div>
    </div>

    <div className= {HIT.margin}>
    <div className= {HIT.flex}>
    <div className= {HIT.h3}><h3>3</h3></div>
	<div className={HIT.circle_main2}></div>
    <div className={HIT.box}><h4>Faisalabad</h4></div>
<div className={HIT.h5}><h5>{cities.Faisalabad}</h5></div>
    </div>
    </div>

    <div className= {HIT.margin}>
    <div className= {HIT.flex}>
    <div className= {HIT.h3}><h3>4</h3></div>
	<div className={HIT.circle_main3}></div>
    <div className={HIT.box2}><h4>Sialkot</h4></div>
<div className={HIT.h5}><h5>{cities.Sialkot}</h5></div>
    </div>
    </div>

    <div className= {HIT.margin}>
    <div className= {HIT.flex}>
    <div className= {HIT.h3}><h3>5</h3></div>
	<div className={HIT.circle_main2}></div>
    <div className={HIT.box}><h4>Lahore</h4></div>
<div className={HIT.h5}><h5>{cities.Lahore}</h5></div>
    </div>
    </div>

    <div className= {HIT.margin}>
    <div className= {HIT.flex}>
    <div className= {HIT.h3}><h3>6</h3></div>
	<div className={HIT.circle_main2}></div>
    <div className={HIT.box}><h4>Peshawar</h4></div>
<div className={HIT.h5}><h5>{cities.Peshawar}</h5></div>
    </div>
    </div>

    <div className= {HIT.margin}>
    <div className= {HIT.flex}>
    <div className= {HIT.h3}><h3>7</h3></div>
	<div className={HIT.circle_main2}></div>
    <div className={HIT.box}><h4>Quetta</h4></div>
<div className={HIT.h5}><h5>{cities.Quetta}</h5></div>
    </div>
    </div>

    <div className={HIT.body2}>

    <div className={HIT.flex}>
    <div>
	<div className={HIT.circle_main1}>
	<div className={HIT.circle_text_container}>
	<div className = {HIT.circle_text}>2</div>
	</div>
	</div>
    </div>
    <div className={HIT.child2}>
    <h1>To participate in the program and become eligible for the most prestigious credentials for AI, Cloud, and Blockchain technologies in the world, students must complete the following process</h1>
    </div>
    </div>
    <div className={HIT.line2}></div>
<div className={HIT.flex}><p>1-Signup at PIAIC Portal</p><a href="https://portal.piaic.org/signup" target="_blank"></a></div>
    <p>2- Submit the online application.</p>
    <p>3- Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results are determined based on percentile.</p>
    <p>4- Pass all PIAIC exams with an average score of at least 70%.</p>
    </div>
    
    
    </div>
    
    <div className={HIT.body3}>
    <div className={HIT.flex}>
    
    
    <div>
	<div className={HIT.circle_main1}>
	<div className={HIT.circle_text_container}>
	<div className = {HIT.circle_text}>3</div>
	</div>
	</div>
    </div>
    
<p>{text3.text3}</p>

    </div>
    </div>

    
    <div className={HIT.body4}>
    <div className={HIT.flex}>

    <div>
	<div className={HIT.circle_main4}>
	<div className={HIT.circle_text_container}>
	<div className = {HIT.circle_text2}>4</div>
	</div>
	</div>
    </div>
    
    <div >
<div className = {HIT.margin2}><p>{text4.text4}</p></div>
    {/* <p>The fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 installments of PKR 3,000, before the start of each quarter.</p> */}
    {/* <p>The fee struture for distance learning students is PKR 500 per month for 12 months, payable in 4 installments of PKR 1,500, before the start of each quarter.</p> */}
    </div>
    
    </div>
    </div>


    <div className={HIT.body3}>
    <div className={HIT.flex}>
    
    
    <div className={HIT.circle_container}>
	<div className={HIT.circle_main1}>
	<div className={HIT.circle_text_container}>
	<div className = {HIT.circle_text}>5</div>
	</div>
	</div>
    </div>
    
<p>{text5.text5}</p>

    </div>
    </div>


    <div className={HIT.body5}>
    <div className={HIT.flex}>

    <div className={HIT.circle_container}>
	<div className={HIT.circle_main5}>
	<div className={HIT.circle_text_container}>
	<div className = {HIT.circle_text2}>6</div>
	</div>
	</div>
    </div>
    
<p>{text6.text6}</p>
    
    </div>
    </div>


    <div className={HIT.body6}>
    <div className={HIT.flex}>

    <div className={HIT.circle_container}>
	<div className={HIT.circle_main1}>
	<div className={HIT.circle_text_container}>
	<div className = {HIT.circle_text}>7</div>
	</div>
	</div>
    </div>
    
    <div>
<p>{text7.text7}</p>
    {/* <p>Please note we are closed on Fridays.</p>
    <p>For technical questions related to coursework, you may contact us via email at education@piaic.org.</p> */}
    </div>
    
    </div>
    </div>

    
    
</Layout>

    );
};




export default Piaic;
export const pageQuery = graphql`
query itQuery {
    contentfulHowitworks {
      title
      smallText
      image {
        file {
          url
        }
      }
      text1 {
        text1
      }
      cities {
        Lahore
        Quetta
        Karachi
        Sialkot
        Peshawar
        Islamabad
        Faisalabad
      }
      text2 {
        text2
      }
      text3 {
        text3
      }
      text4 {
        text4
      }
      text5 {
        text5
      }
      text6 {
        text6
      }
      text7 {
        text7
      }
    }
  }
`;


