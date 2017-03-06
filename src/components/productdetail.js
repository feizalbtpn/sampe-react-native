/**
 * Created by feizal on 3/3/17.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    AppRegistry,
    ListView,
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { Box, BoxSection, TextLabelValue, TextLabelView } from './common'
import { getProductDetail, showLoading } from '../actions'
import StarRating from 'react-native-star-rating'
import ImageSlider from 'react-native-image-slider';

class ProductDetail extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { data } = this.props;
        this.props.showLoading();
        this.props.getProductDetail(data.id);
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
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Text style={styles.error}>{this.props.error}</Text>
                </View>
            )
        } else if (this.props.product) {
                return (
                    <ScrollView style={styles.container}>
                        <View>
                            {this.renderProductDescription()}
                            {this.renderProductSpecification()}
                        </View>
                    </ScrollView>
                );
        } else {
            return (
                <Text>Product not found</Text>
            )
        }
    }

    renderProductDescription() {
        const { name, description, price, image, images } = this.props.product;
        return (
            <View style={styles.container}>
                <ImageSlider images={images} height={280}/>
                <View style={styles.productText}>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productDescription}>{description}</Text>
                    <Text style={styles.productDescription}>{price}</Text>
                </View>
            </View>
        )
    }

    renderProductSpecification() {
        const { dimension, weight, rating } = this.props.product;
        return (
            <View>
                <Text style={styles.sectionHeader}>Specifications</Text>
                <Box>
                    <BoxSection style={{ marginLeft: 15, paddingLeft: 0, }}>
                        <TextLabelValue label={'Dimension'} value={dimension} style={{ paddingLeft: 0 }}/>
                    </BoxSection>
                    <BoxSection style={{ marginLeft: 15, paddingLeft: 0, }}>
                        <TextLabelValue label={'Weight'} value={weight} style={{ paddingLeft: 0 }}/>
                    </BoxSection>
                    <BoxSection style={{ borderBottomWidth: 0 }}>
                        <TextLabelView label={'Rating'} style={{ paddingLeft: 10 }}>
                            <StarRating disabled={true} maxStars={5} rating={rating} starSize={16}/>
                        </TextLabelView>
                    </BoxSection>
                </Box>
            </View>
        )
    }
}

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    sectionHeader: {
        marginLeft: 15,
        height: 28,
        fontWeight: 'bold',
    },
    productText: {
        flex: 1,
        padding: 15,
    },
    productName: {
        fontSize:17,
        fontWeight: 'bold',
        lineHeight: 23,
    },
    productDescription: {
        fontSize: 15,
        lineHeight: 23,
    },
    error: {
        color: 'red',
    },
};

const mapStateToProps = (state) => {
    return {
        product: state.productReducers.product,
        loading: state.productReducers.loading,
        error: state.generalReducers.error,
    }
};

export default connect(mapStateToProps, { showLoading, getProductDetail })(ProductDetail);
