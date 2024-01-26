import React from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('componente actualizado')

        const intervalID= setInterval(() =>{
            document.title=`${new Date}`
            console.log('actualizar el cierre del componente')
        }, 1000)
        
        return () => {
            console.log('componente va desapareces')
            document.title = 'el tiempo se ha detenido'

            clearInterval(intervalID)
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
