import '../components/footer.css'
const Footer = ()=>{
    return(
        <>
        <div className="footer">
            <div className="total_price">
                <h2>Total:&nbsp;</h2>
                <h2 className='actual_price'> &#8377;16</h2>
            </div>
            <div className="next">
                
                {/* <button>Next</button> */}
               
                
                <h2>Next</h2>
            </div>
        </div>
        </>
    )
}
export default Footer