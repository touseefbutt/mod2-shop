const React = require("react");
const Layout = require("./layout/default-layout")

class register extends React.Component {
    render() {
        return (
            <Layout title="Product Registration Page">
                <div class="container container-sm container-md">
                    <div class="row align-items-end">
                        <div class="col">
                        </div>
                        <div class="col text-bg-light card">
                            <h3 class="text-uppercase text-secondary">Product Registration Page</h3>
                            <form action="/shop" method="POST">
                                <div class="mb-3">
                                    <label htmlFor="pName" className="form-label text-secondary">Product Name</label>
                                    <input type="text" class="form-control border border-secondary shadow-sm" id="pName"
                                        name="pName" placeholder="Enter Product Name" />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="pPrice" className="form-label text-secondary">Product Price</label>
                                    <input type="text" class="form-control border border-secondary shadow-sm" id="pPrice"
                                        name="pPrice" placeholder="Enter Product Price" />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="pStock" className="form-label text-secondary">Product Stock</label>
                                    <input type="text" class="form-control border border-secondary shadow-sm" id="pStock" name="pStock" placeholder="Enter Product Stock" />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="pImage" className="form-label text-secondary">Product Image</label>
                                    <input class="form-control border border-secondary shadow-sm" type="file" id="pImage" name="pImage"/>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" className="btn btn-outline-success form-control" value = "Register Product">Register Product</button>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" className="btn btn-outline-secondary form-control" value = "Register Product">Edit Product</button>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" className="btn btn-outline-danger form-control" value = "Register Product">Delete Product</button>
                                </div>
                                
                            </form>
                        </div>
                        <div class="col">
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

}

module.exports = register;