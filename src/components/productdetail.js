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
import TextLabelValue from './common/TextLabelValue'
import * as actionCreators from '../actions/'
import { getProducts, showLoading } from '../actions'

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
            loading: props.loading,
        }
    }

    componentWillMount() {
        // this.props.dispatch(showLoading());
    }

    render() {
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
                    <Header headerText={ 'Product Detail' }/>
                    {this.renderProductDescription()}
                    {this.renderProductSpecification()}
                </View>
            );
        }
    }

    renderProductDescription() {
        const product = {};
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
        )
    }

    renderProductSpecification() {
        return (
            <Card>
                <CardSection>
                    <TextLabelValue label={'Label 1'} value={'Value 1'}/>
                    <TextLabelValue label={'Label 2'} value={'Value 2'}/>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
};

const mapStateToProps = (state) => {
    return {
        product: state.productReducers.product,
        loading: state.productReducers.loading,
    }
};

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
