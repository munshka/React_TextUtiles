import React, {useState} from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState(
    //     {
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnStyle, setBtnStyle] = useState("Enable Dark Mode")

    // const toggleStyle=()=>{
    //     if (myStyle.color==='white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnStyle("Enable Dark Mode")
            
    //     }
    //     else {
    //     setMyStyle({
    //         color: 'white',
    //         backgroundColor: 'black'
    //     })
    //     setBtnStyle("Enable Light Mode")
    // }
    // }
    let myStyle={
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode ==='dark' ? '#28283a' : 'white',
 


    }

  return (

<>
<div className='container' style={myStyle}> 
    <h2 className='mx-2 my-2'>About Us</h2>
    <div className="accordion" id="accordionExample" style={myStyle}>  
    <div className="card" style={myStyle}> 
        <div className="card-header" id="headingOne">
        <h2 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Simplify Your Text Experience
            </button>
        </h2>
        </div>

        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div className="card-body" > 
        Our TextUtilities tool is designed to streamline your text management tasks with ease. Whether you need to convert text to uppercase or lowercase, clear your text, or copy it to the clipboard, our intuitive features make it effortless. Additionally, gain insights with detailed text summaries, word and character counts, estimated reading times, and a handy preview of your content—all in one place.
        </div>
        </div>
    </div>
    <div className="card" style={myStyle}>
        <div className="card-header" id="headingTwo">
        <h2 className="mb-0">
            <button className="btn btn-link collapsed"  type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Your Comprehensive Text Management Solution
            </button>
        </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
        <div className="card-body" style={myStyle}>
        TextUtilities offers a suite of powerful features to enhance your text handling experience. Effortlessly switch between uppercase and lowercase, clear or copy your text, and view detailed summaries. Keep track of word and character counts, and get an estimate of reading time to optimize your content consumption. The preview function ensures you always know exactly what you're working with.
        </div>
        </div>
    </div>
    <div className="card" style={myStyle}> 
        <div className="card-header" id="headingThree">
        <h2 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Elevate Your Text Handling Efficiency
            </button>
        </h2>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
        <div className="card-body" style={myStyle}>
        Discover the ultimate tool for managing your text with TextUtilities. From converting text cases to copying and clearing content, our tool covers all the basics. Dive deeper with features like text summaries, word and character counts, and estimated reading times. The preview function lets you see your text as it is, making it easier to handle and refine your content with precision.
        </div>
        </div>
    </div>
    </div>  
    {/* <div className='container'>
    <button type="button" onClick={toggleStyle} className="btn btn-primary mt-2">{btnStyle}</button>
    </div> */}
</div>
</>
  )
}
