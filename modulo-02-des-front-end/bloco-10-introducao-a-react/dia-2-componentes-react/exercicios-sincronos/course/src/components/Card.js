import React from 'react';
import PropTypes from 'prop-types';
//QUERO RECEBER INFORMACOES

class Card extends React.Component {
    render(){
        //PROPS => OBJETO
        const {itemInfo} = this.props
        const {imageUrl, name, title} = itemInfo;

        //const {itemInfo : {imageUrl, name, title}} = this.props;
        return(
          <article>
            <img src={imageUrl}/>
            <h3>{name}</h3>
            <h2>{title}</h2>
          </article>
        )
    }
}

Card.propTypes = {
    itemInfo: PropTypes.shape({
        imageUrl: PropTypes.string,
        name: PropTypes.string,
        title: PropTypes.string
    })
}

export default Card;