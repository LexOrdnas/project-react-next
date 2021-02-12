import OrderList from '../Components/Request';

export default function Requests() {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <form method="post" className="formContacts w-50">

                    <div className="form-group">
                        <label>Cliente</label>
                        <input className="form-control" name="nameClient"type="text" />
                    </div>

                    <div className="d-flex justify-content-center py-3 mb-3">
                        <input className="enviar bg-danger text-white btn" type="submit" />
                    </div>
                    
                </form>
            </div>   

        <section className=" container d-flex justify-content-center">
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <OrderList />
                </div> 
        </section>

        </div>
    )       
}