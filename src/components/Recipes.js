// @flow
import * as React from 'react';

export function Recipes(props) {
    const { recipes } = props;
    return (
        <div className="card-columns">
            {recipes && recipes.length == "0" ? <h1>No Recipe !!</h1> :
                recipes.map((item, id) => (
                    
                        <div className="card py-2 text-center" key={id + 1}>
                            <img src= {item.strMealThumb} className="img-fluid w-50 mx-auto rounded-circle " />
                            <div className="card-body">
                                <h5>{item.strMeal}</h5>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item">{item.strIngredient1}</li>
                                <li className="list-group-item">{item.strIngredient2}</li>
                                <li className="list-group-item">{item.strIngredient3}</li>
                                <li className="list-group-item">{item.strIngredient4}</li>
                            </ul>
                        </div>
                ))
            }
        </div>
    );
};