
import DialogSearch from "../dialogSearch/dialogSearch";
import Grid from "@mui/material/Grid";
import InputBase from '@mui/material/InputBase';



const Search =({setSearch, search, selectCity, setSelectCity})=>{
    return(
        <Grid>
            <InputBase sx={{borderBottom:'2px solid #fff',color:'#fff',padding:'0 15px'}} value={search} onClick={handleOpenDialogSearch}/>
            <DialogSearch openDialogSearch={openDialogSearch} setOpenDialogSearch={setOpenDialogSearch} selectCity={selectCity} setSelectCity={setSelectCity} setSearch={setSearch}/>
        </Grid>
    )
}

export default Search;