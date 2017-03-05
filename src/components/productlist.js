/**
 * Created by feizal on 3/3/17.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import _ from 'lodash';
import { AppRegistry, ListView, Text, View, Image } from 'react-native';
import Header from './common/header'
import Card from './common/card'
import CardSection from './common/cardsection'
import * as actionCreators from '../actions/'
import { getProducts, showLoading } from '../actions'

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
            loading: props.loading,
        }
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = this.ds.cloneWithRows([]);
    }

    componentWillMount() {
        this.props.dispatch(showLoading());
        this.props.dispatch(getProducts());
    }

    renderRow(product) {
        return (
            <Card>
                <CardSection>
                    <Image style={styles.image} source={{ uri: product.image }}/>
                    <View style={styles.productText}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productDescription}>{product.description}</Text>
                    </View>
                </CardSection>
            </Card>
        );
    }

    render() {
        this.dataSource = this.ds.cloneWithRows(this.props.products || []);
        if (this.props.loading === true) {
            return (
                <View>
                    <Header headerText={ 'Products' }/>
                    <Text style={styles.loading}>Loading...</Text>
                </View>
            )
        } else {
            return (
                <View>
                    <Header headerText={ 'Products' }/>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>
            );
        }
    }
}

const styles = {
    image: {
        width: 50,
        height: 50,
        marginRight: 5,
    },
    productText: {
        flex: 1,
        flexDirection: 'column',
    },
    productName: {
        fontSize:18,
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 15,
    },
    loading: {
        marginTop: 15,
        textAlign: 'center',
    }
};

const mapStateToProps = (state) => {
    return {
        products: state.productReducers.products,
        loading: state.productReducers.loading,
    }
};

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
