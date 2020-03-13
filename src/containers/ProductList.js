import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  Container,
  Dimmer,
 
  Item,
  Label,
  Loader,
  Message,
  Button,
  Icon,
  Segment
} from "semantic-ui-react";
import { productListURL, addToCartURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";

class ProductList extends React.Component {
  state = {
    loading: false,
    error: null,
    data: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(productListURL)
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  }

  handleAddToCart = slug => {
    this.setState({ loading: true });
    authAxios
      .post(addToCartURL, {slug})
      .then(res => {
        console.log(res)
        this.props.refreshCart();
        this.setState({ loading: false });
      })
      .catch(err => {
        console.log(err)
        this.setState({ error: err, loading: false });
      });
  };

  TestUser = () => {
    authAxios
      .get('users/detial')
      .then(res => {
        console.log(res)
        
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    const { data, error, loading } = this.state;
    return (
      <Container>
        {error && (
          <Message
            error
            header="There was some errors with your submission"
            content={JSON.stringify(error)}
          />
        )}
        {loading && (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          </Segment>
        )}
        <Item.Group divided>
          {data.map(item => {
            return (<Label>
            <Item key={item.id}>
                <Item.Image src={item.image} as="a"
                    onClick={() =>
                      this.props.history.push(`/products/${item.id}`)
                    }/>
                <Item.Content>
              <Item.Meta>
          
                  </Item.Meta>
                  
                  <Item.Extra>
                    <Button
                      primary
                      floated="left"
                      icon
                      labelPosition="left"
                      onClick={() => this.handleAddToCart(item.slug)}
                    ><Icon name="cart plus" />
                    เพิ่มในตะกร้า
                    </Button>
                    </Item.Extra>
                </Item.Content>
              </Item></Label> 
            );
          })}
        </Item.Group>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refreshCart: () => dispatch(fetchCart())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductList);
