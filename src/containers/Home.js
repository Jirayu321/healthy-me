import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  // Button,
  Container,
  Divider,
  Grid,
  // Header,
  // Image,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        children: PropTypes.node
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "-5em 0em" }} vertical>
     
      
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active"> <img src='Component 3.png' alt ='...' class="d-block w-100" ></img></div>
                <div class="carousel-item"><img src='Component 4.png'alt ='...'  class="d-block w-100" ></img></div>
                <div class="carousel-item"><img src='Component 5.png'alt ='...'  class="d-block w-100" ></img></div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
       </div>
     </div>
     
          
        <Grid.Row>
          
        </Grid.Row>
      
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
          <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
             <img src='1.png' alt=''></img>
            
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            
            <p style={{ fontSize: "1.33em" }}>
            ผักผลไม้ที่สะอาด ปลอดสารพิษ สดใหม่ทุกวันจากสวน ของเราเอง เพื่อให้คุณได้รับสิ่งที่ดีที่สุด</p>
          </Grid.Column>
        </Grid.Row>
      </Grid> 
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
             <p style={{ fontSize: "1.33em" }}>
            ผักผลไม้ที่สะอาด ปลอดสารพิษ สดใหม่ทุกวันจากสวน ของเราเอง เพื่อให้คุณได้รับสิ่งที่ดีที่สุด</p>
            
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            
            <img src='1.png' alt=''></img>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
             <img src='1.png' alt=''></img>
            
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            
            <p style={{ fontSize: "1.33em" }}>
            ผักผลไม้ที่สะอาด ปลอดสารพิษ สดใหม่ทุกวันจากสวน ของเราเอง เพื่อให้คุณได้รับสิ่งที่ดีที่สุด</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
       
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          
        </Divider>
        
      
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;
