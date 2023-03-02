import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './PaymtCard.module.css';

function PaymtCard(props) {
  return (
    <Card className={`mt-1 ${classes.pcards}`}>
      <Card.Img variant="top" className={classes.logo} src="https://i.ibb.co/ftkmQvB/De-Pay-removebg-preview.png"  alt="logo" border="0" />
      <Card.Body>
        <div className={classes.details}>
            <Card.Title>ADDRESS:</Card.Title>
            <Card.Text className={classes.head}>
                <p>{props.address}</p>
            </Card.Text>
        </div>
        <hr className={classes.mar}></hr>
        <div className={classes.details}>
        <Card.Title>AMOUNT:</Card.Title>
        <Card.Text className={classes.head}>
            <p>{props.amount} WEI</p>
        </Card.Text >
        </div>
        <hr className={classes.mar}></hr>
        <div className={classes.details}>
        <Card.Title>AMOUNT USED:</Card.Title>
        <Card.Text className={classes.head}>
            <p>{props.used} WEI</p>
        </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PaymtCard;