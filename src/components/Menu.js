
import Card from "./Card"
const Menu = ()=>{
    return(
        <>
       { [1,2,3,4,5].map((res)=> {return (<Card />)} )}
        </>
    )
}
export default Menu