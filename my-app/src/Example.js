import React, { Component } from 'react';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    item: {
        width: '25%',
        border: '3px solid red',
        margin: '50px'
    }
}
class Sample extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={{ border: "1px solid black" }}> <img src="http://www.homedepot.com/catalog/productImages/1000/01/01a25c14-92f6-4abd-92d0-47aa2d62a7dc_1000.jpg" className="img" alt="img" /><br /><p>1.Number one washing Machine.<br />
                     <br /> 
                    </p><a href="https://www-ssl.bestbuy.com/cart"><button> Add to Cart </button></a> </div>

                <div style={{ border: "1px solid black" }}> <img src="http://images.samsung.com/is/image/samsung/p5/my/washing-machines/washer-2.png?$ORIGIN_PNG$" className="img" alt="img" /><br></br><p>1.Number one washing Machine.<br />
                    2.Buy One Get One Free!. <br /> 3. Hurry Up ! Offer Until THis December. <br />
                    </p><a text-align="center" href="https://www-ssl.bestbuy.com/cart"><button> Add to Cart </button></a></div>
                <div style={styles.text}></div>
                <div style={{ border: "1px solid black" }}> <img src="https://www.whirlpool.eu/digitalassets/Picture/web1000x1000/859200943010_1000x1000_perspective.jpg" className="img" alt="img" /><br></br><p>1.Number one washing Machine.<br />
                    2.Buy One Get One Free!. <br /> 3. Hurry Up ! Offer Until THis December <br />
                    .</p><a href="https://www-ssl.bestbuy.com/cart"><button> Add to Cart </button></a></div>
                <div style={{ border: "1px solid black" }}><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/LGwashingmachine.jpg" className="img" alt="img" /><p>1.Number one washing Machine.<br />
                    2.Buy One Get One Free!. <br /> 3. Hurry Up ! Offer Until THis December <br />
                    </p><a href="https://www-ssl.bestbuy.com/cart"><br></br><button> Add to Cart </button></a></div>
                    <div style={{ border: "1px solid black" }}> <img src="https://mobileimages.lowes.com/product/converted/887276/887276962986.jpg" className="img" alt="img" /><p>1.Number one washing Machine.<br />
                    2.Buy One Get One Free!. <br /> 3.Hurry Up ! Offer Until THis December. <br />
                    </p><a href="https://www-ssl.bestbuy.com/cart"><br /><button> Add to Cart </button></a> </div>
                <div style={{ border: "1px solid black" }}><img src="http://www.homedepot.com/catalog/productImages/1000/d2/d2a54491-c9ba-494d-b249-faf0c18ea51e_1000.jpg" className="img" alt="img" /><br /><p>1.Wash your clothes with this Amana top-load washer.<br />
                 <br />  <br />
                    </p><a href="https://www-ssl.bestbuy.com/cart"><button> Add to Cart </button></a></div>


                <div style={styles.img}></div>
                <div style={styles.img}></div>
                <div style={styles.img}></div>


                </div>
            
        )
    }
}

export default Sample;
