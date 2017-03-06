/**
 * Created by feizal on 3/3/17.
 */

import _ from 'lodash';

import React, { Component, PropTypes } from 'react'
import {
    AppRegistry,
    ListView,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { ListItem, ListContentView } from './common'
import { getProducts, showLoading } from '../actions'
import { Actions } from 'react-native-redux-router'

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = this.ds.cloneWithRows([]);
    }

    componentWillMount() {
        this.props.showLoading();
        this.props.getProducts();
    }

    componentWillReceiveProps(nextProps) {
        this.dataSource = this.ds.cloneWithRows(nextProps.products || []);
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={[styles.container, { justifyContent: 'center' }]}>
                    <ActivityIndicator animating={true} size="large"/>
                </View>
            )
        } else if (this.props.error) {
            return (
                <View style={styles.error}>
                    <Text style={styles.loading}>{this.props.error}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow.bind(this)}
                        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    />
                </View>
            );
        }
    }

    renderRow(product) {
        return (
            <TouchableHighlight onPress={()=>Actions.productDetail({data: product, onPrev: true})} underlayColor={'ghostwhite'}>
                <View>
                    <ListItem>
                        <ListContentView>
                            <Image style={styles.image} source={{ uri: product.image }}/>
                            <View style={styles.productText}>
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.productDescription}>{product.description}</Text>
                                <Text style={styles.productDescription}>{product.price}</Text>
                            </View>
                        </ListContentView>
                    </ListItem>
                </View>
            </TouchableHighlight>
        );
    }

}

const styles = {
    container: {
        flex: 1,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 5,
    },
    productText: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
    },
    productName: {
        fontSize:17,
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 15,
    },
    error: {
        color: 'red',
    },
    separator: {
        flex: 1,
        marginLeft: 15,
        borderBottomColor: '#8E8E8E',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
};

const mapStateToProps = (state) => {
    return {
        products: state.productReducers.products,
        loading: state.productReducers.loading,
        error: state.generalReducers.error,
    }
};

export default connect(mapStateToProps, { showLoading, getProducts })(ProductList);
