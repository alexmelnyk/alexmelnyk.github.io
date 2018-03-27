import React from 'react';

export const FavouriteAssets = (props) => {
    return (
        <div>
            favourites:
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>assetName</th>
                        <th>price</th>
                        <th>lastUpdate</th>
                        <th>type</th>
                    </tr>
                </thead>    
                <tbody>
                    {props.assets}
                </tbody>
            </table>
        </div>
    )
}

export const Assets = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>assetName</th>
                    <th>price</th>
                    <th>lastUpdate</th>
                    <th>type</th>
                </tr>
            </thead>    
            <tbody>
                {props.assets}
            </tbody>
        </table>
    )
}