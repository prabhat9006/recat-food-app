// @flow
import * as React from 'react';

export function Header(props) {
    const { searchValue, onInputChange, onSearchClick } = props

    return (
        <div className="jumbotron">

            <h1 className="display-2">
                <span className="material-icons brand-icon">
                    fastfood
                </span>
                Food Recipe </h1>
            <div className="input-group w-50 mx-auto">
                <input type="text" className="form-control" placeholder="Search Your Recipe..."
                    onChange={onInputChange}
                    value={searchValue} />
                <div className="input-group-append">
                    <button className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
                </div>

            </div>
        </div>
    );
};