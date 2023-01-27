import Head from "next/head"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Link from "next/link"
import SliderComponent from "../utils/Slider"
import Body from "../utils/Body"



export default function Home() {
  
 
  return (
   <div className="overflow-hidden">
    <SliderComponent />
    <Body />
    
   </div>
    )
}
