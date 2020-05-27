import React from 'react';
import Plan1 from '../images/Plan1.png';
import Plan2 from '../images/Plan2.png';
import Plan3 from '../images/Plan3.png';
import Plan4 from '../images/Plan4.png';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OpenModal from './OpenModal';

class PlanPage extends React.Component {

    constructor(props)
    {
        super(props);
        this.handleCart = this.handleCart.bind(this);
        this.checkOutCart = this.checkOutCart.bind(this);
        this.clearCart = this.clearCart.bind(this);
        this.state = {
            cartPlan : '',
            cartValue : 0,
            month : undefined,
            isModalOpen : false,
            billamt : 0
        }
    }
    clearCart = () => {
        this.setState (() => {
            return {
                cartPlan : '',
                cartValue : 0,
                month : undefined,
                isModalOpen : false,
                billamt : 0
            }
        })
    }
    
    checkOutCart = () => {
            var amt = this.state.cartValue;
            var mnth = this.state.month;
            console.log(amt,mnth);
            var final = amt*mnth;
            console.log(final);
            this.setState(() => {
                return {
                    isModalOpen : true,
                    billamt : final
                }
            })
    }
    
handleChange = (e) => {
    this.setState({
      month: e.target.value
    })
  }

    handleCart = (e) => {
        const val = e.target.value;
        switch (val)
        {
       case '1' :  this.setState(() => {
                     return{
                         cartPlan : '190 Channels (Americas Top 120)',
                         cartValue: 59.99
                     }
                     })
                     break;
        case '2' : this.setState(() => {
                    return{
                         cartPlan : '190+ Channels (Americas Top 120 plus)',
                         cartValue: 74.99
                       }
                 })
                 break;
         case '3' :  this.setState(() => {
                    return{
                        cartPlan : '240+ Channels (Americas Top 200)',
                        cartValue: 84.99
                    }
                    })
                    break;
       case '4' : this.setState(() => {
                   return{
                        cartPlan : '290+ Channels (Americas Top 250)',
                        cartValue: 94.99
                      }
                })
                break;
        default : this.setState(() => ({ cartPlan:'',cartValue:0}))
    }
    
    }
    render()
    {
        return(
            <div>
            <h1>Available Plans</h1>
            <div>
            <CardDeck className="cardDeckStyle">
                <Card className="cardStyle">
                <Card.Img variant="Top" src={Plan1} />
                <Card.Body>
                <Card.Title>Plan 1</Card.Title>
                <Card.Text>Plan 1 - 190 Channels (America's Top 120)</Card.Text>
                </Card.Body>
                <Button className="divbutton" value="1" id="p1" onClick={e => this.handleCart(e)}>Add to Cart</Button>
                </Card>
                <Card className="cardStyle">
                <Card.Img variant="Top" src={Plan2} />
                <Card.Body>
                <Card.Title>Plan 2</Card.Title>
                <Card.Text>Plan 2 - 190+ Channels (America's Top 120 Plus)</Card.Text>
                </Card.Body>
                <Button className="divbutton" value="2" id="p1" onClick={e => this.handleCart(e)}>Add to Cart</Button>
                </Card>
                <Card className="cardStyle">
                <Card.Img variant="Top" src={Plan3} />
                <Card.Body>
                <Card.Title>Plan 3</Card.Title>
                <Card.Text>Plan 3 - 240+ Channels (America's Top 200)</Card.Text>
                </Card.Body>
                <Button className="divbutton" value="3" id="p1" onClick={e => this.handleCart(e)}>Add to Cart</Button>
                </Card>
                <Card className="cardStyle">
                <Card.Img variant="Top" src={Plan4} />
                <Card.Body>
                <Card.Title>Plan 4</Card.Title>
                <Card.Text>Plan 4 - 290+ Channels (America's Top 250 )</Card.Text>
                </Card.Body>
                <Button  className="divbutton" value="4" id="p1" onClick={e => this.handleCart(e)}>Add to Cart</Button>
                </Card>
            </CardDeck>
            </div>
            <div className="cartCardStyle">
            <h2>Cart Details : </h2>
            <h2>Selected Plan Name :  {this.state.cartPlan }</h2>
            <h2>Total Cart Amount: {this.state.cartValue}</h2>
           <h3>Months : <input type="number" id="quantity" name="month" min="1" max="12" onChange={this.handleChange} /></h3>
            <Button className="divbutton" onClick={this.checkOutCart}>Checkout</Button>
            <Button className="divbutton" onClick={this.clearCart}>Empty Cart</Button>
            </div>
            <OpenModal 
            isModalOpen = {this.state.isModalOpen}
            cartPlan = {this.state.cartPlan} 
            cartValue = {this.state.cartValue}
             billamt = {this.state.billamt}
            clearCart={this.clearCart}/>
            </div>
        )
    }
}

export default PlanPage;