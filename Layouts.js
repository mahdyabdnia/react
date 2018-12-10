import React,{Component} from 'react';
import {Container,Header,Left,Button,Icon, Body, Title, Right, Content,Text,Footer,FooterTab,Drawer,Grid,Col,Row} from 'native-base';
import {SideBar} from './index'






 class Layouts extends Component{
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

    <Grid>
      <Col  style={{backgroundColor:'#454',height:10}}></Col>
      <Col  style={{height:150}}>
      <Row style={{backgroundColor:'#349',height:100}}></Row>
      <Row style={{backgroundColor:'#669',height:50}}></Row>
      </Col>



    </Grid>

  
</Content>




    </Container>
    
    </Drawer>  

    





  );
}




 }

export{Layouts};
