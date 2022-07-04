import './Card.css'


/** This is a useful Wapper Component. */
function Card (props) {
    /** This constant supports <Card> router */
    /** Anything received as a className from outside will be add for this string below.  */
    const classes = 'card ' + props.className; //String
    
    /** This .children content props from the router <Card> from file ExpenseItem.js  */
    /** When applied the "dinamic point {classes} makes the function works propely. */
    /** The important part of composition ("children props"). 
        It's allowed to create a wappers components wich is a speacial type of compenent. */
    /** Wapper Component */
    return <div className={classes}>{props.children}</div>;
}

export default Card;