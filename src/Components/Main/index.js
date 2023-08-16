import "./main.css"

function Main(props) {
   

    return(
<div className="container">
    <div>
    {props.balanceProp}
    </div>
    
    <div>
        <button onClick={props.withdrawProp}>Withdraw £10</button>
    </div>
    <div>

    </div>
      <div>
      <button className={props.themesProp} onClick={props.depositProp}>Deposit £10</button>
      </div>
</div>
    )
}
export default Main