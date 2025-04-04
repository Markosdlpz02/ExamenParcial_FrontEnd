import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"



export const Handler:Handlers = {
    
    GET:async(_req,ctx) => {

        const {pais} = ctx.params;

        try{
            const response = await Axios.get(`https://api.api-ninjas.com/v1/country?name=${pais}`,
                {
                    headers:{
                        'X-Api-Key': 'BIhfa2Q3YTDVlaMuvv6ePw==ULuzpXYVTBICxOyp'
                    }
                }
            );

            const capital = response.data.capital

            return ctx.render(capital)

        }catch(_e){
            return new Response("Fallo en la llamada a la API");
        }
        
    }
}

export default function Page(props:PageProps) {

    return (
      <div>
        <p>Nombre del pais</p> 
        <a>Capital:</a>
      </div>
    );
  }