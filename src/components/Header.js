import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'

class Header extends Component{
    render(){
        return(
            
                <div className='flex pa1 justify-between nowrap orange'>
                    <div className='flex flex-fixed black'>
                        <div className='fw7 mr1'>Hacker News</div>
                            <Link
                                to = '/'
                            >
                            new
                            </Link>                
                <div className ='ml1'>|</div>
                <Link
                    to = '/create'
                >
                    submit
                </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)