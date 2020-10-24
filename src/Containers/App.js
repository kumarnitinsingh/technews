import React,{Component} from 'react';
import CardList from '../Components/CardList';
import CardList1 from '../Components/CardList1';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import'./App.css';
import ErrorBoundary from '../Components/ErrorBoundary'

class App extends Component{
	constructor(){
		super()
		this.state={
			articles:[],
			articles1:[],
			searchfield:''
		}
		
	}


componentDidMount(){


Promise.all([fetch('http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=374e559cb5c74f888ef70ececa968ad1'),fetch('http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=374e559cb5c74f888ef70ececa968ad1')])
	.then(([res1,res2])=>{
		return Promise.all([res1.json(),res2.json()])
	})
	.then(([res1,res2])=>{
		
		this.setState({
			articles:res1.articles,
			articles1:res2.articles

		})
		
	})



}


	
	

onSearchChange =(event)=>{
	this.setState({searchfield:event.target.value})
}
render(){


	const filteredNews=this.state.articles.filter(articles=>{
		return articles.source.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})


	const filteredNews1=this.state.articles1.filter(articles1=>{
		return articles1.source.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})
	
	return(
		<div className='tc'>
		<h1 className='f1'>TECH HEADLINES</h1>
		
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<ErrorBoundary>
		<h1 className='f3'>India's Tech News</h1>
		<CardList articles={filteredNews}/>
		<h1 className='f3'>USA's Tech News</h1>
		<CardList1 articles1={filteredNews1}/>
		</ErrorBoundary>
		</Scroll>
		<footer className='f3'>Powered by @<a href="https://www.linkedin.com/in/nitin-kumar-singh-a744511a8">Nitin Kumar Singh</a></footer>
		</div>

		);

}	
}
export default App;