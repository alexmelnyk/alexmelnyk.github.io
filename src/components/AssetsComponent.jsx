import React from 'react';
import { connect } from 'react-redux';
import { setSortType, setFilterType } from '../app/appActions';

import { FavouriteAssets, Assets } from './Assets.jsx';

export class AssetsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.renderAssets = this.renderAssets.bind(this);
        this.setSortType = this.setSortType.bind(this);
        this.setFilterType = this.setFilterType.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
        this.addToFavourites = this.addToFavourites.bind(this);
        this.setupStorage();
    }

    setupStorage() {
        this.storage = window.localStorage;
        if (!this.storage.getItem('favouriteIds')) {
            this.storage.setItem('favouriteIds', 'ids,')
        };
    }

    setSortType(e) {
        this.props.setSortType(e.target.value);
    }

    setFilterType(e) {
        const filterType = e.target.innerHTML;
        const filterName = e.target.getAttribute("data-name");
        this.props.setFilterType(filterType, filterName);
    }

    removeFilter() {
        this.props.setFilterType('default', 'default');
    }

    addToFavourites(e) {
        let ids = this.storage.getItem('favouriteIds');
        ids = ids + e.target.getAttribute("data-id") + ',';
        this.storage.setItem('favouriteIds', ids);
    }

    renderAssets() {
        let assets = this.props.assets;
        let ids = this.storage.getItem('favouriteIds').split(',');
        
        assets = assets.filter(item => {
            return !ids.includes(item.id.toString());
        });

        assets = assets.map((asset) => {
            return (
                <tr key={asset.id}>
                    <td onClick={this.setFilterType} data-name="id">{asset.id}</td>
                    <td onClick={this.setFilterType} data-name="assetName">{asset.assetName}</td>
                    <td onClick={this.setFilterType} data-name="price">{asset.price}</td>
                    <td onClick={this.setFilterType} data-name="lastUpdate">{asset.lastUpdate}</td>
                    <td onClick={this.setFilterType} data-name="type">{asset.type}</td>
                    <td>
                        <button onClick={this.addToFavourites} data-id={asset.id}>add to favourites</button>
                    </td>
                </tr>
            )
        });

        return <Assets assets={assets}/>
    }

    renderFavouritesAssets() {
        let ids = this.storage.getItem('favouriteIds').split(',');

        let assets = this.props.assets.filter(item => {
            return ids.includes(item.id.toString());
        });

        assets = assets.map(asset => {
            return (
                <tr key={asset.id}>
                    <td>{asset.id}</td>
                    <td>{asset.assetName}</td>
                    <td>{asset.price}</td>
                    <td>{asset.lastUpdate}</td>
                    <td>{asset.type}</td>
                </tr>
            )
        });

        return <FavouriteAssets assets={assets}/>
    }

    render() {
        return (
            <div>
                {this.renderFavouritesAssets()}
                <select onChange={this.setSortType}>
                    <option selected value ="default" disabled>Sort by</option>
                    <option value="id">id</option>
                    <option value="assetName">assetName</option>
                    <option value="price">price</option>
                    <option value="lastUpdate">lastUpdate</option>
                    <option value="type">type</option>
                </select>
                <button onClick={this.removeFilter}>remove filter</button>
                <p>Click on field to filter</p>
                {this.renderAssets()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        assets : state.assets
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSortType: (type) => {
            dispatch(setSortType(type));
        },
        setFilterType: (type, name) => {
            dispatch(setFilterType(type, name));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssetsComponent)