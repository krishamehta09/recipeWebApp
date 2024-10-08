import React from "react";


const Header = (props) => {
    const { search, onInputChange, onSearchClick}= props;
    return (
        <div className="jumbotron">
            <h1 className="display-1">
            <i className="material-icons brand-icon">fastfood</i>
                {/* <span class="material-icons brand-icon">FastFood</span> */}
                Recipes at your service
            </h1>
            <div className="input-group w-50 mx-auto">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Look for your favorite recipes..." 
                    value={search}
                    onChange={onInputChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
                    </div>
            </div>
        </div>
    )
}

export default Header;