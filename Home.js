import React,{Component} from 'react';
import {Container,Header,Left,Button,Icon, Body, Title, Right, Content,Text,Footer,FooterTab,Drawer} from 'native-base';
import {SideBar} from './index'






 class Home extends Component{
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
    <Title>Header</Title>
  </Body>

  <Right><Title>Header</Title></Right>
</Header>
<Content>

  <Text>This is content text</Text>
</Content>
<Footer>


  <FooterTab>
   
   <Button><Icon name='settings'></Icon></Button>


  </FooterTab>
  <FooterTab>
   
   <Button><Icon name='film'></Icon></Button>


  </FooterTab>
  <FooterTab>
   
   <Button><Icon name='cart'></Icon></Button>


  </FooterTab>
  <FooterTab>
   
   <Button><Icon name='wine'></Icon></Button>


  </FooterTab>
  <FooterTab>
   
   <Button><Icon name='refresh'></Icon>
   <Text>refresh</Text>
   </Button>


  </FooterTab>
  <FooterTab>
   
   <Button><Icon name='camera'></Icon></Button>


  </FooterTab>
</Footer>



    </Container>
    
    </Drawer>  

    





  );
}




 }

export{Home};
