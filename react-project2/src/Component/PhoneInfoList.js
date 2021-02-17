import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

export default class PhoneInfoList extends Component {

    static defaultProps = {
        data : [],
        onRemove : () => console.warn('onRemove not define'),
    }



    render() {

        const {data, onRemove} = this.props;
        
        //if(!data) return null;

        const list = data.map( 
            info => ( <PhoneInfo 
                info={info} 
                key={info.id} 
                onRemove={onRemove}
                /> )
        )

        return (
            <div>
                {list}
            </div>
        )
    }
}
