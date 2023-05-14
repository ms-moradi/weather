
const Forecast =()=>{
    return(
        <Grid sx={{
            padding:'30px 0',
            display:'flex', 
            flexDirection:'column',
            }}>
            <Grid>
                <Typography sx={{color:'#fff', textAlign:"center", fontSize:{xs:'20px', sm:'40px'}}}>{nameCity}</Typography>
            </Grid>
            <Grid sx={{display:'flex',flexDirection:{xs:'column', sm:'row'}, justifyContent:'space-between', gap:'20px', padding:'30px 0'}}>
                {daysIndex.map(index => 
                <FutureDay key={index} index={index} cityWeatherFuture={cityWeatherFuture}/>
                )}
            </Grid>
        </Grid> 
    )
}

export default Forecast;