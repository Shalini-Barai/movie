import React ,{useState}from 'react';
import "./App.css";
import Card from "./Components/Card";

const App = () => {	  
	const [searchTitle, setSearchTitle] = useState("");
	const [data,setData]=useState([]);
	const [showComponent, setShowComponent] = useState(false);
	
    const ApiKey=`94bbf794`;

	//useEffect(() => {getPostsData();}, [searchTitle]);
	
	const getPostsData = () => {
		//console.log("ST is ",st);
		try{
		//fetch(`https://www.omdbapi.com/?apikey=${ApiKey}&s=${searchTitle}`)
		fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=94bbf794`)
			.then((resp) => resp.json())
			.then((dt)=>{
			//console.log("Data are : ",dt);
			setData(dt);
			
		});
	}catch(error){
		console.log(error)
	}  
		};	
		
		getPostsData();
	const handleChange=(e)=>{
		
		setSearchTitle(e.target.value);
		console.log(e.target.value);
		console.log(data.imdbID);
		if(e.target.value===data.Title){
		 console.log("match kar raha he");
		 setShowComponent(true);
		}
		else{
		 console.log("NO");
		}
	
	}   


   
   
  return (
	
	<div className="App">
      <h1>Movies App</h1>
	  <hr/>
	  <h2>Search For Movies By Their Title</h2>
	  <div className="input-container">
	 <input placeholder='Search' type="text" name="search" value={searchTitle} onChange={handleChange}></input>
	 <br/><br/>
	 <button className="btn" onClick={handleChange}>Search Now!</button>

	 
	 </div>
	 {showComponent && <Card
			key="1"
			type={data.Type}
			title={data.Title}
			year={data.Year}
			imgUrl={data.Poster}
		 imdbID={data.imdbID} 
		  />}
	
   
	</div>
	//</BrowserRouter>
  )
}

export default App;
