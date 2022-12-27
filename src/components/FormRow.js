import React from 'react';

import {StyleSheet, View} from 'react-native';

const FormRow = (props) => {
    const {children, last, first} = props
    return (
        <View style={[styles.container,
            first? styles.first: null ,
            last? styles.last: null]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'rgb(255,255,255)',
        marginTop:5,
        marginBottom:5,
        elevation:1,
        borderRadius:10
    },
    first:{
        marginTop:10,
    },
    last:{
        marginBottom:10,
    },
})
export default FormRow;


