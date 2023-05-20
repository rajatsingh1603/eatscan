import Card from "./Card"
var menu = [
    {
      id: 1,
      name: "Hamburger",
      price: 699,
      img: "https://media.cnn.com/api/v1/images/stellar/prod/220428140436-04-classic-american-hamburgers.jpg?c=original"
    },
    {
      id: 2,
      name: "Pizza",
      price: 999,
      img: "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
    },
    {
      id: 3,
      name: "French Fries",
      price: 499,
      img: "https://www.awesomecuisine.com/wp-content/uploads/2009/05/french-fries.jpg"
    },
    {
      id: 4,
      name: "Chicken Nuggets",
      price: 849,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Chicken_Nuggets.jpg/800px-Chicken_Nuggets.jpg"
    },
    {
      id: 5,
      name: "Ice Cream",
      price: 599,
      img: "https://www.milkmaid.in/sites/default/files/2020-07/Chocolate-Ice-Cream_0.jpg"
    }
  ];
const Menu = ()=>{
    return(
        <>
       {/* { [1,2,3,4,5].map((res)=> {return (<Card />)} )} */}
       {menu.map((item)=>{return (<Card item={item} />)})}
        </>
    )
}
export default Menu