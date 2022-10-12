import React, {useState} from "react";
import axios from "axios";


 function Search() {
    // const [photo  , setPhoto]=useState("")
    // const [result  , setResult]=useState([])


    // const changePhoto=()=>{
    //     axios.get('https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=16Z46ZSCwGuywdcGtMb_8oTKC-J9Ir_PxRxubhixF_0')
    //     .then((response)=>{
            
    //         setResult(response.data.results);


    //     })
    // }
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`)
            .then((response) => {
                // console.log(response.data);
                setResult(response.data.results);
            })
    }
  return (
    <>
      <div className="form"> 
        <label className="label " htmlFor="query"> 
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input form-control"
          placeholder={`Enter Any Text....`}
          value={photo} 
          onChange={(e)=>{
            setPhoto(e.target.value)
          }}
        />
        <button type="submit" onClick={changePhoto} className="button btn btn-primary my-2">
          Search
        </button>
      </div>
      <div className="container">
                <div className="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-6">
                                    <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
                            </div>
                        )
                    })}
                </div>

            </div>
    </>
  );
}

export default Search;