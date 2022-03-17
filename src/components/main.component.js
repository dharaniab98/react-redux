import { connect } from "react-redux"

import { buyMobile, addMobile} from "../redux/mobile/actions" 
const Main = (props) => {

    let mobileDetails = props.mobiles.details.map(obj => {
        return <li> <span> {obj.name}</span> <span> {obj.price}</span> </li>
    }) 

    // let addMobile = ()=> {
    //     return {
    //         name:"micromax", 
    //         price:"1000", 
    //         status:"Available", 
    //         stock:50
            
    //     }
    // }

    return (
        <div>
            <h1>
                Mobile Store
            </h1>
            <div>
                <div>
                   {props.mobiles.numberOfMobiles}
                   {mobileDetails}
                </div>
                <button onClick ={props.addMobile}> Add Mobile</button>
                <button onClick = {props.buyMobile}> Buy Mobile</button>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {

    return {
        mobiles: state.mobiles
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMobile: () => {dispatch(addMobile({name:"micromax60",price:"1000" }))},
        buyMobile: () => {dispatch(buyMobile())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)

