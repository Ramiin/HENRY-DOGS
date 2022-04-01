import React from 'react'

export default function Home(){
    return(
        <div>
            Soy el componente Home :)
            Debe tener:
            <ul>
                <li> Input de búsqueda para encontrar razas de perros por nombre</li>
                <li>Área donde se verá el listado de razas de perros. Deberá mostrar su:
Imagen
Nombre
Temperamento
Peso</li>
                <li>Botones/Opciones para filtrar por:
Temperamento
Raza existente (es decir las que vienen de la API) o agregada por nosotros (creadas mediante el form)</li>
                <li>Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por:
Orden alfabético
Peso</li>
                <li>Paginado para ir buscando y mostrando las siguientes razas, mostrando 8 razas por página.</li>
            </ul>
        </div>
    )
}