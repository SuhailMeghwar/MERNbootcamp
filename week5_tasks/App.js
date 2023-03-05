// import "//App.css"
// import react from "react";
import Employee from "./Employee"
import Question1 from "./Question1"
import TitleComponent from "./titles"
function App()
{
    
    // let name="Qarab";
    return(
        <>
       <Thumbnail title="Movie 1" duration="5:00" url="https://burst.shopifycdn.com/photos/fog-on-dark-waters-edge.jpg?width=1200&format=pjpg&exif=1&iptc=1" />
       <Thumbnail title="Movie 2" duration="10:00" url="https://mcdn.wallpapersafari.com/medium/11/8/BHj8XS.jpg" />
       <Thumbnail title="Movie 2" duration="10:00" url="https://i.aaj.tv/primary/2022/12/081555292c80a75.jpg" />
       <Question1 message="Hello jii"/>
        <Employee name="Qarab" age={24} email="Qarab.naqvi723@gmail.com"/>
        <Employee name="Shehroz" age={24} email="shehrozK@gmail.com"/>
        <Employee name="Usama" age={24} email="usamak@gmail.com"/>
        <Employee name="Saad" age={25} email="saad@gmail.com"/>
        </>
    )
}

const Thumbnail=(props)=>{
    return(
        <>
        <h1> Title :{props.title}</h1>
        <h1> Vedio Length : {props.duration}</h1>
        <img src= {props.url}/>  // img tag  is lazmi for image
       
        
        </>
    )
}

export default App;