import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image,ListView,StyleSheet,DeviceEventEmitter,AlertIOS} from 'react-native';
import RNIcon from '../../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../../utils/transformer.util';
import styles from './UpdateIssue.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Touchable from '../../Touchable/Touchable.component';
import DatePicker from 'react-native-datepicker'
import {connect} from 'react-redux';
import result from 'lodash/result';
import {Button} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import _ from 'lodash';
import Mailer from 'react-native-mail';



var ds;

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (link,item) => {
  dispatch(NavigationActions.navigate({routeName: link, params: {item}}));
  },
 
});

const mapStateToProps = () => ({});

class UpdateIssueView extends React.Component {


  constructor(props){
    super(props)
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
     commentsArray : []
    }
  }

  componentDidMount() {

    console.log("mounted compoasdfasf asd asdf");
    console.log(this.props.navigation)
    if(this.props.navigation.state.params.item.comments!==undefined)
    {
      this.setState({commentsArray:this.props.navigation.state.params.item.comments })
    }

     DeviceEventEmitter.addListener('AddComment', (e)=>{
      
      if(e.comments!==undefined)
    {
      this.setState({commentsArray:e.comments })
    }
    })
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(" in components will reciever props sadfaas asdf f");
  //   console.log(nextProps);
  //   if(this.props.navigation.state.item.comments!=nextProps.navigation.state.item.comments){
  //     this.setState({commentsArray:nextProps.navigation.state.item.comments })
  //   }
  // }




  static propTypes = {
    handleSubmit: PropTypes.func,
    onCategorySelect: PropTypes.func,
    navigation : PropTypes.object,
    navigateTo : PropTypes.func,
    handleClose : PropTypes.func
    }

    handleEmail = () => {
    Mailer.mail({
      subject: 'need help',
     
      body: '<b>A Bold Body</b>',
      isHTML: true,
      
    }, (error, event) => {
      console.log(error);
    });
  }
  
  closeWrapper(){
     AlertIOS.alert(
 'Approve',
 'Are you sure you want to Close this Issue ?',
 [
   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
   {text: 'Yes', onPress: () => this.props.handleClose(this.props.navigation.state.params.item.topic)},
 ],
);
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
   
    
    return (
      <Touchable >
          <View style={{height:40,padding:10}}>
              <Text>{rowData}</Text>
          </View>
      </Touchable>
      );
  }

  render () {
    const {invalid, submitting, handleSubmit = noop, goToRegister,navigation,navigateTo} = this.props;
   const dataSource = ds.cloneWithRows(this.state.commentsArray)
    
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.formContainer}>
          
          <View style={styles.formHeader}><RNIcon name='tasks' size={15} /><Text style={styles.formHeaderText}>{'Topic:'} </Text><Text>{navigation.state.params.item.topic}</Text></View>
          <View style={styles.formHeader}><RNIcon name='calendar' size={15} /><Text style={styles.formHeaderText}>{'Date:'} </Text><Text>{navigation.state.params.item.date}</Text></View>
          <View style={styles.formHeader}><RNIcon name='id-badge' size={15} /><Text style={styles.formHeaderText}>{'Category:'} </Text><Text>{navigation.state.params.item.category}</Text></View>

          <View style={styles.formHeader}><RNIcon name='pencil' size={15} /><Text style={styles.formHeaderText}>{'Description:'} </Text><Text>{navigation.state.params.item.description}</Text></View>
           <View style={styles.formHeader}><RNIcon name='user' size={15} /><Text style={styles.formHeaderText}>{'Ministry Responsible:'} </Text><Text>{navigation.state.params.item.ministry}</Text></View>

            <View style={styles.formHeader}><RNIcon name='comment' size={15} /><Text style={styles.formHeaderText}>{'Comments:'} </Text></View>
            <ListView
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections={true}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{flex: 1,height: 0.5,backgroundColor: 'black'}} 
            />}/>
          
        </View>
        <View>{navigation.state.params.item.status==='Closed' ? (<Text style={{fontStyle:'italic',paddingTop:20}}>This issue has been closed</Text>):(

          <View>
        <View style={styles.buttonContainer} >
           <Button
              onPress={() => navigateTo('AddCommentScreen',navigation.state.params.item)}
              buttonStyle={{backgroundColor: '#4286f4', borderRadius: 10, width: 300}}
              title='Add Comments >' 
              />
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:20}}>
        <View >
         <Button
              iconLeft
              onPress={this.handleEmail}
              icon={{name: 'envelope', type: 'font-awesome'}}
              buttonStyle={{backgroundColor: 'grey',  width: 120}}
              title='Email' 
              />
        </View>
        
        <View >
         <Button
              iconLeft
              icon={{name: 'phone', type: 'font-awesome'}}
              buttonStyle={{backgroundColor: '#f4a341',  width: 120}}
              title='Call' 
              />
        </View>

         <View >
         <Button
              iconLeft
              onPress={() => this.closeWrapper()}
              icon={{name: 'times-circle', type: 'font-awesome'}}
              buttonStyle={{backgroundColor: '#e24444',  width: 120}}
              title='Close' 
              />
        </View>
        </View>
      </View>
)}</View>

      </KeyboardAwareScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateIssueView);


