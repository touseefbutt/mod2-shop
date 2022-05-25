const React = require("react");
const Layout = require("./layout/default-layout")
// let shopBG = require("../pic/shopbg.jpeg")

class shop extends React.Component {
    render() {
        const shop = this.props.shop;
        return (
            <Layout title="Shop Page">
                <h1 class="text-center mx-4">Floral Shop</h1>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="card img-thumbnail rounded">
                                <img src="/bgshop.jpg" class="card-img-top " alt="Flower Bucket" />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Flower Bucket</h5>
                                    <p class="card-text">Price <span class="fw-light">$25.99</span></p>
                                    <p class="card-text">Quantity:<span class="fw-light"> 5 </span></p>
                                    <a href="/shop/product" class="btn btn-primary">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                    <button type="button" class="btn btn-light mx-4"><a href="/shop/register">Register New Product</a></button>
                    </div>
                </div>


            </Layout>
        )
    }
}

module.exports = shop;