const React = require("react");
const Layout = require("./layout/default-layout")

class shop extends React.Component {
    render() {
        const { shop } = this.props;
        return (
            <Layout title="Shop Page">
                <h1 className="text-center mx-3">Floral Shop</h1>
                <div className="container">
                    <div className="row">
                        <ul className="d-inline-flex p-2 flex-wrap">
                            {
                                shop.map(myshop => {
                                    return (
                                        <li className="card img-thumbnail mx-2 mt-2" key={myshop._id}>
                                            <img src="/pic/shopImg.jpg" className="card-img-top " alt="Flowers Image" />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">{myshop.pname}</h5>
                                                <p className="card-text">Price <span className="fw-light">${myshop.pprice}</span></p>
                                                <p className="card-text">Quantity:<span className="fw-light"> {myshop.pstock} </span></p>
                                                <a href={`/shop/product/${myshop._id}`} className="btn btn-primary stretched-link">Buy Now</a>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <button type="button" className="btn btn-light mx-4 text-dark"><a href="/shop/register">Register New Product</a></button>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = shop;