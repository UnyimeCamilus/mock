import fotlogo from "../assets/fotlogo.svg";

const Footer = () =>{
    return(
        <footer className=" bg-[#222222] flex justify-evenly text-[#fff] font-light">
            <div>
                
                <img src={fotlogo} alt="" />
        
                <p className="w-72 text-sm pt-8 ">
                    Mocking by Jay is a major record
                    label that is mostly
                    focused on rap music. We manage loads of different artists
                    and therefore are quite a large company whose image is
                    changing constantly.
                </p>                                                       
            </div>
           
            <div>
                <p className="w-32  text-lg font-normal pt-6">
                    Careers
                   Contact
                   Privacy Policies
                   Artist Royalties</p>
            </div>
            <div className="w-8  text-lg font-normal pt-6">
                <h5>Connect</h5>
                <p >
                    LinkedIn
                    Twitter
                    Facebook
                    Instagram
                    Pinterest
                </p>
            </div>
        </footer>
    )
}
export default Footer