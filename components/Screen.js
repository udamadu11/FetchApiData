import React from 'react';
import {View,Text, TouchableOpacity,StyleSheet,Image} from 'react-native';

export default class Screen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
    apiHandler(){
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((res)=>res.json())
        .then((resJson)=>{
            // alert(JSON.stringify(resJson))
            this.setState({data: resJson})
        });
    }
    render(){
        const {data} = this.state;
        return(
            <View style={styles.container}>
                {
                    data.map((item,idex)=>{
                        return(
                            <View style={{height:100,width:400,justifyContent:'center',alignItems:'center'}}>
    
                                <Text>{item.id}</Text>
                                <Text>{item.name}</Text>
                                <Text>{item.username}</Text>
                                <Text>{item.email}</Text>
                                <Text>{item.phone}</Text>
                                <Text>{item.website}</Text>
                            </View>
                        )
                    })
                }
                <TouchableOpacity 
                style={styles.button}
                onPress={()=>this.apiHandler()}
                >
                    <Text style={{color:'white'}}>Pull Data</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        height:42,
        width:200,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:42
    }
});