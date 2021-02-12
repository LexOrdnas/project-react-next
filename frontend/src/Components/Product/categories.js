
import './Product.css';

export default function Categories () {
    function DisplayCategory(category){
        let elements = document.getElementsByClassName('box_product');
        for(var i=0; i<elements.length; i++){
            if( category === elements[i].id )
                elements[i].style = 'display:inline-block';
            else
                elements[i].style = 'display:none';
        }
    }
    
    let ViewAll = () => {
        let elements = document.getElementsByClassName('box_product');
        for( var i=0; i<elements.length; i++){
            elements[i].style = 'display:inline-block';
        }
    }
    return (
        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 pt-5 text-center" >
            <section className="categories ml-5">
                <h3 className="text-danger mb-4">Categorias</h3>
                <ul className="list-group">

                    <li onClick={ViewAll} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> Todos
                    <span class="badge badge-danger badge-pill">12</span>
                    </li>

                    <li onClick={() => 
                        DisplayCategory('geladeira')} 
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> Geladeiras
                    <span class="badge badge-danger badge-pill">3</span>
                    </li>

                    <li onClick={() => 
                        DisplayCategory('fogao')} 
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> Fogões
                    <span class="badge badge-danger badge-pill">2</span>
                    </li>

                    <li onClick={() => 
                        DisplayCategory('microondas')} 
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> Micro-Ondas
                    <span class="badge badge-danger badge-pill">3</span>
                    </li>

                    <li onClick={() => 
                        DisplayCategory('lavaroupa')} 
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> Lavadora de roupas
                    <span class="badge badge-danger badge-pill">2</span>
                    </li>

                    <li onClick={() => 
                        DisplayCategory('lavalouca')} 
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> Lava-louças
                    <span class="badge badge-danger badge-pill">2</span>
                    </li>

                </ul>
            </section>
        </div>
       
    )
}