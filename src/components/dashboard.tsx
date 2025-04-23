"use client"
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { AreaChartHero } from './AreaChartHero';

export const Dashboard = () =>{

    const [datos,setDatos] = useState<object>({});

    useEffect(()=>{
        datosRequest();
    },[]);

	const datosRequest = async () : Promise<void> => {
		await axios.get("http://localhost:1880/misdatos").then((response:any) =>{
            setDatos(response.data.datos);
            console.debug(response.data.datos);
		}).catch((err) => {
			console.debug("[ERROR]", err);
		});
	}

    return (
        <>
            <h1 className="text-3xl font-bold underline">Datos del backend</h1>
            <p>{JSON.stringify(datos)}</p>
            <AreaChartHero/>
        </>
    );
}