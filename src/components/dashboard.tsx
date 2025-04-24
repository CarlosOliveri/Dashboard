"use client"
import React,{useState,useEffect} from 'react';
import "../styles/dashboardStyles.css";
import axios from 'axios';
import { AreaChartHero } from './AreaChartHero';
import { BarChartHero } from './BarChartHero';
import {TemperatureChart} from './TemperatureChart';
import { LineChartHero } from './LineChartHero';
import { DonutChartHero } from './DonutChartHero';

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
        <section className="dashboard-container">
            <h1 className="text-3xl font-bold underline">Datos del backend</h1>
            <p>{JSON.stringify(datos)}</p>
            <article className='dash-art'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AreaChartHero/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <LineChartHero/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <BarChartHero/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <TemperatureChart/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <DonutChartHero/>
                </div>
            </article>
        </section>
    );
}