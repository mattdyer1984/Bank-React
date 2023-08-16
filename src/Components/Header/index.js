import "./header.css"

function Header(props) {
    return (
        <div className="header">
           <div> 
            Trustworthy Bank Plc
            </div>
            <div>
            Balance:{props.balanceProp}
            </div>
        </div>
    )
}
export default Header