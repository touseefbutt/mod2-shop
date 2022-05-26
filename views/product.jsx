const React = require("react");
const Layout = require("./layout/default-layout")

class product extends React.Component {
    render() {
        return(
            <Layout title="Product Page">
                <h1 className="text-center">Product Page</h1>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        </div>
                        <div className="col">
                        <div class="card img-thumbnail rounded">
                                <img src="/bgshop.jpg" class="card-img-top " alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title">Rose Flowers</h5>
                                    <p class="card-text">Price <span class="fw-light">$25.99</span></p>
                                    <p class="card-text">Quantity:<span class="fw-light"> 5 </span></p>
                                    <a href="/shop" class="btn btn-primary">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
module.exports = product