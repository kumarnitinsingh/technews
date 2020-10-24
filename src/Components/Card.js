import React from 'react';

const Card= ({id,name,author,title,description,url,urlToImage,publishedAt,content}) => {
	
return(

	<div className=' tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
	<img alt='newsImage' src={urlToImage}/>
	<div>
		<h2>{name} by {author}</h2>
		<h3>{title}</h3>
		<h4>{publishedAt}</h4>
		<p>{description}</p>
		<p>{content}</p>
		<a href={url}>view full</a>
	</div>
    

	</div>
);

}
export default Card;
