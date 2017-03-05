/**
 * Created by feizal on 3/3/17.
 */

import _ from 'lodash';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { Actions } from 'react-native-redux-router'
import { bindActionCreators } from 'redux'
import {
    AppRegistry,
    ListView,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import CustomNavigationBar from './common/NavigationBar'
import ListItem from './common/ListItem'
import ListContentView from './common/ListContentView'

import * as actionCreators from '../actions/'
import { getProducts, showLoading } from '../actions'

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: props.products,
            loading: props.loading,
        };

        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = this.ds.cloneWithRows([]);

        this.click = this.click.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(showLoading());
        this.props.dispatch(getProducts());
    }

    componentWillReceiveProps(nextProps) {
        this.dataSource = this.ds.cloneWithRows(nextProps.products || []);
    }

    render() {
        if (this.props.loading === true) {
            return (
                <View style={styles.container}>
                    <CustomNavigationBar
                        titleConfig={titleConfig}
                        rightButtonConfig={rightButtonConfig}
                    />
                    <Text style={styles.loading}>Loading...</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <CustomNavigationBar
                        titleConfig={titleConfig}
                        rightButtonConfig={rightButtonConfig}
                    />
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
            <TouchableHighlight onPress={()=>Actions.productDetail}>
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
            </TouchableHighlight>
        );
    }

    click() {
        () => Actions.productDetail
    }
}

const rightButtonConfig = {
    title: 'Search',
    handler: () => alert('On Progress'),
};

const titleConfig = {
    title: 'Products',
};

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
    loading: {
        marginTop: 15,
        textAlign: 'center',
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
        marginLeft: 15,
    },
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
