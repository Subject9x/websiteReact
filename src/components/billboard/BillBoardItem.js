import React, {Component} from 'react';

/*
WebsiteReact
Peter Roohr
Overview:
    A BillBoardItem is a set of components that is the billboard
    thumbnail for project
    title of project
    short description
    link to project?
    and action link to project listing
*/

class BillBoardItem extends Component{
    render(){
        return(
            <div>
                <div>
                    left button
                </div>
                <div>
                    content
                </div>
                <div>
                    right button
                </div>
            </div>
        );
    }
}

export default BillBoardItem;