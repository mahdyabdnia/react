import React,{Component} from 'react';
import {Container,Header,Left,Button,Icon, Body, Title, Right, Content,Text,Footer,FooterTab,Drawer,Grid,Col,Row, List, ListItem, Switch, Thumbnail} from 'native-base';
import {SideBar} from './index'






 class Lists extends Component{

    constructor(props){

        super(props)
        this.state={
            switch1:true,
            switch2:true
        }
    }
  closeDrawer=()=>{
    this.drawer._root.close()
  }

  openDrawer=()=>{

    this.drawer._root.open()
  }

  
  
render(){
  const {navigate}=this.props.navigation;
  return(

   <Drawer 
   ref={(ref)=>{this.drawer=ref;}}
   content={<SideBar navigate={navigate}/>}
   onClose={()=>this.closeDrawer()
   }>
    
    <Container>
<Header>
  <Left>
<Button transparent onPress={()=>this.openDrawer()}  >
<Icon name="menu"></Icon>

</Button>

  </Left>
  <Body>
    <Title>Layouts</Title>
  </Body>

  
</Header>
<Content>

    <List>


        <ListItem>
              <Text style={{color:'red'}}>ALi karimi</Text>
        </ListItem>

        <ListItem>


            <Text style={{color:'blue'}}>farhad majidi</Text>
        </ListItem>
    </List>


    <List>


        <ListItem itemDivider style={{backgroundColor:'#777'}}>
         <Text>A</Text>
        </ListItem>

        <ListItem>
            <Text>Ali</Text>
        </ListItem>

        <ListItem>
            <Text>
                Ahmad
            </Text>
        </ListItem>
    </List>


<List>


        <ListItem itemHeader style={{backgroundColor:'#FFF'}}>
         <Text>
             Frontend</Text>
        </ListItem>

        <ListItem>
            <Text>CSS</Text>
        </ListItem>

        <ListItem>
            <Text>
               HTML
            </Text>
        </ListItem>
    </List>
    


<List>
<ListItem>
<Left>

    <Icon name='plane'/>
</Left>
<Body>
    <Text>
        Airplane Mode
    </Text>
</Body>
<Right>
<Switch value={this.state.switch2 } onPress={()=>this.setState({switch2:!this.state.switch2})}></Switch>
</Right>


</ListItem>


<ListItem icon>
<Left><Icon name='wifi'/></Left>
<Body><Text>wi-fi</Text></Body>
<Right><Switch value={this.state.switch1 } onPress={()=>this.setState({switch1:!this.state.switch1})}></Switch>
</Right>
</ListItem>



</List>

<List style={{marginBottom:10}}>


    <ListItem  avatar> 
       <Left>
           <Thumbnail source={require('../image/11.png')}/>
       </Left>


        <Body>
            <Text>mahdy</Text>
            <Text note>This my picture in cartoon world</Text>
        </Body>


        <Right>
            <Text note>11:43</Text>
        </Right>
    </ListItem>
</List>

<List style={{marginBottom:10}}>


<ListItem  avatar> 
  
       <Thumbnail source={require('../image/11.png')} square size={80}/>
 


    <Body>
        <Text>mahdy</Text>
        <Text note>This my picture in cartoon world</Text>
    </Body>


    <Right>
        <Text note>11:43</Text>
    </Right>
</ListItem>
</List>
  
</Content>




    </Container>
    
    </Drawer>  

    





  );
}




 }

export{Lists};
