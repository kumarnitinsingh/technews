import React from 'react';
import Card1 from './Card1'

const CardList1 =({articles1})=>{
	return(
		<div>
	{articles1.map((news,i)=>{
		return (
			<Card1
			 key={i}
			  id ={articles1[i].source.id}
			   name ={articles1[i].source.name}
			    author={articles1[i].author}
			    title={articles1[i].title}
			    url={articles1[i].url}
			    urlToImage={articles1[i].urlToImage}
			    publishedAt={articles1[i].publishedAt}
			    content={articles1[i].content}
			    description={articles1[i].description}
			    />
			);
	})
	
}

</div>
);
}


export default CardList1;