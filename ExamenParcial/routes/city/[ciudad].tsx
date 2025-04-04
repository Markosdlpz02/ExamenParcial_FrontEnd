import { Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"


export const Handler:Handlers = {
    
    GET:async(req,ctx) => {
        const {ciudad} = ctx.params;

        const responsePais = await Axios.get(`https://api.api-ninjas.com/v1/city?name=${ciudad}`, {

            headers:{
                'X-Api-Key': 'BIhfa2Q3YTDVlaMuvv6ePw==ULuzpXYVTBICxOyp'
            }
        })

        const latitud = responsePais.data.latitude;
        const longitud = responsePais.data.longitude;

        const responseTemperatura = await Axios.get(`https://api.api-ninjas.com/v1/weather?lat=${latitud}&&lon=${longitud}`, {

            headers:{
                'X-Api-Key': 'BIhfa2Q3YTDVlaMuvv6ePw==ULuzpXYVTBICxOyp'
            }
        })

        return ctx.render();

    }
}

export default function Page(props:PageProps) {

    return (
      <div>
        
        <p>Nombre ciudad:</p>
        <p>Pais:</p>
        <p>Temperatura:</p>
        
      </div>
    );
}


