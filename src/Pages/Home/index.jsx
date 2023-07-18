import React from "react";
import HomeLanding from "../../components/HomeLanding";
import Map from "../../components/Map";
import FAQ from "../../components/FAQ";
import Connect from "../../components/Connect";
import Testimonials from "../../components/Testimonials";
import BookForm from "../../components/BookForm";
import Spam from "../../components/Spam/spam";
import Featured from "../../components/Featured";
function Home(){
    return(
        <div>
            
        <HomeLanding/>
        <BookForm />
        <Featured />
        <Spam />
        <Testimonials />
        <FAQ />
        <Connect />
        <Map />
        </div>
    )
}
export default Home;