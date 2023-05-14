import React,{useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {handleGetFiveDayWeather} from "../../api/api";
import cities from "../../data/dataCities";
import CustomButton from "../../components/button/button";
import Forecast from "../../components/forecast/forecast";
import Grid from "@mui/material/Grid";


const SinglePageCity=()=>{
    const [cityWeatherFuture, setCityWeatherFuture] = useState({})  
    const {cityID} = useParams()

    const getNameCity = ()=>{
        for(let j=0 ; j<cities.length ; j++){
            if(Number(cityID) === cities[j].id){
                return(cities[j].name)
            }
        }
    }

    let nameCity = getNameCity()

    const handleGetData = async () => {
        const data = await handleGetFiveDayWeather(cityID).then(data => data.data.list)
        setCityWeatherFuture(data)
    }
    
    useEffect(() => {
        handleGetData()
    }, [])

    return(
        <Grid 
            sx={{
            width:'550px', 
            height:'450px',
            padding:'30px 0 0 0',
            borderRadius:'15px', 
            backgroundColor:'rgba(119,136,153, .3)',  
            display:'flex', 
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'center',
            }}>
            <Link to="/" style={{textDecoration:"none"}}>
                <CustomButton children={"بازگشت به صفحه اصلی"} borderRadius={'20px'}/>
            </Link>
            <Forecast cityWeatherFuture={cityWeatherFuture} nameCity={nameCity}/>
        </Grid>
    )
}
export default SinglePageCity;