import { serve } from "https://deno.land/std@0.136.0/http/server.ts";

const requestHandler = (req:Request)=>{
    const {pathname:path} = new URL(req.url);
    switch(path){
        case "/color":
            const url = new URL(req.url);
            const color = url.searchParams.get('color');
            return new Response(JSON.stringify({color:color}));
        default:
            return new Response("Unknown path");
    }
    return new Response("Hola");
}

serve(requestHandler,{port:8080});

