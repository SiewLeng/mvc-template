var React = require("react");

class ListItem extends React.Component {
    render() {
        let urlAction = `/blouse/${this.props.item.img_id}`;
        return (
            <div className="box">
            <a href={urlAction}><img src={this.props.item.img_path}/></a>
            <div className="text">{this.props.item.description}</div>
            </div>
        );
    }
}

class Home extends React.Component {
    render() {
        let loginMessage;
        if (this.props.email===undefined) {
            loginMessage = "Login"
        }
        else {
            loginMessage = this.props.email;
        }
        function createDiv(item, index) {
            return <ListItem key={index} item={item}> </ListItem>;
        }
        let itemsElement = this.props.item.map(createDiv);

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="/css/home_blouse_styles.css"/>
        </head>
        <body>
            <div className="container">
                 <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <h1>Purpur Boutique</h1>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-d-auto">
                        <a href="/login">{loginMessage}</a> <a href="">Logout</a> <a href="/mycart">My Cart</a> <a href="/signup">Sign Up</a>
                    </div>
                </div>
                <div className="row" id="content">
                    <div className="col-2">
                        <h6> Search Blouse By </h6>
                        <div> <button> Price</button> </div>
                        <div> <button> Popularity</button> </div>
                    </div>
                    <div className="col-10">
                    {itemsElement}
                    </div>
                </div>
                <div className="row justify-content-md-center" id="footer">
                    <div className="col-md-auto">
                        <h6> Customer Care </h6>
                        <a href=""> Delivery </a>  <a href=""> Product Policy </a> <a href=""> Contact us </a> <a href=""> How to return </a>
                    </div>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;