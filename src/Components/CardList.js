import React from 'react';
import Card from './Card';

const CardList =({articles})=>{
	return(
		<div>
	{articles.map((news,i)=>{
		return (
			<Card
			 key={i}
			  id ={articles[i].source.id}
			   name ={articles[i].source.name}
			    author={articles[i].author}
			    title={articles[i].title}
			    url={articles[i].url}
			    urlToImage={articles[i].urlToImage}
			    publishedAt={articles[i].publishedAt}
			    content={articles[i].content}
			    description={articles[i].description}
			    />
			);
	})
	
}

</div>
);
}


export default CardList;