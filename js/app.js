function iniciarApp() {

    const selectCategorias = document.querySelector( '#categorias' );
    selectCategorias.addEventListener( 'change', seleccionarCategoria );

    obtenerCategorias();

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch( url )
            .then( respuesta => respuesta.json() )
            .then( resultado => mostrarCategorias( resultado.categories ) )

    }

    // Función que se encarga de listar las categorías en el option del HTML
    function mostrarCategorias( categorias = [] ) {
        categorias.forEach( categoria => {
            const { strCategory } = categoria;
            const option = document.createElement( 'OPTION' );
            option.value = strCategory;
            option.textContent = strCategory;
            selectCategorias.appendChild( option );
        } )
    }

    // Función que se encarga de mostrar las categorías en el HTML
    function seleccionarCategoria( e ) {
        const categoria = e.target.value;
    }

}

document.addEventListener( 'DOMContentLoaded', iniciarApp );
