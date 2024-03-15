return (
    <MDBCol md="6">
      <div className="active-pink-3 active-pink-4 mb-4">
        <label>Search for Goods Services</label>
        <input className="form-control" type="text"
          value={this.state.searchString}
          ref="search"
          onChange={this.handleChange}
          placeholder="Search" aria-label="Search" />
        <ul>
          {_moviesList.map(l => {
            return (
              <li>
                {l.name} <a href="#">{l.banner}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </MDBCol>
  );
}
//style={{background:'#000'}}